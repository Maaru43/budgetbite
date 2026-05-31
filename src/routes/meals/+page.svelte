<!-- src/routes/meals/+page.svelte -->
<script>
	import { page } from '$app/stores';
	import { meals } from '$lib/stores/meals.js';
	import MealCard from '$lib/components/MealCard.svelte';

	let searchQuery = $state('');
	let filteredMeals = $state([]);

	function normalizeSearch(value) {
	 return value.trim().toLowerCase();
	}

	$effect(() => {
	 const query = normalizeSearch(searchQuery);
	 filteredMeals = $meals.filter((meal) => {
	  if (!query) return true;
	  const ingredientText = Array.isArray(meal.ingredients)
	   ? meal.ingredients.join(' ').toLowerCase()
	   : String(meal.ingredients).toLowerCase();
	  const tagText = Array.isArray(meal.tags)
	   ? meal.tags.join(' ').toLowerCase()
	   : String(meal.tags || '').toLowerCase();
	  return (
	   meal.name.toLowerCase().includes(query) ||
	   meal.category.toLowerCase().includes(query) ||
	   ingredientText.includes(query) ||
	   tagText.includes(query)
	  );
	 });
	});
</script>

<section class="page-card">
 {#if $page.url.searchParams.get('deleted')}
  <div class="status-alert success" role="status">
   Mahlzeit wurde gelöscht.
  </div>
 {/if}
 <div>
  <h1 class="section-title">Alle Mahlzeiten</h1>
  <p class="section-subtitle">Durchsuche BudgetBite und finde neue, schnelle Gerichte.</p>
 </div>

 <label class="form-label">
  Suche
  <input
   class="input-field"
   type="search"
   bind:value={searchQuery}
   placeholder="Suche nach Name, Kategorie oder Zutaten..."
  />
 </label>

 {#if filteredMeals.length > 0}
  <div class="meals-grid">
   {#each filteredMeals as meal}
    <MealCard {meal} />
   {/each}
  </div>
 {:else}
  <div class="empty-state">
   <p class="section-subtitle">Keine Mahlzeiten gefunden.</p>
   <a href="/meals/new" class="primary-button">Neue Mahlzeit erfassen</a>
  </div>
 {/if}
</section>