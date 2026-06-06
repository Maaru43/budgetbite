<script>
 import { onMount } from 'svelte';
 import { meals } from '$lib/stores/meals.js';
 import { favoriteIds, removeFavorite } from '$lib/stores/favorites.js';
 import MealCard from '$lib/components/MealCard.svelte';

 let mongoMeals = $state([]);
 let isLoading = $state(true);
 let errorMessage = $state('');

 function normalizeMeal(meal) {
  return {
   ...meal,
   id: String(meal.id ?? meal._id),
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
    throw new Error('MongoDB konnte nicht geladen werden.');
   }

   const data = await response.json();
   mongoMeals = data.map(normalizeMeal);
  } catch (error) {
   console.error(error);
   errorMessage =
    'MongoDB konnte nicht geladen werden. Es werden lokale Favoriten angezeigt.';
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

 let favoriteMeals = $derived(
  allMeals.filter((meal) => $favoriteIds.includes(String(meal.id)))
 );
</script>

<section class="page-card">
 <span class="eyebrow">Favoriten</span>
 <h1 class="section-title">Deine gespeicherten Mahlzeiten</h1>
 <p class="section-subtitle">Hier findest du alle Mahlzeiten, die du als Favorit markiert hast.</p>

 {#if errorMessage}
  <div class="status-alert warning" role="status">
   {errorMessage}
  </div>
 {/if}

 {#if isLoading}
  <p class="section-subtitle">Favoriten werden geladen...</p>
 {:else if favoriteMeals.length > 0}
  <div class="meals-grid">
   {#each favoriteMeals as meal}
    <div>
     <MealCard {meal} />

     <div class="page-actions" style="margin-top: 12px;">
      <button class="danger-button" type="button" onclick={() => removeFavorite(meal.id)}>
       Favorit entfernen
      </button>
     </div>
    </div>
   {/each}
  </div>
 {:else}
  <div class="empty-state">
   <p class="section-subtitle">Du hast noch keine Favoriten gespeichert.</p>
   <a href="/find" class="primary-button">Mahlzeit finden</a>
  </div>
 {/if}
</section>