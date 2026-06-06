<script>
 import { meals } from '$lib/stores/meals.js';
 import { favoriteIds } from '$lib/stores/favorites.js';
 import { page } from '$app/stores';
 import { onMount } from 'svelte';

 let searchTerm = $state('');
 let mongoMeals = $state([]);
 let isLoading = $state(true);
 let errorMessage = $state('');

 function formatPrice(value) {
  return Number(value).toFixed(2);
 }

 function getTime(meal) {
  return meal.timeMinutes ?? meal.time ?? 0;
 }

 function getIngredientsText(meal) {
  if (!meal.ingredients) return '';
  if (Array.isArray(meal.ingredients)) return meal.ingredients.join(' ');
  return meal.ingredients;
 }

 function normalizeMeal(meal) {
  return {
   ...meal,
   id: meal.id ?? meal._id,
   time: meal.time ?? meal.timeMinutes ?? 0,
   timeMinutes: meal.timeMinutes ?? meal.time ?? 0
  };
 }

 async function loadMealsFromMongoDB() {
  isLoading = true;
  errorMessage = '';

  try {
   const response = await fetch('/api/meals');

   if (!response.ok) {
    throw new Error('Mahlzeiten konnten nicht aus MongoDB geladen werden.');
   }

   const data = await response.json();
   mongoMeals = data.map(normalizeMeal);
  } catch (error) {
   console.error(error);
   errorMessage =
    'MongoDB konnte nicht geladen werden. Es werden lokale Beispielmahlzeiten angezeigt.';
   mongoMeals = [];
  } finally {
   isLoading = false;
  }
 }

 onMount(() => {
  loadMealsFromMongoDB();
 });

 let allMeals = $derived(
  mongoMeals.length > 0
   ? mongoMeals
   : $meals.map(normalizeMeal)
 );

 let filteredMeals = $derived(
  allMeals.filter((meal) => {
   const search = searchTerm.toLowerCase().trim();

   if (!search) return true;

   const searchableText = [
    meal.name,
    meal.category,
    meal.tags?.join(' '),
    getIngredientsText(meal)
   ]
    .join(' ')
    .toLowerCase();

   return searchableText.includes(search);
  })
 );

 let deletedMessage = $derived($page.url.searchParams.get('deleted') === 'true');
</script>

<section class="page-card">
 <span class="eyebrow">Mahlzeiten</span>

 <h1 class="section-title">Alle Mahlzeiten</h1>

 <p class="section-subtitle">
  Durchsuche BudgetBite und finde günstige, schnelle Gerichte.
 </p>

 {#if deletedMessage}
  <div class="status-alert success" role="status">
   Mahlzeit wurde gelöscht.
  </div>
 {/if}

 {#if errorMessage}
  <div class="status-alert warning" role="status">
   {errorMessage}
  </div>
 {/if}

 {#if isLoading}
  <div class="status-alert success" role="status">
   Mahlzeiten werden aus MongoDB geladen...
  </div>
 {/if}

 <label class="form-label search-box" for="meal-search">
  Suche
  <input
   id="meal-search"
   class="input-field"
   type="text"
   placeholder="Suche nach Name, Kategorie oder Zutaten..."
   bind:value={searchTerm}
  />
 </label>

 {#if filteredMeals.length > 0}
  <div class="meals-grid">
   {#each filteredMeals as meal}
    <article class="card">
     <div class="card-header">
      <div>
       <h2 class="card-title">{meal.name}</h2>
       <p class="card-meta">{meal.category}</p>
      </div>

      <div class="card-header-right">
       <span class="pill-small">{formatPrice(meal.price)} CHF</span>

       {#if $favoriteIds.includes(meal.id)}
        <span class="pill-small favorite-pill">♥ Favorit</span>
       {/if}
      </div>
     </div>

     <div class="card-row">
      <span class="pill-small">{getTime(meal)} min</span>

      {#if meal.vegetarian}
       <span class="pill-small">Vegetarisch</span>
      {/if}

      {#if meal.hearty}
       <span class="pill-small">Sättigend</span>
      {/if}
     </div>

     <div class="page-actions">
      <a class="secondary-button" href={`/meals/${meal.id}`}>
       Details anzeigen
      </a>
     </div>
    </article>
   {/each}
  </div>
 {:else}
  <div class="card">
   <h2 class="card-title">Keine Mahlzeiten gefunden.</h2>
   <p class="card-meta">
    Versuche einen anderen Suchbegriff oder erfasse eine neue Mahlzeit.
   </p>

   <div class="page-actions">
    <a class="primary-button" href="/meals/new">Neue Mahlzeit erfassen</a>
   </div>
  </div>
 {/if}
</section>

<style>
 .search-box {
  margin: 20px 0;
 }
</style>