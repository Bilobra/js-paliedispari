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
console.log('hai scelto il numero: ' + numeroScelto);
const numeroPc = getRandomIntBetween(1, 5);
console.log('numero pc : ' + numeroPc)
// PRIMA SCRIVO LA FUNZIONE poi la salvo in una const : 

// somma del numero generato e del numero scelto

const numeroSum = (numeroScelto + numeroPc);
console.log('somma dei numeri : ' + numeroSum);


// DETERMINARE CHI HA VINTO
// salvo il dato del pari o dispari
const risultato = isEven(numeroSum);
// console.log('risultato : ' + risultato);

// condizione di vincita
if (scelta === 'pari' && risultato === true) {
    console.log('ha vinto il giocatore');
} else if (scelta === 'dispari' && risultato === false) {
    console.log('ha vinto il giocatore');
}
else {
    console.log('ha vinto il computer');
}

// FUNZIONI --->

// GENERARE NUMERO RANDOM DA 1 A 5 
function getRandomIntBetween(min, max) {

    const n = Math.floor(Math.random() * (max - min + 1)) + min;

    return n;
}

// STABILIRE PARI O DISPARI
function isEven(num) {
    if (num % 2 === 0) {
        console.log('il numero è pari');
        return true;
    } else {
        console.log('il numero è dispari');
        return false;

    }
}
