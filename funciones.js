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
    // Comprueba que el apellido existe
    if (apellido) {
        return nombre + " " + apellido;
    }
    return "" + nombre;
}
var nombreOpcional = nombreCompletoOpcional("John");
console.log(nombreOpcional);
// ********** Parámetros por defecto **********
function nombreCompletoDefault(nombre, apellido, capitalizado) {
    if (capitalizado === void 0) { capitalizado = false; }
    if (capitalizado) {
        return capitalizar(nombre) + " " + capitalizar(apellido);
    }
    return nombre + " " + apellido;
}
var nombreDefault = nombreCompletoDefault("john", "doe");
var nombreCapitalizado = nombreCompletoDefault("john", "doe", true);
console.log(nombreDefault);
console.log(nombreCapitalizado);
function capitalizar(palabra) {
    return "" + palabra.charAt(0).toUpperCase() + palabra
        .substring(1)
        .toLowerCase();
}
