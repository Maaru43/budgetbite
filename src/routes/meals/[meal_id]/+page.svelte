<!-- src/routes/meals/[meal_id]/+page.svelte -->
<script>
 import { meals } from '$lib/stores/meals.js';
 import { page } from '$app/stores';
 import { goto } from '$app/navigation';
 import { favoriteIds, addFavorite, removeFavorite } from '$lib/stores/favorites.js';
 import { removeMeal } from '$lib/stores/meals.js';

 let mealId = $derived($page.params.meal_id);
 let meal = $state(null);
 let isFavorite = $state(false);
 let statusMessage = $state('');
 let statusType = $state('success');

 function formatPrice(value) {
  return Number(value).toFixed(2);
 }

 $effect(() => {
  meal = $meals.find((m) => m.id == mealId);
  if (!meal) {
   return;
  }
  isFavorite = $favoriteIds.includes(meal.id);
 });

 function clearStatus() {
  statusMessage = '';
 }

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

 function deleteMeal() {
  if (!meal) return;
  const confirmed = window.confirm('Möchtest du diese Mahlzeit wirklich löschen?');
  if (!confirmed) return;
  removeMeal(meal.id);
  removeFavorite(meal.id);
    meal = null;
    goto('/meals?deleted=true');
 }
</script>

{#if meal}
 <section class="page-card detail-card">
  <div class="card-header">
   <div>
    <h1 class="card-title">{meal.name}</h1>
    <p class="card-meta">{meal.category}</p>
   </div>
   <span class="pill-small">{formatPrice(meal.price)} CHF</span>
  </div>

  <div class="detail-data">
   <p><span class="card-label">Zeit:</span> {meal.time} Minuten</p>
   <p><span class="card-label">Kategorie:</span> {meal.category}</p>
   <p><span class="card-label">Zutaten:</span> {meal.ingredients.join(', ')}</p>
  </div>

  <div class="card-row">
   {#if meal.vegetarian}
    <span class="pill-small">Vegetarisch</span>
   {/if}
   {#if meal.hearty}
    <span class="pill-small">Sättigend</span>
   {/if}
  </div>

  {#if statusMessage}
   <div class="status-alert {statusType}" role="status">
    {statusMessage}
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
{/if}