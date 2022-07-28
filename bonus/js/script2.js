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


// let frase = prompt('inserisci una frase');
// console.log(frase);

// function invertiFrase(str) {
//     const frasereverse = str.split('').reverse().join('')
//     return frasereverse
// }

// const fraseCompleta = invertiFrase(frase)
// console.log(fraseCompleta)

// ---------------------------

// PARI & DISPARI
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

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



const scelta = prompt('scegli pari o dispari');

// VERIFICARE DI AVER INSERITO PARI O DISPARI 

if (scelta != 'pari' && scelta != 'dispari') {
    alert('non hai inserito correttamente la parola, ritenta!')
    console.log(scelta);
} else {

    const numeroScelto = parseInt(prompt('scegli un numero da 1 a 5'));

    // VERIFICARE CHE NUMERO SCELTO SIANO NUMERI E >1 - <5 

    if (numeroScelto < 1 || numeroScelto > 5 || isNaN(numeroScelto)) {
        alert('numero non valido, ritenta!')
        console.log('hai scelto il numero: ' + numeroScelto);
    } else {
        const numeroPc = getRandomIntBetween(1, 5);
        console.log('numero pc : ' + numeroPc);


        // VERIFICARE CHE SCELTA SIA PARI O DISPARI


        // somma del numero generato e del numero scelto

        const numeroSum = (numeroScelto + numeroPc);
        console.log('somma dei numeri : ' + numeroSum);


        // DETERMINARE CHI HA VINTO
        // salvo il dato del pari o dispari della funzione
        const risultato = isEven(numeroSum);
        // console.log('risultato : ' + risultato);

        // condizione di vincita
        if (scelta === 'pari' && risultato === true) {
            console.log('ha vinto il giocatore');
            alert('HAI VINTO!!');
        } else if (scelta === 'dispari' && risultato === false) {
            console.log('ha vinto il giocatore');
            alert('HAI VINTO!!');

        }
        else {
            console.log('ha vinto il computer');
            alert('HAI PERSO!!');

        }
    }

}





