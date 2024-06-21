# Autoversicherungsrechner

## Projekt-Abstract
Der Autoversicherungsrechner ist eine interaktive Webanwendung, die es Nutzern ermöglicht, eine 
Schätzung ihrer Versicherungsprämie basierend auf verschiedenen Faktoren wie Fahrzeugwert, Alter 
und Erfahrung des Fahrers, Versicherungsart, Fahrstrecke und Region zu berechnen. Die Anwendung 
führt den Benutzer durch verschiedene Formulare, sammelt relevante Daten und berechnet schließlich 
die geschätzten Kosten für die Autoversicherung. Die Ergebnisse können als PDF heruntergeladen werden.

### Autor
Vincent Stucki

### Schule
Kantonsschule Büelrain

### Zeitraum
März 2024 - Juni 2024

### Persönliche Auswertung
Dieses Projekt ermöglichte es mir, meine Fähigkeiten in React und JavaScript zu vertiefen. 
Ich habe gelernt, wie man eine mehrseitige Anwendung mit React Router erstellt und 
Benutzerinteraktionen effektiv verwaltet. Die Integration von Drittanbieter-Bibliotheken 
wie jsPDF und html2canvas zur PDF-Generierung war ebenfalls eine wertvolle Erfahrung.

## Projektstruktur
Das Projekt besteht aus den folgenden Hauptkomponenten:

### Hauptkomponenten
1. **App.js:** Die Hauptkomponente der Anwendung, die den gesamten Ablauf steuert, 
einschließlich Navigation und Datenverwaltung.
2. **Fahrzeug.js:** Komponente zur Erfassung von Fahrzeuginformationen.
3. **Fahrer.js:** Komponente zur Erfassung von Informationen über den Fahrer.
4. **Versicherung.js**: Komponente zur Auswahl der Versicherungsart.
5. **Fahrstrecke.js**: Komponente zur Erfassung der jährlichen Fahrstrecke.
6. **Region.js:** Komponente zur Auswahl der Region, in der der Benutzer lebt.
7. **Ergebnis.js:** Komponente zur Anzeige der berechneten Versicherungsprämie und zur PDF-Generierung.

### Zusätzliche Dateien
- **Circle.js:** Eine Komponente zur Darstellung von Fortschrittskreisen.
- **mvp.css:** Eine CSS-Datei zur Gestaltung der Anwendung.

## Anleitung zur Nutzung
1. Start: Die Anwendung beginnt auf der Startseite. Klicken Sie auf "Start", um den Prozess 
zu beginnen.
2. Navigieren: Verwenden Sie die "Weiter" und "Zurück" Schaltflächen, um durch die Formulare 
zu navigieren und Daten einzugeben.
3. Daten eingeben: Geben Sie die erforderlichen Informationen in die Formulare ein. 
Jede Seite speichert die Daten automatisch.
4. Ergebnis anzeigen: Nachdem alle Informationen eingegeben wurden, wird die geschätzte 
Versicherungsprämie auf der Ergebnisseite angezeigt.
5. PDF herunterladen: Klicken Sie auf "Download PDF", um die Ergebnisse als PDF 
herunterzuladen.
6. Neu Starten: Klicken Sie auf "Neu Start", um den Prozess von vorne zu beginnen.

## Code-Struktur und Funktionsweise
### App.js
- **State-Management**: Die App-Komponente verwendet useState, um den aktuellen Index der 
Seite und die Formulardaten zu verwalten.
- **Navigation**: Die Anwendung verwendet react-router-dom für die Navigation zwischen den Seiten.
- **Formulardaten**: Die Funktion handleFormDataChange aktualisiert die Formulardaten, während 
der Benutzer die Eingaben vornimmt.
- **Seiten-Array**: Ein Array von Objekten, das den Namen, Pfad und die Komponente jeder Seite enthält.

### Einzelne Seitenkomponente
Jede Seite (z.B. **Fahrzeug.js**, **Fahrer.js**, etc.) besteht aus einem Formular zur Erfassung 
spezifischer Daten. Diese Komponenten empfangen die aktuellen Daten als Prop und verwenden 
**onDataChange**, um Änderungen an den App-Status weiterzugeben.

## Ergebnis.js
Diese Komponente berechnet die Versicherungsprämie basierend auf den eingegebenen Daten 
und stellt eine Funktion zur PDF-Generierung bereit.

# Deployment
Die React-App ist auf vercel deployed: [Autoversicherungsberechner](https://autoversicherungsberechner.vercel.app)

## Refactor
Ich habe bemerkt, dass das Design recht simple ist und ich sollte es überarbeiten.
21.06.2024 Es ist anhand des Figmas so dargestellt, doch ich möchte das Styling verbessern.

# Fazit
Der Autoversicherungsrechner ist ein praktisches Tool zur Berechnung der Autoversicherungsprämie
und bietet eine einfache Benutzerführung. Die Anwendung demonstriert die Fähigkeiten zur
Erstellung von React-Anwendungen mit komplexer Navigation und Datenverwaltung. 
Durch die Implementierung dieser Anwendung konnte ich meine Kenntnisse in React, JavaScript und
Webentwicklung insgesamt erweitern und festigen.
