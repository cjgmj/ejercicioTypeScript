"use strict";
// ********** Crear un Namespace **********
var Validaciones;
(function (Validaciones) {
    // Con el export se indica que las funciones podrán ser utilizadas fuera del Namespace
    function validarTexto(texto) {
        if (texto.length > 3) {
            return true;
        }
        return false;
    }
    Validaciones.validarTexto = validarTexto;
    function validarFecha(fecha) {
        if (isNaN(fecha.valueOf())) {
            return false;
        }
        return true;
    }
    Validaciones.validarFecha = validarFecha;
})(Validaciones || (Validaciones = {}));
console.log(Validaciones.validarTexto("Barry Allen"));
console.log(Validaciones.validarTexto("All"));
var hoy = new Date();
console.log(Validaciones.validarFecha(hoy));
// ********** Múltiples namespaces **********
// Solución importando el archivo en el HTML
// if (ValidacionesMultiple.validarTexto("Barry Allen")) {
//   console.log("El texto es válido");
// } else {
//   console.log("El texto no es válido");
// }
// Ejecutar en terminal el comando tsc --outFile build/app.js /validaciones/*
// console.log(ValidacionesMultiple.validarTexto("Barry Allen"));
// console.log(ValidacionesMultiple.validarTexto("All"));
// console.log(ValidacionesMultiple.validarFecha(hoy));
