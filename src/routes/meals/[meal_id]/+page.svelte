<script>
 import { meals } from '$lib/stores/meals.js';
 import { favoriteIds } from '$lib/stores/favorites.js';
 import { page } from '$app/stores';

 let searchTerm = $state('');

 function formatPrice(value) {
  return Number(value).toFixed(2);
 }

 function getIngredientsText(meal) {
  if (!meal.ingredients) return '';
  if (Array.isArray(meal.ingredients)) return meal.ingredients.join(' ');
  return meal.ingredients;
 }

 let filteredMeals = $derived(
  $meals.filter((meal) => {
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
      <span class="pill-small">{meal.time} min</span>

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