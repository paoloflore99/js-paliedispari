/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/


/*
    
    const generaNumeroRandom = () => Math.floor(Math.random() * 5) + 1;  //Generare un numero random da 1 a 5

    // Funzione per determinare se un numero è pari o dispari
    const isPari = numero => numero % 2 === 0;



*/



//Serve per generare un numero random da 1 a 5
function generaNumeroRandom() {

    return Math.floor(Math.random() * 5) + 1;

}


//Serve per determinare se un numero è pari o dispari
function isPari(numero) {

    return numero % 2 === 0;

}


//Serve pe
function dichiaraVincitore(sceltaUtente, sommaNumeri) {

    let risultato = isPari(sommaNumeri) ? "pari" : "dispari";

    if (risultato === sceltaUtente) {

        return "Hai vinto!";

    } else {

        return "Hai perso!";
    }
}




/**
 * @
 * 
 */

document.getElementById("game-form").addEventListener("submit", function(event) {

    event.preventDefault();

    let sceltaUtente = document.querySelector("input[name='choice']:checked");

    let numeroUtente = parseInt(document.querySelector("input[name='number']").value);

    if (!sceltaUtente || isNaN(numeroUtente) || numeroUtente < 1 || numeroUtente > 5) {
    return;
    }

    let numeroComputer = generaNumeroRandom();

    let sommaNumeri = numeroUtente + numeroComputer;

    let resultElement = document.getElementById("result");
    
    resultElement.textContent = "Il numero del computer è: " + numeroComputer + ". La somma dei numeri è: " + sommaNumeri + ". " + dichiaraVincitore(sceltaUtente.value, sommaNumeri);

});