"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ********** Clases básicas **********
var Avenger = /** @class */ (function () {
    // ********** Constructores **********
    function Avenger(nombre, equipo, nombreReal) {
        this.nombre = "";
        this.equipo = "";
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
