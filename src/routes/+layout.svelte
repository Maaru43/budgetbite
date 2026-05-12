<script>
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>BudgetBite</title>
</svelte:head>

<nav>
	<a href="/">Home</a>
	<a href="/find">Mahlzeit finden</a>
	<a href="/meals">Alle Mahlzeiten</a>
	<a href="/meals/new">Neue Mahlzeit</a>
</nav>

<main>
	{@render children()}
</main>

<style>
	nav {
		display: flex;
		justify-content: space-around;
		padding: 10px;
		background-color: #f0f0f0;
		border-bottom: 1px solid #ccc;
	}
	nav a {
		text-decoration: none;
		color: #333;
		font-weight: bold;
	}
	nav a:hover {
		color: #007bff;
	}
	main {
		padding: 20px;
		max-width: 1200px;
		margin: 0 auto;
	}
	@media (max-width: 600px) {
		nav {
			flex-direction: column;
			align-items: center;
		}
		nav a {
			margin: 5px 0;
		}
	}
</style>
