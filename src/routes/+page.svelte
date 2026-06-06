<script>
 const highlights = [
  {
   icon: '💸',
   title: 'Günstig essen',
   text: 'Finde Mahlzeiten, die zu deinem Studentenbudget passen.'
  },
  {
   icon: '⏱️',
   title: 'Schnell entscheiden',
   text: 'Erhalte einfache Vorschläge, ohne lange nach Rezepten zu suchen.'
  },
  {
   icon: '🥗',
   title: 'Alltag planen',
   text: 'Speichere Favoriten und plane Mahlzeiten für deine Woche.'
  }
 ];

 const previewMeals = [
  {
   emoji: '🍝',
   name: 'Spaghetti Carbonara',
   price: '8.00 CHF',
   time: '20 min'
  },
  {
   emoji: '🍲',
   name: 'Tomatensuppe',
   price: '5.00 CHF',
   time: '15 min'
  },
  {
   emoji: '🍚',
   name: 'Reis Eier Bowl',
   price: '4.20 CHF',
   time: '12 min'
  }
 ];
</script>

<section class="home-hero">
 <div class="home-content">
  <span class="eyebrow">BudgetBite</span>

  <h1>Günstig essen. Schnell entscheiden.</h1>

  <p>
   BudgetBite hilft Studierenden, passende Mahlzeiten für wenig Geld,
   wenig Zeit und den Alltag zu finden.
  </p>

  <div class="home-actions">
   <a class="primary-button" href="/find">Mahlzeit finden</a>
   <a class="secondary-button" href="/meals">Alle Mahlzeiten ansehen</a>
  </div>
 </div>

 <div class="meal-preview" aria-label="Beispielmahlzeiten">
  {#each previewMeals as meal}
   <article class="preview-card">
    <span class="preview-emoji">{meal.emoji}</span>
    <div>
     <h2>{meal.name}</h2>
     <p>{meal.price} · {meal.time}</p>
    </div>
   </article>
  {/each}
 </div>
</section>

<section class="home-section">
 <span class="eyebrow">Warum BudgetBite?</span>
 <h2 class="section-title small-title">Für deinen Studienalltag gemacht</h2>

 <div class="highlight-grid">
  {#each highlights as item}
   <article class="highlight-card">
    <span class="highlight-icon">{item.icon}</span>
    <h3>{item.title}</h3>
    <p>{item.text}</p>
   </article>
  {/each}
 </div>
</section>

<section class="home-section compact-section">
 <span class="eyebrow">So funktioniert es</span>
 <h2 class="section-title small-title">In wenigen Schritten zur passenden Mahlzeit</h2>

 <div class="steps-row">
  <div>
   <strong>1</strong>
   <p>Fokus wählen</p>
  </div>
  <div>
   <strong>2</strong>
   <p>Budget und Zeit eingrenzen</p>
  </div>
  <div>
   <strong>3</strong>
   <p>Passende Mahlzeit auswählen</p>
  </div>
 </div>

 <div class="home-actions centered-actions">
  <a class="primary-button" href="/find">Jetzt starten</a>
 </div>
</section>

<style>
 .home-hero {
  display: grid;
  grid-template-columns: 1.25fr 0.75fr;
  gap: 32px;
  align-items: center;
  max-width: 1080px;
  margin: 0 auto;
  padding: 54px 56px;
  border-radius: 34px;
  background: linear-gradient(135deg, #ffffff 0%, #fffaf2 100%);
  border: 1px solid rgba(22, 163, 74, 0.18);
  box-shadow: var(--shadow);
 }

.home-content h1 {
  margin: 10px 0 20px;
  max-width: 760px;
  font-size: clamp(2.4rem, 4.4vw, 4.3rem);
  line-height: 1.08;
  letter-spacing: -0.045em;
}

 .home-content p {
  max-width: 680px;
  margin: 0;
  color: var(--text-muted);
  font-size: 1.25rem;
  line-height: 1.65;
 }

 .home-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 28px;
 }

.meal-preview {
  display: grid;
  gap: 16px;
  width: 100%;
  max-width: 380px;
  justify-self: end;
}
 .preview-card {
  display: flex;
  gap: 14px;
  align-items: center;
  padding: 18px;
  border-radius: 24px;
  background: var(--surface-soft);
  border: 1px solid var(--border);
 }

.preview-card:nth-child(2),
.preview-card:nth-child(3) {
  transform: none;
}

 .preview-emoji {
  display: grid;
  place-items: center;
  width: 52px;
  height: 52px;
  border-radius: 18px;
  background: #ffffff;
  font-size: 1.8rem;
  box-shadow: 0 12px 26px rgba(33, 33, 33, 0.08);
 }

 .preview-card h2 {
  margin: 0;
  font-size: 1rem;
 }

 .preview-card p {
  margin: 4px 0 0;
  color: var(--text-muted);
  font-weight: 700;
 }

 .home-section {
  max-width: 1080px;
  margin: 28px auto 0;
  padding: 42px 46px;
  border-radius: 32px;
  background: rgba(255, 255, 255, 0.76);
  border: 1px solid var(--border);
 }

 .small-title {
  margin-bottom: 24px;
  font-size: clamp(2rem, 3vw, 3rem);
 }

 .highlight-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
 }

 .highlight-card {
  padding: 24px;
  border-radius: 26px;
  background: var(--surface-soft);
  border: 1px solid var(--border);
 }

 .highlight-icon {
  font-size: 2rem;
 }

 .highlight-card h3 {
  margin: 14px 0 8px;
  font-size: 1.1rem;
 }

 .highlight-card p {
  margin: 0;
  color: var(--text-muted);
  line-height: 1.55;
 }

 .compact-section {
  text-align: center;
 }

 .steps-row {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
 }

 .steps-row div {
  padding: 22px;
  border-radius: 24px;
  background: var(--surface-soft);
  border: 1px solid var(--border);
 }

 .steps-row strong {
  display: inline-grid;
  place-items: center;
  width: 42px;
  height: 42px;
  border-radius: 999px;
  background: var(--primary);
  color: white;
 }

 .steps-row p {
  margin: 12px 0 0;
  font-weight: 800;
 }

 .centered-actions {
  justify-content: center;
 }

 @media (max-width: 899px) {
  .home-hero,
  .home-section {
   padding: 34px 28px;
   border-radius: 28px;
  }

  .home-hero {
   grid-template-columns: 1fr;
  }

  .home-content h1 {
   font-size: 2.6rem;
  }

  .home-content p {
   font-size: 1.05rem;
  }

  .meal-preview {
   margin-top: 10px;
  }

  .preview-card:nth-child(2),
  .preview-card:nth-child(3) {
   transform: none;
  }

  .highlight-grid,
  .steps-row {
   grid-template-columns: 1fr;
  }

  .home-actions {
   display: grid;
  }
 }
</style>