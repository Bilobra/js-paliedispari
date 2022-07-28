// console di prova
console.log('provaaaaa mi sentiii?')

// PALIDROMA
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

let parola = prompt('inserisci una parola ');

console.log(parola)

// funzione dove la parola è splittata , invertita e composta in un unica operazione

function invertiParola(stringa) {
    const stringaInversa = stringa.split('').reverse().join('')

    return stringaInversa
}
// salviamo i dati in una costante 
const parolaInversa = invertiParola(parola)
console.log(parolaInversa)

// verifichiamo se la parola è palidroma con una condizione
if (parola === parolaInversa) {
    console.log('la parola è palindroma')
} else {
    console.log('la parola non è palindroma')
}

// ---------------------------

// PARI & DISPARI
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

const scelta = prompt('scegli pari o dispari');
console.log(scelta);
const numeroScelto = parseInt(prompt('scegli un numero da 1 a 5'));
console.log(numeroScelto);

// PRIMA SCRIVO LA FUNZIONE poi la salvo in una const : 
// somma del numero generato e del numero scelto

const numeroSum = (numeroScelto + getRandomIntBetween(1, 5));
console.log(numeroSum);



// FUNZIONI --->

// GENERARE NUMERO RANDOM DA 1 A 5 
function getRandomIntBetween(min, max) {

    const n = Math.floor(Math.random() * (max - min + 1)) + min
    console.log(n)
    return n
}