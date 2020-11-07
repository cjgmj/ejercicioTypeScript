"use strict";
// ********** Funciones genéricas **********
function devolver(arg) {
    return arg;
}
console.log(devolver(15.456789).toFixed(2));
console.log(devolver("John Doe").charAt(0));
console.log(devolver(new Date()).getTime());
function functionGenerica(arg) {
    return arg;
}
var deadpool = {
    nombre: "Deadpool",
    nombreReal: "Wade Winston Wilson",
    poder: "Regeneración",
};
console.log(functionGenerica(deadpool));
console.log(functionGenerica(deadpool));
