# BudgetBite

BudgetBite ist eine Webanwendung, die Studierenden hilft, günstige und schnelle Mahlzeiten zu finden. Entwickelt mit SvelteKit für ein mobiles und benutzerfreundliches Erlebnis.

## Zielgruppe

- Studierende mit wenig Zeit und begrenztem Budget
- Personen, die einfache, schnelle und kostengünstige Kochrezepte suchen

## Problemstellung

Viele Studierende haben einen hektischen Alltag und müssen Mahlzeiten zubereiten, die sowohl zeitsparend als auch budgetfreundlich sind. BudgetBite löst dieses Problem, indem es eine Plattform bietet, um passende Rezepte basierend auf Budget und Zeit zu filtern.

## Hauptworkflow

1. **Home (/)**: Startseite mit Einführung und Navigation
2. **Mahlzeit finden (/find)**: Auswahl von Budget und Zeit, Anzeige gefilterter Ergebnisse
3. **Ergebnisse**: Liste der passenden Mahlzeiten
4. **Detailseite (/meals/[meal_id])**: Vollständige Informationen zu einer Mahlzeit
5. **Favorit speichern**: Lokale Speicherung von Favoriten im UI

## Umgesetzte Seiten

- `/`: Startseite mit Titel, Beschreibung und Navigationsbuttons
- `/find`: Filterseite für Budget und Zeit
- `/meals`: Liste aller Mahlzeiten
- `/meals/new`: Formular zum Hinzufügen neuer Mahlzeiten
- `/meals/[meal_id]`: Detailansicht einer Mahlzeit

## Verwendete Technologien

- **SvelteKit**: Framework für die Web-App
- **JavaScript**: Programmiersprache (ES6+)
- **CSS**: Styling für responsive Design
- **GitHub Copilot/Agent**: KI-Unterstützung bei der Entwicklung

## Aktueller Stand

- Lokale Beispieldaten werden verwendet (keine Datenbank)
- Favoriten werden nur lokal im UI gespeichert
- Nächster Schritt: Integration von MongoDB für persistente Daten

## Installation und Start

1. Abhängigkeiten installieren:
   ```sh
   npm install
   ```

2. Entwicklungsserver starten:
   ```sh
   npm run dev
   ```

   Die App ist dann unter `http://localhost:5173` (oder ähnlich) verfügbar.

3. Für den Produktionsbuild:
   ```sh
   npm run build
   npm run preview
   ```

## KI-Einsatz

Der VS-Code-Agent (GitHub Copilot) wurde extensiv für die Erstellung der Grundstruktur, Komponenten, Routing und Styling eingesetzt. Dies ermöglichte eine schnelle Prototypentwicklung und die Implementierung von Svelte 5 Syntax.
