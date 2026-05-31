<script>
 import { onMount } from 'svelte';

 const days = [
  'Montag',
  'Dienstag',
  'Mittwoch',
  'Donnerstag',
  'Freitag',
  'Samstag',
  'Sonntag'
 ];

 let weeklyPlan = $state({});

 onMount(() => {
  loadWeeklyPlan();
 });

 function loadWeeklyPlan() {
  const savedPlan = localStorage.getItem('budgetbite-weekly-plan');
  weeklyPlan = savedPlan ? JSON.parse(savedPlan) : {};
 }

 function removeFromPlanner(day, mealId) {
  const updatedMeals = (weeklyPlan[day] ?? []).filter(
   (meal) => String(meal.id) !== String(mealId)
  );

  weeklyPlan = {
   ...weeklyPlan,
   [day]: updatedMeals
  };

  localStorage.setItem('budgetbite-weekly-plan', JSON.stringify(weeklyPlan));
 }

 function formatPrice(price) {
  return Number(price).toFixed(2);
 }
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

    {#if weeklyPlan[day] && weeklyPlan[day].length > 0}
     <div class="planned-meals">
      {#each weeklyPlan[day] as meal}
       <div class="planned-meal">
        <div>
         <h3>{meal.name}</h3>
         <p class="card-meta">{meal.category}</p>
         <p class="card-meta">
          {formatPrice(meal.price)} CHF · {meal.time} min
         </p>
        </div>

        <div class="planned-actions">
         <a class="secondary-button" href={`/meals/${meal.id}`}>
          Details anzeigen
         </a>

         <button
          class="danger-button small-danger"
          type="button"
          onclick={() => removeFromPlanner(day, meal.id)}
         >
          Entfernen
         </button>
        </div>
       </div>
      {/each}
     </div>
    {:else}
     <p class="card-meta">Noch keine Mahlzeit geplant.</p>
    {/if}
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
  gap: 14px;
 }

 .planned-meals {
  display: grid;
  gap: 12px;
 }

 .planned-meal {
  display: grid;
  gap: 12px;
  padding: 14px;
  border-radius: 18px;
  background: var(--surface-soft);
  border: 1px solid var(--border);
 }

 .planned-meal h3 {
  margin: 0;
  font-size: 1rem;
 }

 .planned-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
 }

 .small-danger {
  min-height: 42px;
 }
</style>