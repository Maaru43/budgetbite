<script>
 import { meals } from '$lib/stores/meals.js';
 import { favoriteIds, removeFavorite } from '$lib/stores/favorites.js';
 import MealCard from '$lib/components/MealCard.svelte';

 let favoriteMeals = $state([]);

 $effect(() => {
  favoriteMeals = $meals.filter((meal) => $favoriteIds.includes(meal.id));
 });
</script>

<section class="page-card">
 <span class="eyebrow">Favoriten</span>
 <h1 class="section-title">Deine gespeicherten Mahlzeiten</h1>
 <p class="section-subtitle">Hier findest du alle Mahlzeiten, die du als Favorit markiert hast.</p>

 {#if favoriteMeals.length > 0}
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
