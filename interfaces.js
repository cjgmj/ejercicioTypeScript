"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function enviarMision(xmen) {
    console.log("Enviando a: " + xmen.nombre);
    xmen.regenerar("Logan");
}
function enviarCuartel(xmen) {
    console.log("Enviando al cuartel: " + xmen.nombre);
}
var wolverine = {
    nombre: "Wolverine",
    regenerar: function (x) {
        console.log("Se ha regenerado " + x);
    },
};
enviarMision(wolverine);
enviarCuartel(wolverine);
// ********** Interfaces en las clases **********
var Mutante = /** @class */ (function () {
    function Mutante() {
    }
    Mutante.prototype.regenerar = function (nombre) {
        console.log(nombre + " regenerado");
    };
    return Mutante;
}());
var wolverineC = new Mutante();
wolverineC.regenerar("Wolverine");
var sumar = function (a, b) { return a + b; };
var restar = function (a, b) { return a - b; };
