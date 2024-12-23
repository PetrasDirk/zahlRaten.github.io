let numberToGuess = Math.round(Math.random() * 100);
let tries = 0;

function guessTheNumber() {
    tries = tries + 1;
    displayTries.innerHTML = 'Versuche: ' + tries;

    if (numberToGuess == myNumber.value) {
        headline.innerHTML = 'Du hast Gewonnen!!! 👌💕';
        let jsConfetti = new JSConfetti();
        jsConfetti.addConfetti();

        // Verzögerung hinzufügen, bevor das Spiel neu startet
        setTimeout(function() {
            // Spiel neu starten
            numberToGuess = Math.round(Math.random() * 100); // Neue Zahl
            tries = 0; // Versuche zurücksetzen
            displayTries.innerHTML = 'Versuche: ' + tries; // Anzeige zurücksetzen
            headline.innerHTML = ''; // Gewinnmeldung entfernen
        }, 2000); // 2 Sekunden Verzögerung, damit der Benutzer den Gewinn sehen kann
    }

    if (numberToGuess > myNumber.value) {
        headline.innerHTML = 'Die Zahl ist größer!!! 😒';
    }

    if (numberToGuess < myNumber.value) {
        headline.innerHTML = 'Die Zahl ist kleiner!!! 😒';
    }
    myNumber.value = ''; // Eingabefeld leeren
}
