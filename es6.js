"use strict";
// ********** Variables LET **********
var nombre = "Tony";
if (true) {
    var nombre = "Bruce";
}
console.log(nombre);
// Al crear una variable con let la crea en un scope específico
var nombre2 = "Tony";
if (true) {
    var nombre2_1 = "Bruce";
    //   nombre2 = "Bruce"; // Cambia el calor de la variable
}
console.log(nombre2);
