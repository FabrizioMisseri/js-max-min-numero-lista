//FASE DI INPUT & OPERAZIONE DI VERIFICA:
alert("algoritmo che restituisce il MAX e il MIN di un set numerico scelto dall' utente");
let qnt = parseInt(prompt("Quanti numeri vuoi prendere in analisi?"));
while (qnt % 1 !== 0) {
    qnt = parseInt(prompt("non hai messo un numero. Perfavore inserisci quanti numeri vuoi analizzare"));
}

const numeri = [];
let numero;

for (let i = 0; i < qnt; i++) {
    numero = parseInt(prompt("inserisci un numero"));
    while (numero % 1 !== 0) {
        numero = parseInt(prompt("non hai messo un numero. Perfavore inserisci un numero"));
    }
    numeri.push(numero);
}


        
//FASE DI ELABORAZIONE DATI
let max = numeri[0];
let min = numeri[0];

for (let i = 0; i < (numeri.length); i++) {
    if (numeri[i] > max) {
        max = numeri[i];
    } else if (numeri[i] < min) {
        min = numeri[i];
    }
}


//FASE DI OUTPUT
alert(`il max num è ${max}, il min num è ${min}`);
