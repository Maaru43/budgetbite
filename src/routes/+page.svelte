<script>
 import OptionPill from '$lib/components/OptionPill.svelte';
 import PrimaryButton from '$lib/components/PrimaryButton.svelte';
 let activeFocus = $state('Günstig');
 const focusOptions = ['Günstig', 'Schnell', 'Vegetarisch', 'Sättigend'];

 const focusValues = {
  'Günstig': 'cheap',
  'Schnell': 'fast',
  'Vegetarisch': 'vegetarian',
  'Sättigend': 'hearty'
 };

 function selectFocus(option) {
  activeFocus = option;
 }

 function getFindUrl() {
  return `/find?focus=${focusValues[activeFocus]}`;
 }
</script>

<section class="hero-banner">
 <span class="eyebrow">BudgetBite</span>
 <h1 class="section-title">Finde günstige und schnelle Mahlzeiten</h1>
 <p class="section-subtitle">Was ist dir heute wichtig? Wähle deinen Fokus und starte den BudgetBite-Guide.</p>

 <div class="option-grid">
  {#each focusOptions as option}
   <OptionPill selected={activeFocus === option} on:select={() => selectFocus(option)}>
    {option}
   </OptionPill>
  {/each}
 </div>

 <div class="page-actions">
  <PrimaryButton href={getFindUrl()}>Mahlzeit finden</PrimaryButton>
  <a href="/meals" class="secondary-button">Alle Mahlzeiten ansehen</a>
 </div>
</section>
