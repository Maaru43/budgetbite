# Projektdokumentation - BudgetBite

## Inhaltsverzeichnis

1. [Ausgangslage](#1-ausgangslage)
2. [Lösungsidee](#2-lösungsidee)
3. [Vorgehen & Artefakte](#3-vorgehen--artefakte)

   1. [Understand & Define](#31-understand--define)
   2. [Sketch](#32-sketch)
   3. [Decide](#33-decide)
   4. [Prototype](#34-prototype)
   5. [Validate](#35-validate)
4. [Erweiterungen [Optional]](#4-erweiterungen-optional)
5. [Projektorganisation [Optional]](#5-projektorganisation-optional)
6. [KI-Deklaration](#6-ki-deklaration)
7. [Anhang [Optional]](#7-anhang-optional)

## 1. Ausgangslage

Viele Studierende haben im Alltag wenig Zeit, ein begrenztes Budget und oft keine klare Idee, was sie schnell und günstig essen können. Bestehende Rezept-Apps sind häufig sehr umfangreich, nicht speziell auf Studierende ausgerichtet oder im Alltag zu komplex.

BudgetBite adressiert dieses Problem mit einem einfachen Web-App-Prototyp. Die App hilft Studierenden dabei, günstige und schnelle Mahlzeiten zu finden, Favoriten zu speichern, eigene Mahlzeiten zu erfassen und Mahlzeiten für die Woche zu planen.

* **Problem:** Studierende möchten schnell passende Mahlzeiten finden, haben aber oft wenig Zeit, wenig Budget und begrenzte Kochideen.
* **Ziele:** BudgetBite soll den Entscheidungsprozess vereinfachen, passende Mahlzeiten sichtbar machen und eine einfache Planung ermöglichen.
* **Primäre Zielgruppe:** Studierende, die im Alltag günstig, schnell und unkompliziert essen möchten.
* **Weitere Stakeholder [Optional]:** Dozierende und Mitstudierende im Modul Prototyping, welche den Prototyp testen und bewerten.

## 2. Lösungsidee

BudgetBite ist ein mobiler Web-App-Prototyp für günstige und schnelle Mahlzeiten. Die App fokussiert sich bewusst auf einfache Workflows und eine reduzierte Bedienung, damit Nutzer schnell zu passenden Vorschlägen kommen.

* **Kernfunktionalität:**

  * Startseite mit kurzem Einstieg in die App
  * Mahlzeit finden anhand von Bedürfnissen wie günstig, schnell, vegetarisch oder sättigend
  * Übersicht aller Mahlzeiten
  * Suchfunktion für Mahlzeiten
  * Detailansicht einzelner Mahlzeiten
  * Favoriten speichern und anzeigen
  * Neue Mahlzeiten erfassen
  * Mahlzeiten löschen
  * Wochenplan als Prototyp-Feature

* **Annahmen [Optional]:**

  * Studierende bevorzugen eine einfache und schnelle Bedienung gegenüber einer komplexen Rezeptplattform.
  * Preis, Zeit und Kategorie sind für die Auswahl einer Mahlzeit besonders wichtig.
  * Eine mobile Darstellung passt gut zum Nutzungskontext, da Mahlzeiten oft spontan geplant werden.

* **Abgrenzung [Optional]:**

  * BudgetBite ist ein Prototyp und keine produktive App.
  * Es gibt keine Benutzerkonten.
  * Die Daten werden aktuell clientseitig mit localStorage gespeichert.
  * Eine MongoDB-Anbindung ist als mögliche Weiterentwicklung vorgesehen, wurde aber nicht final umgesetzt.
  * Der Wochenplan ist als Prototyp-Feature umgesetzt und kann weiter verbessert werden.

## 3. Vorgehen & Artefakte

Die Durchführung erfolgte phasenbasiert entlang der im Unterricht behandelten Prototyping-Methodik: Understand & Define, Sketch, Decide, Prototype und Validate.

### 3.1 Understand & Define

* **Zielgruppenverständnis:**

Die Zielgruppe sind Studierende mit wenig Zeit und begrenztem Budget. In ihrem Alltag müssen sie häufig schnell entscheiden, was sie essen möchten. Dabei spielen Preis, Zubereitungsdauer, Einfachheit und vorhandene Zutaten eine wichtige Rolle.

Typische Bedürfnisse der Zielgruppe:

* günstige Mahlzeiten finden

* schnell eine passende Essensidee erhalten

* einfache Rezepte statt komplexer Kochanleitungen

* Favoriten speichern

* Mahlzeiten für später merken

* vorhandene Zutaten sinnvoll verwenden

* Essensplanung für die Woche vereinfachen

* **Wesentliche Erkenntnisse:**

  * Der Prototyp sollte nicht wie eine grosse Rezeptplattform wirken.
  * Der Einstieg muss schnell verständlich sein.
  * Die wichtigsten Informationen müssen direkt sichtbar sein: Preis, Zeit, Kategorie.
  * Mobile-first ist sinnvoll, weil die App im Alltag schnell genutzt werden soll.
  * Favoriten und Suche sind wichtige Funktionen, weil Nutzer bekannte Mahlzeiten wiederfinden möchten.

### 3.2 Sketch

* **Variantenüberblick:**

Zu Beginn wurden verschiedene Lösungsansätze betrachtet:

1. **Rezeptliste:** Eine einfache Liste mit günstigen Rezepten.
2. **Mahlzeiten-Finder:** Ein schrittweiser Guide, der passende Mahlzeiten vorschlägt.
3. **Wochenplaner:** Eine App, mit der Nutzer Mahlzeiten direkt für die Woche planen.
4. **Zutaten-Finder:** Eine App, bei der vorhandene Zutaten eingegeben werden und daraus Vorschläge entstehen.

* **Skizzen:**

Die Varianten unterschieden sich vor allem im Einstieg:

* Die Rezeptliste ist einfach, aber weniger interaktiv.
* Der Mahlzeiten-Finder unterstützt Nutzer aktiv bei der Entscheidung.
* Der Wochenplaner ist nützlich, aber als alleinige Hauptfunktion zu umfangreich.
* Der Zutaten-Finder ist sehr interessant, aber technisch aufwendiger.

Aus diesen Varianten entstand die Idee, den Mahlzeiten-Finder als Hauptworkflow zu verwenden und Favoriten sowie Wochenplanung als unterstützende Funktionen zu ergänzen.

### 3.3 Decide

* **Gewählte Variante & Begründung:**

Gewählt wurde ein mobiler Mahlzeiten-Finder mit ergänzender Mahlzeitenübersicht, Favoriten und Wochenplan.

Diese Variante wurde gewählt, weil sie:

* gut zur Zielgruppe passt

* einfach verständlich ist

* mit SvelteKit realistisch umsetzbar ist

* mehrere Seiten und Workflows ermöglicht

* Raum für Erweiterungen bietet

* sich gut als Prototyp testen lässt

* **End-to-End-Ablauf:**

Der zentrale Ablauf sieht wie folgt aus:

1. Nutzer öffnet BudgetBite.
2. Nutzer erkennt auf der Startseite den Zweck der App.
3. Nutzer wählt im Mahlzeiten-Finder eine Priorität, z.B. günstig, schnell, vegetarisch oder sättigend.
4. Nutzer erhält passende Mahlzeiten.
5. Nutzer öffnet eine Detailseite.
6. Nutzer speichert eine Mahlzeit als Favorit oder plant sie für einen Wochentag.
7. Nutzer kann eigene Mahlzeiten hinzufügen.
8. Nutzer kann Favoriten und alle Mahlzeiten später wieder aufrufen.

* **Mockup:**

Das Design orientiert sich am Mockup aus Übung 10. Der Fokus lag auf einem mobilen App-Look mit grossen Buttons, klaren Karten und einem reduzierten Farbschema. Die finale Umsetzung wurde im Prototyp weiterentwickelt und an Feedback angepasst.

## 3.4 Prototype

### 3.4.1. Entwurf (Design)

* **Informationsarchitektur:**

Die App besteht aus mehreren klar getrennten Bereichen:

* **Start:** Einstieg und Erklärung der App
* **Mahlzeit finden:** geführter Auswahlprozess
* **Alle Mahlzeiten:** Übersicht mit Suche
* **Neue Mahlzeit:** Formular zum Erfassen eigener Mahlzeiten
* **Favoriten:** gespeicherte Mahlzeiten
* **Detailseite:** Informationen zu einer Mahlzeit
* **Wochenplan:** Planung von Mahlzeiten für Wochentage

Die Navigation ist bewusst einfach gehalten und zeigt die wichtigsten Seiten direkt an.

* **User Interface Design:**

Das User Interface wurde mobile-first gestaltet. Die App hat eine begrenzte Breite und wirkt dadurch wie eine mobile Anwendung im Browser.

Wichtige UI-Elemente:

* grosse, gut klickbare Buttons

* Karten für Mahlzeiten

* Preisangaben als auffällige Elemente

* grün-cremefarbenes Farbschema

* klare Navigation

* reduzierte Texte

* visuelle Trennung von Formularen, Listen und Detailansichten

* **Designentscheidungen:**

  * **Mobile-first:** Die Zielgruppe nutzt solche Apps häufig spontan und unterwegs.
  * **Grün und Creme:** Das Farbschema passt zu Essen, Alltag, Budget und einem freundlichen App-Charakter.
  * **Kartenlayout:** Mahlzeiten lassen sich dadurch einfach vergleichen.
  * **Grosse Buttons:** Die Bedienung wird auf kleinen Bildschirmen einfacher.
  * **Kurze Texte:** Nutzer sollen schnell verstehen, was zu tun ist.
  * **Favoriten sichtbar in Navigation:** Feedback zeigte, dass Favoriten auffindbarer sein müssen.

### 3.4.2. Umsetzung (Technik)

* **Technologie-Stack:**

  * SvelteKit
  * JavaScript
  * HTML
  * CSS
  * localStorage
  * Git und GitHub
  * Netlify

* **Tooling:**

  * Visual Studio Code
  * GitHub
  * Netlify
  * Browser Developer Tools
  * GitHub Copilot / Agent-Unterstützung
  * ChatGPT für Planung, Debugging und Dokumentationsentwürfe

* **Struktur & Komponenten:**

Die App ist mit SvelteKit-Routen umgesetzt. Wichtige Seiten sind:

* `/` Startseite
* `/find` Mahlzeiten-Finder
* `/meals` Übersicht aller Mahlzeiten
* `/meals/new` Formular für neue Mahlzeiten
* `/meals/[meal_id]` Detailseite
* `/favorites` Favoritenübersicht
* `/planner` Wochenplan

Wichtige Daten- und Logikbereiche:

* Mahlzeitendaten

* Favoriten-Logik

* lokale Speicherung

* Suchfunktion

* Detailansicht

* Wochenplan-Prototyp

* **Daten & Schnittstellen:**

Im aktuellen Prototyp werden Daten clientseitig gespeichert. Dafür wird `localStorage` verwendet. Dadurch können im Browser gespeicherte Mahlzeiten, Favoriten und Planungsinformationen erhalten bleiben.

Diese Lösung ist für einen Prototyp geeignet, weil sie ohne Backend funktioniert und schnell testbar ist. Für eine produktivere Version wäre eine zentrale Datenbank, z.B. MongoDB, sinnvoll. Damit könnten Daten geräteübergreifend gespeichert und später mit Benutzerkonten verbunden werden.

* **Deployment:**

Die App wurde mit Netlify deployed.

Deployte Anwendung:

```text
https://budgetbite-maaru43.netlify.app
```

GitHub Repository:

```text
https://github.com/Maaru43/budgetbite
```

* **Besondere Entscheidungen:**

  * localStorage wurde verwendet, um den Prototyp stabil und ohne Backend lauffähig zu halten.
  * MongoDB wurde bewusst als spätere Erweiterung vorgesehen, da zuerst ein stabiler Frontend-Prototyp im Vordergrund stand.
  * Der Wochenplan wurde als Prototyp-Feature umgesetzt, auch wenn dieser noch weiter verbessert werden kann.
  * Netlify wurde für das Deployment verwendet, da dies im Unterricht behandelt wurde.

### 3.5 Validate

- **URL der getesteten Version**

Getestet wurde eine frühere deployte Version des Prototyps auf Vercel:

https://budgetbite-livid.vercel.app

Die finale Abgabeversion wurde danach weiter überarbeitet und ist auf Netlify verfügbar:

https://budgetbite-maaru43.netlify.app

* **Ziele der Prüfung:**

Die Usability Evaluation sollte folgende Fragen beantworten:

* Verstehen Nutzer den Zweck von BudgetBite?

* Können Nutzer passende Mahlzeiten finden?

* Ist die Navigation zwischen Startseite, Mahlzeitensuche, Favoriten und allen Mahlzeiten verständlich?

* Ist klar, wie Favoriten gespeichert und wiedergefunden werden?

* Welche Filter- und Suchfunktionen fehlen aus Sicht der Nutzer?

* Welche Punkte sollten für eine nächste Iteration priorisiert werden?

* **Vorgehen:**

Die Evaluation wurde als kurzer moderierter Usability-Test durchgeführt. Die Testpersonen haben den Prototyp geöffnet und typische Aufgaben ausgeführt. Währenddessen wurden Beobachtungen und Feedback notiert. Die Tests wurden informell mit Mitstudierenden durchgeführt.

* **Stichprobe:**

Es wurden drei Personen getestet:

* Manuel Marti, Student, potenzieller Nutzer von BudgetBite

* Emre Okay, Student, potenzieller Nutzer von BudgetBite

* Laurenz Ströbele, Student, potenzieller Nutzer von BudgetBite

* **Aufgaben/Szenarien:**

Die Testpersonen erhielten folgende Aufgaben:

1. Du bist Student und möchtest heute möglichst günstig essen. Öffne BudgetBite und finde eine passende Mahlzeit.
2. Du hast wenig Zeit und möchtest eine schnelle Mahlzeit finden. Nutze den Prototyp, um eine geeignete Option zu finden.
3. Du möchtest eine Mahlzeit später wiederfinden. Speichere eine Mahlzeit als Favorit und suche sie danach wieder.
4. Du möchtest eine eigene einfache Mahlzeit erfassen. Füge eine neue Mahlzeit hinzu.
5. Du möchtest eine Mahlzeit für einen Wochentag planen. Öffne die Detailseite und prüfe, wie du die Mahlzeit in den Wochenplan übernehmen würdest.
6. Gib zum Schluss Feedback: Was war klar, was war unklar, welche Funktionen fehlen?

* **Kennzahlen & Beobachtungen:**

Die Evaluation wurde qualitativ ausgewertet. Die Beobachtungen wurden als Issue Map zusammengefasst und priorisiert.

#### Issue 1: Begriff „Zeit“ war nicht eindeutig

**Beobachtung:**
Eine Testperson war unsicher, was mit „Zeit“ gemeint ist. Es war nicht direkt klar, ob damit Kochzeit, Vorbereitungszeit oder verfügbare Zeit gemeint ist.

**Quelle:** Manuel Marti
**Priorität:** Mittel
**Entscheidung:** Das Label soll in einer nächsten Iteration präzisiert werden, z.B. zu „Maximale Kochzeit“.

#### Issue 2: Suchfunktion fehlte

**Beobachtung:**
Eine Testperson erwartete eine Suchmöglichkeit, um Mahlzeiten schneller nach Name, Kategorie oder Zutaten zu finden.

**Quelle:** Manuel Marti
**Priorität:** Hoch
**Entscheidung:** Eine Suchleiste wurde ergänzt.

#### Issue 3: Mehr Filtermöglichkeiten wären hilfreich

**Beobachtung:**
Es wurde gewünscht, Mahlzeiten nicht nur über den Guide zu finden, sondern auch gezielter nach Kriterien wie Name, Kategorie oder Zutaten zu filtern.

**Quelle:** Manuel Marti
**Priorität:** Hoch
**Entscheidung:** Die Suchfunktion wurde als erster Schritt umgesetzt. Weitere Filter bleiben als Verbesserung für die nächste Iteration geplant.

#### Issue 4: Kategorie sollte auswählbar sein

**Beobachtung:**
Beim Erfassen einer neuen Mahlzeit wäre es verständlicher, wenn die Kategorie nicht frei eingetippt werden muss, sondern aus einer Liste ausgewählt werden kann.

**Quelle:** Manuel Marti
**Priorität:** Mittel
**Entscheidung:** Für eine nächste Version soll die Kategorie als Dropdown umgesetzt werden.

#### Issue 5: Preisangaben mit Dezimalzahlen

**Beobachtung:**
Eine Testperson wollte Preise wie 4.20 CHF eingeben können. Ganze Zahlen reichen für echte Essenspreise nicht aus.

**Quelle:** Manuel Marti
**Priorität:** Hoch
**Entscheidung:** Preisangaben mit Dezimalzahlen wurden als wichtige Verbesserung priorisiert.

#### Issue 6: Favoriten waren nicht sofort auffindbar

**Beobachtung:**
Es war nicht sofort klar, wo gespeicherte Favoriten später sichtbar sind.

**Quelle:** Manuel Marti
**Priorität:** Hoch
**Entscheidung:** Die Favoriten-Seite wurde in der Navigation sichtbarer gemacht.

#### Issue 7: Filtern nach vorhandenen Zutaten

**Beobachtung:**
Eine Testperson wünschte sich eine Funktion, bei der man vorhandene Zutaten eingeben kann und passende Gerichte vorgeschlagen bekommt.

**Quelle:** Manuel Marti
**Priorität:** Mittel
**Entscheidung:** Diese Funktion wird als sinnvolle Erweiterung für eine spätere Iteration festgehalten.

#### Issue 8: Grundstruktur wirkt intuitiv

**Beobachtung:**
Die App wurde als verständlich und intuitiv wahrgenommen. Der Hauptzweck war schnell erkennbar.

**Quelle:** Laurenz Ströbele
**Priorität:** Positiv
**Entscheidung:** Die Grundstruktur wird beibehalten.

#### Issue 9: Mobile Darstellung passt zur Idee

**Beobachtung:**
Die mobile Darstellung passt gut zur Idee einer einfachen Alltags-App für Studierende.

**Quelle:** Emre Okay
**Priorität:** Positiv
**Entscheidung:** Das Mobile-first Design wird beibehalten.

#### Issue 10: Wochenplan als sinnvolle Erweiterung

**Beobachtung:**
Der Wochenplan wurde als sinnvolle Idee wahrgenommen, sollte aber in der Bedienung noch klarer werden.

**Quelle:** Emre Okay
**Priorität:** Mittel
**Entscheidung:** Der Wochenplan bleibt als Prototyp-Feature erhalten und soll in einer nächsten Iteration verbessert werden.

* **Zusammenfassung der Resultate:**

Die Evaluation zeigte, dass die Grundidee von BudgetBite verständlich ist und die App grundsätzlich intuitiv wirkt. Besonders positiv bewertet wurden der einfache Aufbau, die mobile Darstellung und die Idee, günstige und schnelle Mahlzeiten für Studierende bereitzustellen. Gleichzeitig zeigte das Feedback, dass Suche, Filter, auswählbare Kategorien und eine bessere Zutatenlogik wichtige Verbesserungen für die nächste Iteration sind.

* **Abgeleitete Verbesserungen:**

  1. Suchfunktion für Mahlzeiten ergänzen.
  2. Favoriten in der Navigation sichtbarer machen.
  3. Preisangaben mit Dezimalzahlen ermöglichen.
  4. Kategorie-Eingabe später als Dropdown umsetzen.
  5. Begriff „Zeit“ präzisieren, z.B. zu „Maximale Kochzeit“.
  6. Zutatenfilter als zukünftige Erweiterung einplanen.
  7. Wochenplan weiter verbessern und klarer mit den Mahlzeiten verbinden.

## 4. Erweiterungen [Optional]

### 4.1 Favoritenfunktion

* **Beschreibung & Nutzen:** Nutzer können interessante Mahlzeiten als Favorit speichern und später wiederfinden. Dies verbessert die Wiederverwendbarkeit und unterstützt den Alltag.
* **Wo umgesetzt:** Frontend und clientseitige Speicherung mit localStorage.
* **Referenz:** Favoriten-Seite und Detailseite.
* **Aus Evaluation abgeleitet?:** Ja, da die Sichtbarkeit und Auffindbarkeit von Favoriten im Feedback angesprochen wurde.

### 4.2 Suchfunktion

* **Beschreibung & Nutzen:** Nutzer können Mahlzeiten schneller finden, statt nur über die Liste oder den Guide zu navigieren.
* **Wo umgesetzt:** In der Mahlzeitenübersicht.
* **Referenz:** Seite `/meals`.
* **Aus Evaluation abgeleitet?:** Ja, die fehlende Suchfunktion wurde als Issue mit hoher Priorität identifiziert.

### 4.3 Neue Mahlzeit erfassen

* **Beschreibung & Nutzen:** Nutzer können eigene einfache Mahlzeiten hinzufügen. Dadurch wird der Prototyp interaktiver und weniger statisch.
* **Wo umgesetzt:** Formular auf `/meals/new`, Speicherung im localStorage.
* **Referenz:** Seite „Neue Mahlzeit“.
* **Aus Evaluation abgeleitet?:** Teilweise. Die Funktion unterstützt den Kernworkflow und wurde zusätzlich als sinnvolle Interaktion umgesetzt.

### 4.4 Wochenplan-Prototyp

* **Beschreibung & Nutzen:** Mahlzeiten können für Wochentage geplant werden. Dies erweitert BudgetBite von einer reinen Such-App zu einer einfachen Planungs-App.
* **Wo umgesetzt:** Seite `/planner` und Detailseite der Mahlzeiten.
* **Referenz:** Wochenplan-Seite.
* **Aus Evaluation abgeleitet?:** Teilweise. Der Wochenplan wurde als sinnvolle Idee wahrgenommen, soll aber weiter verbessert werden.

### 4.5 Netlify Deployment

* **Beschreibung & Nutzen:** Die App ist online zugänglich und kann von Dozierenden und Testpersonen ohne lokale Installation verwendet werden.
* **Wo umgesetzt:** Netlify Deployment mit GitHub-Verbindung.
* **Referenz:** `https://budgetbite-maaru43.netlify.app`
* **Aus Evaluation abgeleitet?:** Nein, aber für Test und Abgabe notwendig.

## 5. Projektorganisation [Optional]

* **Repository & Struktur:**

GitHub Repository:

```text
https://github.com/Maaru43/budgetbite
```

Die Projektstruktur folgt einer typischen SvelteKit-Struktur:

* `src/routes`: Seiten und Routen der App

* `src/lib`: Daten, Stores und wiederverwendbare Logik

* `src/app.css`: globales Styling

* `static`: statische Assets

* `README.md`: Projektdokumentation

* `netlify.toml`: Netlify-Konfiguration

* **Issue-Management:**

Issues wurden informell aus Feedback, Bugs und Beobachtungen abgeleitet. Während der Entwicklung wurden Probleme schrittweise priorisiert, zum Beispiel:

* Detailseite funktioniert nicht korrekt

* Favoriten müssen sichtbarer sein

* Suchfunktion fehlt

* Wochenplan ist noch nicht vollständig intuitiv

* Netlify Deployment muss funktionieren

* README muss der offiziellen Vorlage entsprechen

* **Commit-Praxis:**

Es wurden mehrere Commits verwendet, um den Stand des Projekts zu sichern. Beispiele für Commit-Inhalte:

* Umsetzung der Grundstruktur
* Anpassung des Designs
* Ergänzung von Favoriten
* Verbesserung der Dokumentation
* Netlify-Konfiguration
* Aktualisierung des Deployment-Links

## 6. KI-Deklaration

Die folgende Deklaration beschreibt den Einsatz von KI im Projekt.

### 6.1 KI-Tools

* **Eingesetzte Tools:**

  * ChatGPT
  * GitHub Copilot / VS-Code-Agent
  * KI-Unterstützung innerhalb der Entwicklungsumgebung

* **Zweck & Umfang:**

KI wurde unterstützend eingesetzt für:

* Ideenfindung und Strukturierung des Projekts
* Formulierung der Problemstellung
* Planung der Seitenstruktur
* Erstellung und Überarbeitung von SvelteKit-Komponenten
* Debugging von Routing-, localStorage- und Favoritenfunktionen
* Verbesserung des UI-Designs
* Unterstützung bei Git-, GitHub- und Netlify-Schritten
* Formulierung und Strukturierung der README-Dokumentation
* Vorbereitung der Usability-Auswertung

Teile des Codes und der Dokumentation wurden mit KI-Unterstützung erstellt oder überarbeitet. Die Ergebnisse wurden schrittweise geprüft, angepasst und getestet.

* **Eigene Leistung (Abgrenzung):**

Die Projektidee, die Auswahl der Zielgruppe, die Entscheidungen zum Funktionsumfang, das Testen der App, die Bewertung des Feedbacks und die finale Auswahl der Inhalte wurden eigenständig vorgenommen. KI-generierte Vorschläge wurden nicht unverändert übernommen, sondern im Projektkontext geprüft und angepasst.

### 6.2 Prompt-Vorgehen

Beim Einsatz von KI wurde schrittweise gearbeitet. Statt einen grossen Prompt für die gesamte App zu verwenden, wurden konkrete Teilaufgaben formuliert, z.B.:

* Erstellen einer SvelteKit-Seite
* Beheben eines Routing-Problems
* Verbessern einer Detailseite
* Erstellen einer Favoritenfunktion
* Formulieren einer README-Struktur
* Auswerten von Usability-Feedback
* Vorbereiten des Netlify Deployments

Die Prompts enthielten meist den aktuellen Projektstand, Fehlermeldungen, Screenshots oder Codeausschnitte. Dadurch konnten die KI-Vorschläge besser an den tatsächlichen Stand angepasst werden.

Bei Codevorschlägen wurde jeweils getestet, ob die App noch funktioniert und ob `npm run build` erfolgreich ausgeführt werden kann.

### 6.3 Reflexion

Der KI-Einsatz war hilfreich, um schneller zu einem funktionierenden Prototyp zu gelangen und Fehler besser zu verstehen. Besonders nützlich war KI bei Debugging, Strukturierung und Dokumentation.

Gleichzeitig zeigte sich, dass KI-Vorschläge nicht immer direkt korrekt waren. Teilweise entstanden neue Fehler, z.B. bei Routing, Wochenplan-Funktionalität oder SvelteKit-Syntax. Deshalb war es wichtig, die Vorschläge zu testen, Fehlermeldungen zu prüfen und den Code schrittweise anzupassen.

Die Verantwortung für die finale Umsetzung, die inhaltliche Korrektheit und die Abgabe bleibt beim Studierenden.

## 7. Anhang [Optional]

* **Abgabeinformationen:**

GitHub Repository:

```text
https://github.com/Maaru43/budgetbite
```

Deployte Anwendung:

```text
https://budgetbite-maaru43.netlify.app
```

Zugangsdaten:

```text
Keine Zugangsdaten erforderlich.
```

Weitere URLs:

Weitere URLs:

Getestete Version für Usability Evaluation:
https://budgetbite-livid.vercel.app