<!-- src/routes/meals/+page.svelte -->
<script>
	import { meals } from '$lib/data.js';
	import MealCard from '$lib/components/MealCard.svelte';
</script>

<h2>Alle Mahlzeiten</h2>

<div class="meals">
	{#each meals as meal}
		<MealCard {meal} />
	{/each}
</div>

<style>
	.meals {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
</style>