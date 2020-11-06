"use strict";
// Base
function conducirBatimovil(auto) {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelerar();
}
var batimovil = {
    encender: false,
    velocidadMaxima: 0,
    acelerar: function () {
        console.log("...... run!!!");
    },
};
var guason = {
    reir: true,
    comer: true,
    llorar: false,
};
function reir(guason) {
    if (guason.reir) {
        console.log("JAJAJAJA");
    }
}
var ciudadGotica = function (ciudadanos) {
    return ciudadanos.length;
};
var PersonaClass = /** @class */ (function () {
    function PersonaClass(nombre, edad, sexo, estadoCivil) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.estadoCivil = estadoCivil;
    }
    PersonaClass.prototype.imprimirBio = function () {
        console.log(this.nombre + " tiene " + this.edad + " y est\u00E1 " + this.estadoCivil);
    };
    return PersonaClass;
}());
