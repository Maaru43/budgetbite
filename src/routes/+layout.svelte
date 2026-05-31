<script>
 import '../app.css';
 let { children } = $props();
</script>

<svelte:head>
 <title>BudgetBite</title>
</svelte:head>

<div class="app-shell">
 <nav class="app-nav" aria-label="Hauptnavigation">
  <div class="logo">🥗 BudgetBite</div>
  <div class="nav-links">
   <a href="/">Start</a>
   <a href="/find">Mahlzeit finden</a>
   <a href="/favorites">Favoriten</a>
   <a href="/meals">Alle Mahlzeiten</a>
   <a href="/meals/new">Neue Mahlzeit</a>
  </div>
 </nav>

 <main class="app-container">
  {@render children()}
 </main>
</div>
