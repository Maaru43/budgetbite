<!-- src/routes/find/+page.svelte -->
<script>
	import { meals } from '$lib/data.js';
	import MealCard from '$lib/components/MealCard.svelte';

	let budget = $state('egal');
	let time = $state('egal');
	let filteredMeals = $state(meals);

	function filterMeals() {
		filteredMeals = meals.filter(meal => {
			let budgetMatch = budget === 'egal' || meal.price <= parseInt(budget);
			let timeMatch = time === 'egal' || meal.time <= parseInt(time);
			return budgetMatch && timeMatch;
		});
	}

	$effect(() => {
		filterMeals();
	});
</script>

<h2>Mahlzeit finden</h2>

<div class="filters">
	<label>
		Maximales Budget:
		<select bind:value={budget}>
			<option value="egal">Egal</option>
			<option value="5">5 CHF</option>
			<option value="8">8 CHF</option>
		</select>
	</label>
	<label>
		Maximale Zeit:
		<select bind:value={time}>
			<option value="egal">Egal</option>
			<option value="10">10 Minuten</option>
			<option value="20">20 Minuten</option>
		</select>
	</label>
</div>

<div class="meals">
	{#each filteredMeals as meal}
		<MealCard {meal} />
	{/each}
</div>

<style>
	.filters {
		display: flex;
		gap: 20px;
		margin-bottom: 20px;
		flex-wrap: wrap;
	}
	label {
		display: flex;
		flex-direction: column;
	}
	select {
		margin-top: 5px;
		padding: 5px;
	}
	.meals {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
	@media (max-width: 600px) {
		.filters {
			flex-direction: column;
		}
	}
</style>