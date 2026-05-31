# BudgetBite

BudgetBite ist ein mobiler Web-App-Prototyp für Studierende mit wenig Zeit und begrenztem Budget. Die Anwendung hilft dabei, günstige und schnelle Mahlzeiten zu finden, zu vergleichen, zu speichern und für die Woche zu planen.

## Problemstellung

Viele Studierende haben im Alltag wenig Zeit, ein begrenztes Budget und oft keine klare Idee, was sie schnell und günstig essen können. Bestehende Rezept-Apps sind häufig sehr umfangreich, nicht speziell auf Studierende ausgerichtet oder im Alltag zu komplex.

BudgetBite konzentriert sich deshalb bewusst auf wenige, aber nützliche Kernfunktionen: Mahlzeiten finden, vergleichen, speichern und planen.

## Zielgruppe

Die Hauptzielgruppe sind Studierende, die:

* wenig Zeit zum Kochen haben
* ein begrenztes Budget haben
* einfache und günstige Mahlzeiten suchen
* schnell entscheiden möchten, was sie essen können
* Mahlzeiten für den Alltag besser planen möchten

## How-Might-We-Fragen

* Wie könnten wir Studierenden helfen, mit wenig Geld passende Mahlzeiten zu finden?
* Wie könnten wir die Essensplanung für Studierende einfacher und zeitsparender gestalten?
* Wie könnten wir günstige und schnelle Mahlzeiten übersichtlich und motivierend darstellen?

## Hauptworkflow

Der zentrale Workflow der App orientiert sich am Mockup aus Übung 10:

1. Nutzer:in öffnet die Startseite.
2. Nutzer:in wählt eine Priorität, zum Beispiel günstig, schnell, vegetarisch oder sättigend.
3. Nutzer:in wählt ein maximales Budget.
4. Nutzer:in wählt die verfügbare Zeit.
5. Die App zeigt passende Mahlzeiten an.
6. Nutzer:in öffnet die Detailseite einer Mahlzeit.
7. Nutzer:in kann die Mahlzeit als Favorit speichern oder einem Wochenplan hinzufügen.

## Umgesetzte Funktionen

Aktuell sind folgende Funktionen umgesetzt:

* Startseite mit mobilem App-Look
* Mahlzeiten-Finder mit schrittweisem Auswahlprozess
* Übersicht aller Mahlzeiten
* Suchleiste für Mahlzeiten
* Detailseite pro Mahlzeit
* Favoritenfunktion
* Favoritenübersicht
* Neue Mahlzeit erfassen
* Mahlzeiten löschen
* Wochenplan-Seite als Prototyp
* Mobile-first Design im BudgetBite-Stil
* Speicherung mit localStorage
* Deployment über Netlify vorgesehen

## Seitenstruktur

Die App enthält folgende zentrale Seiten:

* `/`
  Startseite von BudgetBite

* `/find`
  Mahlzeiten-Finder mit Auswahl nach Priorität, Budget und Zeit

* `/meals`
  Übersicht aller Mahlzeiten mit Suchfunktion

* `/meals/new`
  Formular zum Erfassen einer neuen Mahlzeit

* `/meals/[meal_id]`
  Detailseite einer einzelnen Mahlzeit

* `/favorites`
  Übersicht der gespeicherten Favoriten

* `/planner`
  Wochenplan-Prototyp

## Designentscheidungen

Das Design wurde bewusst als mobile-first App gestaltet, weil BudgetBite im Alltag schnell und unkompliziert genutzt werden soll. Die Gestaltung orientiert sich am Mockup aus Übung 10.

Wichtige Designentscheidungen:

* mobile Darstellung mit begrenzter Breite
* grün-cremefarbenes Farbschema passend zu Food, Budget und Alltag
* klare Karten für Mahlzeiten
* grosse Buttons für einfache Bedienung
* kurze Texte und einfache Labels
* Preis, Zeit und Kategorie werden direkt sichtbar angezeigt
* einfache Navigation zwischen den wichtigsten Bereichen

Das Ziel war nicht ein vollständig produktives System, sondern ein verständlicher, testbarer und alltagsnaher Prototyp.

## Technische Umsetzung

Verwendete Technologien:

* SvelteKit
* JavaScript
* HTML
* CSS
* localStorage
* Git und GitHub
* Netlify für Deployment
* VS Code
* GitHub Copilot / ChatGPT als KI-Unterstützung

## Datenhaltung

Im aktuellen Prototyp werden Daten clientseitig mit `localStorage` gespeichert. Dadurch können Mahlzeiten, Favoriten und Planungsinformationen im Browser gespeichert werden.

Diese Lösung ist für den Prototyp geeignet, weil sie einfach ist und ohne Backend funktioniert. Für eine produktivere Version wäre eine Datenbankanbindung mit MongoDB sinnvoll. Damit könnten Daten zentral gespeichert und auf mehreren Geräten verfügbar gemacht werden.

## Installation und lokaler Start

Projekt klonen oder herunterladen und im Projektordner ausführen:

```bash
npm install
npm run dev
```

Danach kann die App lokal im Browser geöffnet werden:

```text
http://localhost:5173/
```

## Build

Um zu prüfen, ob das Projekt gebaut werden kann:

```bash
npm run build
```

## Deployment mit Netlify

Für das finale Deployment ist Netlify vorgesehen, da Netlify im Unterricht verwendet wurde.

Geplantes Vorgehen:

1. Code auf GitHub pushen.
2. In Netlify ein neues Projekt aus dem GitHub-Repository importieren.
3. Build Command setzen:

```bash
npm run build
```

4. SvelteKit für Netlify konfigurieren, falls nötig mit:

```bash
npm install -D @sveltejs/adapter-netlify
```

5. In `svelte.config.js` den Netlify-Adapter verwenden.
6. Deployment starten.
7. Netlify-Link in Moodle abgeben.

## KI-Einsatz

Für die Entwicklung wurde KI unterstützend eingesetzt. Die KI wurde verwendet für:

* Planung der Seitenstruktur
* Erstellung und Überarbeitung von SvelteKit-Komponenten
* Unterstützung beim Routing
* Verbesserung des Designs
* Debugging von Favoriten-, Detail- und Wochenplan-Funktionen
* Formulierung und Strukturierung der Dokumentation

Die generierten Inhalte wurden schrittweise getestet, angepasst und versioniert. KI wurde nicht blind übernommen, sondern als Unterstützung im Entwicklungsprozess verwendet.

## Aktueller Stand und bekannte Einschränkungen

Der aktuelle Stand ist ein funktionsfähiger Prototyp mit mehreren Kernfunktionen. Einzelne Funktionen sind bewusst noch vereinfacht umgesetzt.

Bekannte Einschränkungen:

* Daten werden aktuell nur im Browser gespeichert.
* Es gibt noch keine Benutzerkonten.
* Die MongoDB-Anbindung ist noch nicht umgesetzt.
* Der Wochenplan ist als Prototyp-Feature umgesetzt und kann weiter verbessert werden.
* Die App ist nicht als produktive Anwendung gedacht, sondern als Prototyp zur Demonstration und Evaluation.

## Mögliche Weiterentwicklung

Mögliche nächste Schritte wären:

* MongoDB-Anbindung für echte Datenpersistenz
* bessere Zutatenfilterung
* Bearbeiten von bestehenden Mahlzeiten
* verbesserter Wochenplan
* Einkaufsliste basierend auf geplanten Mahlzeiten
* Usability-Test mit Studierenden
* Optimierung auf Basis des Nutzerfeedbacks

## Links

GitHub Repository:

```text
https://github.com/Maaru43/budgetbite
```

Deployte App:

https://tubular-khapse-c2d92b.netlify.app
