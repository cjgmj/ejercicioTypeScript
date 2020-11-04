"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ********** Funciones básicas **********
var heroe = "Flash";
function imprimeHeroe() {
    return heroe;
}
var activarBatisenal = function () {
    return "Bati-señal activada";
};
console.log(imprimeHeroe());
console.log(activarBatisenal());
// ********** Parámetros obligatorios **********
function nombreCompleto(nombre, apellido) {
    return nombre + " " + apellido;
}
var nombre = nombreCompleto("John", "Doe");
console.log(nombre);
