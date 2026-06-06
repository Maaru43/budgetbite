<!-- src/routes/meals/new/+page.svelte -->
<script>
 import { addMeal, buildMeal } from '$lib/stores/meals.js';

 const categories = [
  'Günstig',
  'Schnell',
  'Vegetarisch',
  'Sättigend',
  'Pasta',
  'Reis',
  'Wrap',
  'Snack',
  'Frühstück'
 ];

 let name = $state('');
 let price = $state('');
 let time = $state('');
 let category = $state('');
 let ingredients = $state('');

 let submitted = $state(false);
 let priceError = $state('');
 let errorMessage = $state('');
 let isSaving = $state(false);

 function parsePriceValue(value) {
  const normalized = String(value).trim().replace(',', '.');

  if (!normalized) return null;

  const number = Number(normalized);

  if (Number.isNaN(number) || number < 0) return null;

  return Number(number.toFixed(2));
 }

 function resetForm() {
  name = '';
  price = '';
  time = '';
  category = '';
  ingredients = '';
 }

 async function submitForm(event) {
  event.preventDefault();

  priceError = '';
  errorMessage = '';
  submitted = false;

  const parsedPrice = parsePriceValue(price);

  if (parsedPrice === null) {
   priceError = 'Bitte gib einen gültigen Preis ein, z.B. 4.20.';
   return;
  }

  isSaving = true;

  try {
   const meal = buildMeal({
    name,
    price: parsedPrice,
    time: Number(time),
    category,
    ingredients
   });

   const response = await fetch('/api/meals', {
    method: 'POST',
    headers: {
     'Content-Type': 'application/json'
    },
    body: JSON.stringify(meal)
   });

   if (!response.ok) {
    throw new Error('Die Mahlzeit konnte nicht in MongoDB gespeichert werden.');
   }

   const savedMeal = await response.json();

   // Zusätzlich lokal speichern, damit bestehende Seiten sofort weiter funktionieren.
   addMeal(savedMeal);

   submitted = true;
   resetForm();
  } catch (error) {
   console.error(error);
   errorMessage =
    'Beim Speichern ist ein Fehler passiert. Bitte prüfe MongoDB und versuche es erneut.';
  } finally {
   isSaving = false;
  }
 }
</script>

<section class="page-card">
 <h1 class="section-title">Neue Mahlzeit erfassen</h1>
 <p class="section-subtitle">Erfasse deine eigene Rezeptidee für BudgetBite.</p>

 {#if submitted}
  <p class="status-text">Mahlzeit erfolgreich in MongoDB gespeichert!</p>

  <div class="page-actions">
   <a href="/meals" class="primary-button">Alle Mahlzeiten</a>
   <a href="/meals/new" class="secondary-button">Weitere Mahlzeit erfassen</a>
  </div>
 {:else}
  <form class="form-grid" onsubmit={submitForm}>
   <label class="form-label">
    Name
    <input class="input-field" type="text" bind:value={name} required />
   </label>

   <label class="form-label">
    Preis (CHF)
    <input
     class="input-field"
     type="text"
     inputmode="decimal"
     bind:value={price}
     placeholder="z.B. 4.20"
     oninput={() => (priceError = '')}
     required
    />

    {#if priceError}
     <p class="status-text" style="color: #dc2626;">{priceError}</p>
    {/if}
   </label>

   <label class="form-label">
    Zeit (Minuten)
    <input class="input-field" type="number" step="1" min="1" bind:value={time} required />
   </label>

   <label class="form-label">
    Kategorie
    <select class="input-field" bind:value={category} required>
     <option value="" disabled hidden>Wähle eine Kategorie</option>

     {#each categories as option}
      <option value={option}>{option}</option>
     {/each}
    </select>
   </label>

   <label class="form-label">
    Zutaten (kommagetrennt)
    <input
     class="input-field"
     type="text"
     bind:value={ingredients}
     placeholder="z.B. Pasta, Tomatensauce, Gewürze"
     required
    />
   </label>

   {#if errorMessage}
    <p class="status-text" style="color: #dc2626;">{errorMessage}</p>
   {/if}

   <button class="primary-button" type="submit" disabled={isSaving}>
    {isSaving ? 'Speichert...' : 'Speichern'}
   </button>
  </form>
 {/if}
</section>