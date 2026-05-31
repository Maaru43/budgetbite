<script>
  const days = [
    'Montag',
    'Dienstag',
    'Mittwoch',
    'Donnerstag',
    'Freitag',
    'Samstag',
    'Sonntag'
  ];
</script>

<section class="page-card">
  <span class="eyebrow">Wochenplanung</span>

  <h1 class="section-title">Wochenplan</h1>

  <p class="section-subtitle">
    Plane deine günstigen und schnellen Mahlzeiten für die Woche.
  </p>

  <div class="meals-grid planner-grid">
    {#each days as day}
      <article class="card planner-day">
        <h2 class="card-title">{day}</h2>
        <p class="card-meta">Noch keine Mahlzeit geplant.</p>
      </article>
    {/each}
  </div>

  <div class="page-actions">
    <a class="primary-button" href="/find">Mahlzeit finden</a>
    <a class="secondary-button" href="/meals">Alle Mahlzeiten</a>
  </div>
</section>

<style>
  .planner-grid {
    margin-top: 20px;
  }

  .planner-day {
    display: grid;
    gap: 8px;
  }

  .planner-day h2 {
    margin: 0;
  }
</style>