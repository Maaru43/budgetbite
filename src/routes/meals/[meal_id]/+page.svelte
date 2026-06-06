<!-- src/routes/meals/[meal_id]/+page.svelte -->
<script>
 import { onMount } from 'svelte';
 import { meals, removeMeal } from '$lib/stores/meals.js';
 import { page } from '$app/stores';
 import { goto } from '$app/navigation';
 import { favoriteIds, addFavorite, removeFavorite } from '$lib/stores/favorites.js';

 let mealId = $derived($page.params.meal_id);

 let meal = $state(null);
 let isFavorite = $state(false);
 let statusMessage = $state('');
 let statusType = $state('success');
 let isLoading = $state(true);
 let errorMessage = $state('');

 let selectedDay = $state('Montag');

 const weekDays = [
  'Montag',
  'Dienstag',
  'Mittwoch',
  'Donnerstag',
  'Freitag',
  'Samstag',
  'Sonntag'
 ];

 function normalizeMeal(meal) {
  return {
   ...meal,
   id: meal.id ?? meal._id,
   time: meal.time ?? meal.timeMinutes ?? 0,
   timeMinutes: meal.timeMinutes ?? meal.time ?? 0
  };
 }

 function formatPrice(value) {
  return Number(value).toFixed(2);
 }

 function getTime(meal) {
  return meal.timeMinutes ?? meal.time ?? 0;
 }

 function getIngredients(meal) {
  if (!meal.ingredients) return [];
  if (Array.isArray(meal.ingredients)) return meal.ingredients;
  return meal.ingredients.split(',').map((ingredient) => ingredient.trim());
 }

 async function loadMeal() {
  isLoading = true;
  errorMessage = '';

  const localMeal = $meals.find((m) => String(m.id) === String(mealId));

  if (localMeal) {
   meal = normalizeMeal(localMeal);
   isFavorite = $favoriteIds.includes(meal.id);
   isLoading = false;
   return;
  }

  try {
   const response = await fetch(`/api/meals/${mealId}`);

   if (!response.ok) {
    meal = null;
    return;
   }

   const data = await response.json();
   meal = normalizeMeal(data);
   isFavorite = $favoriteIds.includes(meal.id);
  } catch (error) {
   console.error(error);
   errorMessage = 'Die Mahlzeit konnte nicht geladen werden.';
   meal = null;
  } finally {
   isLoading = false;
  }
 }

 onMount(() => {
  loadMeal();
 });

 function toggleFavorite() {
  if (!meal) return;

  if (isFavorite) {
   removeFavorite(meal.id);
   statusMessage = 'Aus Favoriten entfernt.';
   statusType = 'warning';
   isFavorite = false;
  } else {
   addFavorite(meal.id);
   statusMessage = 'Zu Favoriten hinzugefügt.';
   statusType = 'success';
   isFavorite = true;
  }
 }

 function addToPlanner() {
  if (!meal) return;

  const savedPlan = localStorage.getItem('budgetbite-weekly-plan');
  const weeklyPlan = savedPlan ? JSON.parse(savedPlan) : {};

  if (!weeklyPlan[selectedDay]) {
   weeklyPlan[selectedDay] = [];
  }

  const plannedMeal = {
   id: meal.id,
   name: meal.name,
   price: meal.price,
   time: meal.timeMinutes ?? meal.time,
   category: meal.category
  };

  const alreadyPlanned = weeklyPlan[selectedDay].some(
   (item) => String(item.id) === String(meal.id)
  );

  if (!alreadyPlanned) {
   weeklyPlan[selectedDay] = [...weeklyPlan[selectedDay], plannedMeal];
   localStorage.setItem('budgetbite-weekly-plan', JSON.stringify(weeklyPlan));

   statusMessage = `Mahlzeit wurde für ${selectedDay} eingeplant.`;
   statusType = 'success';

   window.alert(`Mahlzeit wurde für ${selectedDay} eingeplant.`);
  } else {
   statusMessage = `Diese Mahlzeit ist bereits für ${selectedDay} eingeplant.`;
   statusType = 'warning';

   window.alert(`Diese Mahlzeit ist bereits für ${selectedDay} eingeplant.`);
  }
 }

 async function deleteMeal() {
  if (!meal) return;

  const confirmed = window.confirm('Möchtest du diese Mahlzeit wirklich löschen?');
  if (!confirmed) return;

  try {
   const response = await fetch(`/api/meals/${meal.id}`, {
    method: 'DELETE'
   });

   if (!response.ok) {
    console.warn('Mahlzeit konnte nicht aus MongoDB gelöscht werden oder ist lokal.');
   }
  } catch (error) {
   console.warn('MongoDB-Löschung fehlgeschlagen. Lokale Löschung wird trotzdem versucht.', error);
  }

  removeMeal(meal.id);
  removeFavorite(meal.id);

  const savedPlan = localStorage.getItem('budgetbite-weekly-plan');
  const weeklyPlan = savedPlan ? JSON.parse(savedPlan) : {};

  for (const day of Object.keys(weeklyPlan)) {
   weeklyPlan[day] = weeklyPlan[day].filter(
    (plannedMeal) => String(plannedMeal.id) !== String(meal.id)
   );
  }

  localStorage.setItem('budgetbite-weekly-plan', JSON.stringify(weeklyPlan));

  meal = null;
  goto('/meals?deleted=true');
 }
</script>

{#if isLoading}
 <section class="page-card">
  <span class="eyebrow">Laden</span>
  <h1 class="section-title">Mahlzeit wird geladen...</h1>
 </section>
{:else if meal}
 <section class="page-card detail-card">
  <div class="card-header">
   <div>
    <span class="eyebrow">Mahlzeit</span>
    <h1 class="section-title">{meal.name}</h1>
    <p class="section-subtitle">{meal.category}</p>
   </div>

   <span class="pill-small">{formatPrice(meal.price)} CHF</span>
  </div>

  <div class="detail-data">
   <p><span class="card-label">Zeit:</span> {getTime(meal)} Minuten</p>
   <p><span class="card-label">Kategorie:</span> {meal.category}</p>
   <p><span class="card-label">Zutaten:</span> {getIngredients(meal).join(', ')}</p>
  </div>

  <div class="card-row">
   {#if meal.vegetarian}
    <span class="pill-small">Vegetarisch</span>
   {/if}

   {#if meal.hearty}
    <span class="pill-small">Sättigend</span>
   {/if}
  </div>

  <div class="planner-box">
   <h2>Zum Wochenplan hinzufügen</h2>

   <label class="form-label" for="planner-day">
    Wochentag auswählen
    <select id="planner-day" class="select-field" bind:value={selectedDay}>
     {#each weekDays as day}
      <option value={day}>{day}</option>
     {/each}
    </select>
   </label>

   <button class="primary-button" type="button" onclick={addToPlanner}>
    Einplanen
   </button>

   <a class="secondary-button" href="/planner">
    Zum Wochenplan
   </a>
  </div>

{#if statusMessage}
 <div class="status-alert {statusType}" role="status">
  {statusMessage}
 </div>
{/if}

{#if $page.url.searchParams.get('from') === 'find'}
 <div class="page-actions">
  <a class="secondary-button" href="/find?step=4">
   Zurück zu den Ergebnissen
  </a>
 </div>
{/if}

<div class="page-actions">
   {#if isFavorite}
    <button class="secondary-button" type="button" onclick={toggleFavorite}>
     Favorit entfernen
    </button>
   {:else}
    <button class="primary-button" type="button" onclick={toggleFavorite}>
     Favorit speichern
    </button>
   {/if}

   <button class="danger-button" type="button" onclick={deleteMeal}>
    Löschen
   </button>
  </div>
 </section>
{:else}
 <section class="page-card">
  <span class="eyebrow">Nicht gefunden</span>
  <h1 class="section-title">Mahlzeit nicht gefunden</h1>

  {#if errorMessage}
   <p class="section-subtitle">{errorMessage}</p>
  {:else}
   <p class="section-subtitle">
    Diese Mahlzeit existiert nicht mehr oder wurde gelöscht.
   </p>
  {/if}

  <div class="page-actions">
   <a class="primary-button" href="/meals">Zurück zu allen Mahlzeiten</a>
  </div>
 </section>
{/if}

<style>
 .planner-box {
  display: grid;
  gap: 14px;
  margin-top: 24px;
  padding-top: 20px;
  border-top: 1px solid var(--border);
 }

 .planner-box h2 {
  margin: 0;
  font-size: 1.2rem;
 }
</style>