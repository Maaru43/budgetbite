<!-- src/routes/meals/[meal_id]/+page.svelte -->
<script>
	import { meals } from '$lib/data.js';
	import { page } from '$app/stores';

	let mealId = $derived($page.params.meal_id);
	let meal = $derived(meals.find(m => m.id == mealId));
	let isFavorite = $state(false);

	$effect(() => {
		if (!meal) {
			throw new Error('Meal not found');
		}
	});
</script>

{#if meal}
	<h2>{meal.name}</h2>
	<p><strong>Preis:</strong> {meal.price} CHF</p>
	<p><strong>Zeit:</strong> {meal.time} Minuten</p>
	<p><strong>Kategorie:</strong> {meal.category}</p>
	<p><strong>Zutaten:</strong> {meal.ingredients.join(', ')}</p>
	<button onclick={() => isFavorite = !isFavorite}>
		{isFavorite ? 'Favorit entfernt' : 'Favorit speichern'}
	</button>
	{#if isFavorite}
		<p style="color: green;">Als Favorit gespeichert!</p>
	{/if}
{/if}

<style>
	button {
		padding: 10px 20px;
		background-color: #28a745;
		color: white;
		border: none;
		border-radius: 5px;
		cursor: pointer;
	}
	button:hover {
		background-color: #218838;
	}
</style>