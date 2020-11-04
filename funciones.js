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
// ********** Parámetros opcionales **********
// Indicamos que un parámetro es opcional con ? detrás del nombre del argumento
function nombreCompletoOpcional(nombre, apellido) {
    if (apellido) {
        // Comprueba que el apellido existe
        return nombre + " " + apellido;
    }
    return "" + nombre;
}
var nombreOpcional = nombreCompletoOpcional("John");
console.log(nombreOpcional);
