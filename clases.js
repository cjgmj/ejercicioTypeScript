"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ********** Clases básicas **********
var Avenger = /** @class */ (function () {
    // ********** Constructores **********
    function Avenger(nombre, equipo, nombreReal) {
        // ********** Propiedades públicas **********
        // Si no se especifica por defecto son públicas
        this.nombre = "";
        // ********** Propiedades protegidas **********
        this.equipo = "";
        // ********** Propiedades privadas **********
        this.nombreReal = "";
        this.puedePelear = false;
        this.peleasGanadas = 0;
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
    return Avenger;
}());
var antman = new Avenger("Antman", "cap", "Scott Lang");
console.log(antman);
