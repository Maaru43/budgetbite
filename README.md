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

## Usability Evaluation

Für BudgetBite wurde eine kurze Usability Evaluation mit drei Testpersonen durchgeführt. Ziel der Evaluation war es, herauszufinden, ob der Prototyp verständlich ist, ob die wichtigsten Workflows funktionieren und welche Verbesserungen für eine nächste Iteration sinnvoll wären.

### Getestete Version

Getestet wurde die deployte Netlify-Version des Prototyps:

Getestete Version:
https://budgetbite-maaru43.netlify.app

### Ziele der Evaluation

Die Evaluation sollte folgende Fragen beantworten:

* Verstehen Nutzer:innen den Zweck von BudgetBite?
* Können Nutzer:innen passende Mahlzeiten finden?
* Ist die Navigation zwischen Startseite, Mahlzeitensuche, Favoriten und allen Mahlzeiten verständlich?
* Ist klar, wie Favoriten gespeichert und wiedergefunden werden?
* Welche Filter- und Suchfunktionen fehlen aus Sicht der Nutzer:innen?
* Welche Punkte sollten für die nächste Iteration priorisiert werden?

### Vorgehen

Die Evaluation wurde als kurzer moderierter Usability-Test durchgeführt. Die Testpersonen haben den Prototyp geöffnet und typische Aufgaben ausgeführt. Währenddessen wurden Beobachtungen und Feedback notiert. Die Tests wurden informell mit Schulkameraden durchgeführt.

### Stichprobe

Es wurden drei Personen getestet:

| Testperson       | Profil                                      |
| ---------------- | ------------------------------------------- |
| Manuel Marti     | Student, potenzieller Nutzer von BudgetBite |
| Emre Okay        | Student, potenzieller Nutzer von BudgetBite |
| Laurenz Ströbele | Student, potenzieller Nutzer von BudgetBite |

### Testaufgaben

Die Testpersonen erhielten folgende Aufgaben:

1. Öffne BudgetBite und finde heraus, wofür die App gedacht ist.
2. Suche eine günstige oder schnelle Mahlzeit.
3. Öffne die Detailseite einer Mahlzeit.
4. Speichere eine Mahlzeit als Favorit und finde sie danach wieder.
5. Erfasse eine neue Mahlzeit.
6. Prüfe, ob du eine passende Mahlzeit anhand deiner Bedürfnisse finden kannst.
7. Gib Feedback dazu, was unklar ist oder was dir fehlt.

### Beobachtungen und Feedback

Das Feedback wurde als Issue Map ausgewertet. Die Beobachtungen wurden nach betroffenen Bereichen des Prototyps gruppiert und priorisiert.

#### Issue 1: Begriff „Zeit“ war nicht eindeutig

**Beobachtung:**
Eine Testperson war unsicher, was mit „Zeit“ gemeint ist. Es war nicht direkt klar, ob damit Kochzeit, Vorbereitungszeit oder verfügbare Zeit gemeint ist.

**Quelle:** Manuel Marti
**Priorität:** Mittel
**Entscheidung:** Das Label soll in einer nächsten Iteration präzisiert werden, z.B. zu „Maximale Kochzeit“.

---

#### Issue 2: Suchfunktion fehlte

**Beobachtung:**
Eine Testperson erwartete eine Suchmöglichkeit, um Mahlzeiten schneller nach Name, Kategorie oder Zutaten zu finden.

**Quelle:** Manuel Marti
**Priorität:** Hoch
**Entscheidung:** Eine Suchleiste wurde ergänzt.

---

#### Issue 3: Mehr Filtermöglichkeiten wären hilfreich

**Beobachtung:**
Es wurde gewünscht, Mahlzeiten nicht nur über den Guide zu finden, sondern auch gezielter nach Kriterien wie Name, Kategorie oder Zutaten zu filtern.

**Quelle:** Manuel Marti
**Priorität:** Hoch
**Entscheidung:** Die Suchfunktion wurde als erster Schritt umgesetzt. Weitere Filter bleiben als Verbesserung für die nächste Iteration geplant.

---

#### Issue 4: Kategorie sollte auswählbar sein

**Beobachtung:**
Beim Erfassen einer neuen Mahlzeit wäre es verständlicher, wenn die Kategorie nicht frei eingetippt werden muss, sondern aus einer Liste ausgewählt werden kann.

**Quelle:** Manuel Marti
**Priorität:** Mittel
**Entscheidung:** Für eine nächste Version soll die Kategorie als Dropdown umgesetzt werden.

---

#### Issue 5: Preisangaben mit Dezimalzahlen

**Beobachtung:**
Eine Testperson wollte Preise wie 4.20 CHF eingeben können. Ganze Zahlen reichen für echte Essenspreise nicht aus.

**Quelle:** Manuel Marti
**Priorität:** Hoch
**Entscheidung:** Preisangaben mit Dezimalzahlen wurden als wichtige Verbesserung priorisiert.

---

#### Issue 6: Favoriten waren nicht sofort auffindbar

**Beobachtung:**
Es war nicht sofort klar, wo gespeicherte Favoriten später wieder sichtbar sind.

**Quelle:** Manuel Marti
**Priorität:** Hoch
**Entscheidung:** Die Favoriten-Seite wurde in der Navigation sichtbarer gemacht.

---

#### Issue 7: Filtern nach vorhandenen Zutaten

**Beobachtung:**
Eine Testperson wünschte sich eine Funktion, bei der man vorhandene Zutaten eingeben kann und passende Gerichte vorgeschlagen bekommt.

**Quelle:** Manuel Marti
**Priorität:** Mittel
**Entscheidung:** Diese Funktion wird als sinnvolle Erweiterung für eine spätere Iteration festgehalten.

---

#### Issue 8: Grundstruktur wirkt intuitiv

**Beobachtung:**
Die App wurde als verständlich und intuitiv wahrgenommen. Der Hauptzweck war schnell erkennbar.

**Quelle:** Laurenz Ströbele
**Priorität:** Positiv
**Entscheidung:** Die Grundstruktur wird beibehalten.

---

#### Issue 9: Mobile Darstellung passt zur Idee

**Beobachtung:**
Die mobile Darstellung passt gut zur Idee einer einfachen Alltags-App für Studierende.

**Quelle:** Emre Okay
**Priorität:** Positiv
**Entscheidung:** Das Mobile-first Design wird beibehalten.

---

#### Issue 10: Wochenplan als sinnvolle Erweiterung

**Beobachtung:**
Der Wochenplan wurde als sinnvolle Idee wahrgenommen, sollte aber in der Bedienung noch klarer werden.

**Quelle:** Emre Okay
**Priorität:** Mittel
**Entscheidung:** Der Wochenplan bleibt als Prototyp-Feature erhalten und soll in einer nächsten Iteration verbessert werden.


### Zusammenfassung der Resultate

Die Evaluation zeigte, dass die Grundidee von BudgetBite verständlich ist und die App grundsätzlich intuitiv wirkt. Besonders positiv bewertet wurden der einfache Aufbau, die mobile Darstellung und die Idee, günstige und schnelle Mahlzeiten für Studierende bereitzustellen.

Gleichzeitig zeigte das Feedback, dass die Filter- und Suchfunktionen für die Nutzer:innen sehr wichtig sind. Besonders häufig genannt wurden eine Suchleiste, klarere Filter, auswählbare Kategorien und die Möglichkeit, nach vorhandenen Zutaten zu filtern. Auch die Sichtbarkeit der Favoriten und die Verständlichkeit einzelner Begriffe wie „Zeit“ wurden als Verbesserungspotenzial erkannt.

### Abgeleitete Verbesserungen

Aus der Evaluation wurden folgende Verbesserungen abgeleitet:

1. Suchfunktion für Mahlzeiten ergänzen.
2. Favoriten in der Navigation sichtbarer machen.
3. Preisangaben mit Dezimalzahlen ermöglichen.
4. Kategorie-Eingabe später als Dropdown umsetzen.
5. Begriff „Zeit“ präzisieren, z.B. zu „Maximale Kochzeit“.
6. Zutatenfilter als zukünftige Erweiterung einplanen.
7. Wochenplan weiter verbessern und klarer mit den Mahlzeiten verbinden.

### Bereits umgesetzte Anpassungen

Nach dem Feedback wurden mehrere Punkte im Prototyp verbessert:

* Suchleiste für Mahlzeiten ergänzt
* Favoriten-Seite in der Navigation sichtbar gemacht
* Design überarbeitet und stärker an das BudgetBite-Konzept angepasst
* Netlify-Deployment erstellt
* README-Dokumentation erweitert
* Wochenplan als Prototyp-Feature ergänzt

### Fazit

Die Usability Evaluation hat bestätigt, dass BudgetBite grundsätzlich auf dem richtigen Weg ist. Die App adressiert ein reales Problem von Studierenden und bietet einen verständlichen Einstieg. Für eine nächste Iteration sollten vor allem Filterfunktionen, Zutatenlogik, klarere Formularfelder und der Wochenplan verbessert werden.


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

https://github.com/Maaru43/budgetbite

Deployte App:

https://budgetbite-maaru43.netlify.app
