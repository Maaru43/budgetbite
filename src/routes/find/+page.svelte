<script>
 import { page } from '$app/stores';
 import { meals } from '$lib/stores/meals.js';
 import MealCard from '$lib/components/MealCard.svelte';
 import OptionPill from '$lib/components/OptionPill.svelte';

 const focusOptions = ['Günstig', 'Schnell', 'Vegetarisch', 'Sättigend'];
 const budgetOptions = ['unter 5 CHF', 'unter 8 CHF', 'egal'];
 const timeOptions = ['unter 10 Minuten', 'unter 20 Minuten', 'egal'];

 const focusParamMap = {
  cheap: 'Günstig',
  fast: 'Schnell',
  vegetarian: 'Vegetarisch',
  hearty: 'Sättigend'
 };

 let step = $state(1);
 let focus = $state('Günstig');
 let budget = $state('egal');
 let time = $state('egal');
 let availableIngredients = $state('');
 let filteredMeals = $state([]);

 function normalizeIngredients(value) {
  return value
   .split(',')
   .map((item) => item.trim().toLowerCase())
   .filter(Boolean);
 }

 function getIngredientHint(matchCount, hasInput) {
  if (!hasInput) return '';
  if (matchCount > 0) return 'Passt gut zu deinen Zutaten';
  return 'Dir fehlen evtl. Zutaten';
 }

 function normalizeMealIngredients(meal) {
  if (Array.isArray(meal.ingredients)) return meal.ingredients.map((item) => String(item).trim().toLowerCase()).filter(Boolean);
  if (typeof meal.ingredients === 'string') return meal.ingredients.split(',').map((item) => item.trim().toLowerCase()).filter(Boolean);
  return [];
 }

 $effect(() => {
  const queryFocus = $page.url.searchParams.get('focus');
  if (queryFocus && focusParamMap[queryFocus]) {
   focus = focusParamMap[queryFocus];
  }

  const ownedIngredients = normalizeIngredients(availableIngredients);
  const unsubscribe = meals.subscribe(($meals) => {
   filteredMeals = $meals
    .map((meal) => {
     let focusMatch = true;
     if (focus === 'Günstig') {
      focusMatch = meal.price <= 8;
     } else if (focus === 'Schnell') {
      focusMatch = meal.time <= 15;
     } else if (focus === 'Vegetarisch') {
      focusMatch = meal.vegetarian;
     } else if (focus === 'Sättigend') {
      focusMatch = meal.hearty;
     }

     let budgetMatch = budget === 'egal' || meal.price <= parseInt(budget.replace(/[^0-9]/g, ''));
     let timeMatch = time === 'egal' || meal.time <= parseInt(time.replace(/[^0-9]/g, ''));

     const mealIngredients = normalizeMealIngredients(meal);
     const matchCount = mealIngredients.filter((ingredient) => ownedIngredients.includes(ingredient)).length;
     const hint = getIngredientHint(matchCount, ownedIngredients.length > 0);
     const sortScore = matchCount;

     return {
      meal,
      hint,
      focusMatch,
      budgetMatch,
      timeMatch,
      sortScore
     };
    })
    .filter((item) => item.focusMatch && item.budgetMatch && item.timeMatch)
    .sort((a, b) => b.sortScore - a.sortScore || a.meal.name.localeCompare(b.meal.name));
  });

  return unsubscribe;
 });

 function selectFocus(option) {
  focus = option;
 }

 function selectBudget(option) {
  budget = option;
 }

 function selectTime(option) {
  time = option;
 }

 function nextStep() {
  if (step < 4) step += 1;
 }

 function previousStep() {
  if (step > 1) step -= 1;
 }

 function getHeading() {
  if (step === 1) return 'Was ist dir heute wichtig?';
  if (step === 2) return 'Wie viel möchtest du maximal ausgeben?';
  if (step === 3) return 'Wie viel Zeit hast du?';
  return 'Passende Mahlzeiten';
 }

 function getDescription() {
  if (step === 1) return 'Wähle einen Fokus und wir finden die besten Optionen für dich.';
  if (step === 2) return 'Wähle ein Budget, damit wir passende Vorschläge filtern.';
  if (step === 3) return 'Wähle deine verfügbare Koch- oder Essenszeit.';
  return 'Diese Ergebnisse passen zu deinen Einstellungen.';
 }
</script>

<section class="page-card">
 <span class="step-indicator">Schritt {step} von 4</span>
 <h1 class="section-title">{getHeading()}</h1>
 <p class="section-subtitle">{getDescription()}</p>

 {#if step === 1}
  <div class="option-grid">
   {#each focusOptions as option}
    <OptionPill selected={focus === option} on:select={() => selectFocus(option)}>
     {option}
    </OptionPill>
   {/each}
  </div>
 {:else if step === 2}
  <div class="option-grid">
   {#each budgetOptions as option}
    <OptionPill selected={budget === option} on:select={() => selectBudget(option)}>
     {option}
    </OptionPill>
   {/each}
  </div>
 {:else if step === 3}
  <div class="option-grid">
   {#each timeOptions as option}
    <OptionPill selected={time === option} on:select={() => selectTime(option)}>
     {option}
    </OptionPill>
   {/each}
  </div>
  <label class="form-label">
   Was hast du zuhause?
   <input
    class="input-field"
    type="text"
    bind:value={availableIngredients}
    placeholder="z.B. Reis, Eier, Tomaten"
   />
  </label>
 {:else}
  {#if filteredMeals.length > 0}
   <div class="meals-grid">
    {#each filteredMeals as item}
     <MealCard meal={item.meal} hint={item.hint} />
    {/each}
   </div>
  {:else}
   <p class="section-subtitle">Leider wurden keine Mahlzeiten gefunden. Passe deine Auswahl an und versuche es erneut.</p>
  {/if}
 {/if}

 <div class="page-actions">
  {#if step > 1}
   <button type="button" class="secondary-button" onclick={previousStep}>Zurück</button>
  {/if}
  {#if step < 4}
   <button type="button" class="primary-button" onclick={nextStep}>Weiter</button>
  {:else}
   <a href="/meals" class="secondary-button">Alle Mahlzeiten ansehen</a>
  {/if}
 </div>
</section>
