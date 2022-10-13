alert("inserisci sei numeri");
alert("ti dirò qual'è il MAX e il MIN");

const numeri = [

                parseInt(prompt("inserisci numero 1")),
                parseInt(prompt("inserisci numero 2")),
                parseInt(prompt("inserisci numero 3")),
                parseInt(prompt("inserisci numero 4")),
                parseInt(prompt("inserisci numero 5")),
                parseInt(prompt("inserisci numero 6"))

                ];

let max = numeri[0];
let min = numeri[0];

for (let i = 0; i < (numeri.length); i++) {
    if (numeri[i] > max) {
        max = numeri[i];
    } else if (numeri[i] < min) {
        min = numeri[i];
    }
}

alert(`il max num è ${max}, il min num è ${min}`);
