<h1>BudgetBite</h1>
<p>Hilft Studierenden mit wenig Zeit und begrenztem Budget, günstige und schnelle Mahlzeiten zu finden.</p>
<div class="buttons">
	<a href="/find" class="button">Mahlzeit finden</a>
	<a href="/meals" class="button">Alle Mahlzeiten</a>
</div>

<style>
	h1 {
		text-align: center;
		color: #333;
	}
	p {
		text-align: center;
		font-size: 1.2em;
		margin-bottom: 20px;
	}
	.buttons {
		display: flex;
		justify-content: center;
		gap: 20px;
	}
	.button {
		display: inline-block;
		padding: 10px 20px;
		background-color: #007bff;
		color: white;
		text-decoration: none;
		border-radius: 5px;
		font-size: 1em;
	}
	.button:hover {
		background-color: #0056b3;
	}
	@media (max-width: 600px) {
		.buttons {
			flex-direction: column;
			align-items: center;
		}
	}
</style>
