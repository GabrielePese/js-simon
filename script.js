// Un alert espone 5 numeri casuali (univoci).
// Poi parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati


var array = []


for (var i = 0; i < 5; i++) {
  controlloNumeri (array, getRand)
}

alert(array)

setInterval(myVar = parseInt(prompt("inserisci un numero")), 4000);

// var myVar = parseInt(prompt("inserisci un numero"))

console.log(array);
console.log("num "+ myVar);

// var numeroUtente = prompt("inserisci numero")

// FUNZIONI

function getRand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Il max è escluso e il min è incluso
}


function controlloNumeri (array, numero){
  if (array[i] == numero) {
    i--
  }
  else {
    array.push(getRand(1,100))
  }
}
