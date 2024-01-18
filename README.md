# Quiz App Documentation

## 1. Structuur van de applicatie:

- **/public:** Bevat de statische bestanden zoals HTML (quiz.html).
- **/views:** Bevat de EJS-template bestanden (result.ejs).
- **/routes:** Bevat de route-bestanden voor de applicatie (index.js en quiz.js).
- **/utils:** Bevat hulpprogramma's, zoals calcResult.js, voor het berekenen van de resultaten.
- **server.js:** De hoofdbestand dat de server instelt, routes beheert en de applicatie start.

## 2. Installatie en Uitvoeren:

- Zorg ervoor dat Node.js is geïnstalleerd op het systeem.
- Voer `npm install` uit in de terminal om de afhankelijkheden te installeren.
- Voer `node server.js` uit om de server te starten.

## 3. Applicatie Workflow:

- Gebruiker opent de quiz door naar `http://localhost:3000` te gaan.
- Quizpagina (quiz.html) wordt weergegeven, waar de gebruiker antwoorden invult en het formulier verzendt.
- De server ontvangt het formulier via een POST-verzoek naar `/result` en berekent de score met behulp van `calcResult.js`.
- De server rendert de resultatenpagina (result.ejs), waar de gebruiker de behaalde score ziet en wordt teruggestuurd naar de quiz.

## 4. Aanpassingen en Uitbreidingen:

- Om de vragen van de quiz te wijzigen, pas je de verwachte antwoorden in `calcResult.js` aan.
- Het ontwerp van de resultatenpagina kan worden aangepast door wijzigingen aan te brengen in `result.ejs`.

## 5. Belangrijke Bestanden:

- **server.js:** De hoofdserverlogica en configuratie.
- **quiz.html:** De HTML-pagina waarop de quiz wordt weergegeven.
- **result.ejs:** De EJS-template voor de resultatenpagina.
- **calcResult.js:** Het hulpprogramma voor het berekenen van de scores.

## 6. Tips:

- Voeg nieuwe vragen toe door de verwachte antwoorden in `calcResult.js` uit te breiden.
- Pas de lay-out en stijl aan in `result.ejs` om de resultatenpagina aan te passen.
- Breid de applicatie uit met extra functies zoals gebruikersregistratie of het opslaan van resultaten.

Dit is een basisdocumentatie voor de quizapplicatie. Voel je vrij om het aan te passen en uit te breiden op basis van de specifieke behoeften van je project.
