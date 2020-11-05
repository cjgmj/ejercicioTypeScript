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
    // ********** Métodos públicos **********
    // Si no se especifica por defecto son públicos
    Avenger.prototype.bio = function () {
        var mensaje = this.nombre + " " + this.nombreReal + " " + this.equipo;
        console.log(mensaje);
    };
    Avenger.prototype.cambiaEquipoPublico = function (nuevoEquipo) {
        return this.cambiarEquipo(nuevoEquipo); // Si no se pone el this busca una función dentro de este scope
    };
    // ********** Métodos protegidos **********
    Avenger.prototype.sumarPeleaGanada = function () {
        this.peleasGanadas++;
    };
    // ********** Métodos privados **********
    Avenger.prototype.cambiarEquipo = function (nuevoEquipo) {
        if (nuevoEquipo === this.equipo) {
            return false;
        }
        this.equipo = nuevoEquipo;
        return true;
    };
    return Avenger;
}());
var antman = new Avenger("Antman", "cap", "Scott Lang");
antman.bio();
console.log(antman.cambiaEquipoPublico("cap"));
console.log(antman);
