//FASE DI INPUT & OPERAZIONE DI VERIFICA:
alert("inserisci sei numeri");
alert("ti dirò qual'è il MAX e il MIN");

const numeri = [];
let numero;

for (let i = 0; i < 6; i++) {
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
