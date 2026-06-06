<!-- src/lib/components/MealCard.svelte -->
<script>
 import { favoriteIds } from '$lib/stores/favorites.js';

 let { meal, hint = '', source = '', returnQuery = '' } = $props();

 function formatPrice(value) {
  return Number(value).toFixed(2);
 }

 function getTime(meal) {
  return meal.timeMinutes ?? meal.time ?? 0;
 }

let detailHref = $derived(
 source === 'find'
  ? `/meals/${meal.id}?from=find&return=${encodeURIComponent(returnQuery)}`
  : `/meals/${meal.id}`
);
</script>

<article class="card">
 <div class="card-header">
  <div>
   <h2 class="card-title">{meal.name}</h2>
   <p class="card-meta">{meal.category}</p>
  </div>

  <div class="card-header-right">
   <span class="pill-small">{formatPrice(meal.price)} CHF</span>

   {#if $favoriteIds.includes(String(meal.id))}
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

 {#if hint}
  <p class="card-hint">{hint}</p>
 {/if}

 <div class="page-actions" style="margin-top: 18px;">
  <a class="secondary-button" href={detailHref}>Details anzeigen</a>
 </div>
</article>