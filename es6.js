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
// ********** Variables CONST **********
// Son variable que no pueden mutar una vez definidas
// Generalmente las constantes van en mayúsculas
var OPCIONES = "Activo";
// const OPCIONES: string; // No se puede definir sin valor
// OPCIONES = "Desactivado"; // No se puede hacer
if (true) {
    var OPCIONES_1 = "Desactivado"; // Lo permite al estar en otro scope
}
for (var _i = 0, _a = [1, 2, 3, 4, 5, 6]; _i < _a.length; _i++) {
    var i = _a[_i];
    console.log(i);
}
var CONFIGURACION = {
    estado: true,
    audio: 10,
    ultima: "main",
};
// CONFIGURACION = {}; // No se puede hacer
CONFIGURACION.estado = false; // Está permitido
// ********** Templates literales **********
var nombre1 = "John";
var apellido1 = "Doe";
function getNombreCompleto() {
    return nombre1 + " " + apellido1;
}
var informacion = "1. Esta es una l\u00EDnera normal\n2. Hola " + nombre1 + "\n3. Apellido: " + apellido1 + "\n4. Nombre completo: " + getNombreCompleto() + "\n5. 5 + 7 = " + (5 + 7);
console.log(informacion);
