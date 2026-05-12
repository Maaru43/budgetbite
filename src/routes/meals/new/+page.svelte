<!-- src/routes/meals/new/+page.svelte -->
<script>
	let name = $state('');
	let price = $state('');
	let time = $state('');
	let category = $state('');
	let ingredients = $state('');
	let submitted = $state(false);

	function submitForm(event) {
		event.preventDefault();
		// Hier würden wir normalerweise die Daten speichern
		console.log({ name, price, time, category, ingredients });
		submitted = true;
	}
</script>

<h2>Neue Mahlzeit erfassen</h2>

{#if submitted}
	<p style="color: green;">Mahlzeit erfolgreich erfasst!</p>
{:else}
	<form onsubmit={submitForm}>
		<label>
			Name:
			<input type="text" bind:value={name} required />
		</label>
		<label>
			Preis (CHF):
			<input type="number" bind:value={price} required />
		</label>
		<label>
			Zeit (Minuten):
			<input type="number" bind:value={time} required />
		</label>
		<label>
			Kategorie:
			<input type="text" bind:value={category} required />
		</label>
		<label>
			Zutaten (kommagetrennt):
			<input type="text" bind:value={ingredients} required />
		</label>
		<button type="submit">Speichern</button>
	</form>
{/if}

<style>
	form {
		display: flex;
		flex-direction: column;
		max-width: 400px;
	}
	label {
		margin-bottom: 10px;
		display: flex;
		flex-direction: column;
	}
	input {
		margin-top: 5px;
		padding: 5px;
	}
	button {
		margin-top: 20px;
		padding: 10px;
		background-color: #007bff;
		color: white;
		border: none;
		border-radius: 5px;
		cursor: pointer;
	}
	button:hover {
		background-color: #0056b3;
	}
</style>