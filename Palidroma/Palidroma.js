/*  function reverseString(str) {                     //inverte le parole per poi compararle e vedere se sono uquali cosi facendo
                                                    //posso === vedere  se si puo leggere da entranbi le parte
        var newString = "";
        for (var i = str.length - 1; i >= 0; i--) {
            newString += str[i];
        }
        return newString;
    }
    reverseString('hello');*/


/*function reverseString(str) {
    var newString = ""
}*/

//document.getElementById("game-form").addEventListener("submit", function(event) {

    //event.preventDefault();


    //const risultatoInHtml = document.getElementById("result")


    
function Palindroma(parola) {

    return parola === parola.split("").reverse().join("");

}

let parolaInserita = prompt("Inserisci una parola:");

if (Palindroma(parolaInserita)) {

    // /resultElement.textContent = "La parola e palindroma!";

    console.log("La parola e palindroma!");

} else {

    //resultElement.textContent = "La parola  non e palindroma!";

    console.log("La parola  non e palindroma.");

};//});




//non fare il tirchio poi fallo anche su html dai

//ricorda  cosa deve cambiare se fatto con il click


//aspetta posso anche fare semplicemente parola === parolaInvertita e in automatico mi dare un 0 1 