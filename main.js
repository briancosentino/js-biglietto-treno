/*  Descrizione
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
 */
const numKm = Number(prompt('scrivi il numero di kilometri che devi trascorrere'));
console.log(numKm);

const age = Number(prompt ('scrivi la tua età'));
const tripPrice = (numKm * 0.21);
console.log(tripPrice + '€');
const youngerPrice = tripPrice - (tripPrice * 20 / 100)
const mayorPrice = tripPrice - (tripPrice * 40 / 100)



if (age < 18) {
    console.log('il prezzo del viaggio è di ' + youngerPrice.toFixed(2) + '€');
    

    
} else if (age > 65) {
    console.log('il prezzo del viaggio è di ' + mayorPrice.toFixed(2) + '€');
    
} else {
    console.log('il prezzo del viaggio è di ' + tripPrice.toFixed(2) + '€');
    
}



