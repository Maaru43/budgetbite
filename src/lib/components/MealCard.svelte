<!-- src/lib/components/MealCard.svelte -->
<script>
	let { meal } = $props();
</script>

<div class="meal-card">
	<h3>{meal.name}</h3>
	<p>Preis: {meal.price} CHF</p>
	<p>Zeit: {meal.time} Minuten</p>
	<p>Kategorie: {meal.category}</p>
	<a href="/meals/{meal.id}">Details anzeigen</a>
</div>

<style>
	.meal-card {
		border: 1px solid #ddd;
		border-radius: 8px;
		padding: 16px;
		margin: 8px;
		background-color: #f9f9f9;
		max-width: 300px;
	}
	.meal-card h3 {
		margin: 0 0 8px 0;
	}
	.meal-card p {
		margin: 4px 0;
	}
	.meal-card a {
		display: inline-block;
		margin-top: 8px;
		color: #007bff;
		text-decoration: none;
	}
	.meal-card a:hover {
		text-decoration: underline;
	}
</style>