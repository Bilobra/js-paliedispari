// console di prova
console.log('provaaaaa mi sentiii?')

// PALIDROMA
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

let parola = prompt('inserisci una parola ');

console.log(parola)

// funzione dove la parola è splittata , invertita e composta in un unica operazione

function invertiParola (stringa){
    const stringaInversa = stringa.split('').reverse().join('')
   
    return stringaInversa
}
// salviamo i dati in una costante 
const parolaInversa = invertiParola(parola)
console.log(parolaInversa)

// verifichiamo se la parola è palidroma con una condizione
if (parola === parolaInversa){
    console.log('la parola è palindroma')
} else {
    console.log('la parola non è palindroma')
}

// ---------------------------

// PARI & DISPARI