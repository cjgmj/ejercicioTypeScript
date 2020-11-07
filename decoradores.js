"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// ********** Decoradores de clase **********
function consola(constructor) {
    console.log(constructor);
}
// ********** Decoradores de fábrica **********
function imprimirConsola(imprimir) {
    if (imprimir) {
        return consola;
    }
    return null;
}
// @consola
var Villano = /** @class */ (function () {
    function Villano(nombre) {
        this.nombre = nombre;
    }
    Villano = __decorate([
        imprimirConsola(true)
    ], Villano);
    return Villano;
}());
// ********** Ejemplo decorador **********
function planVillano(constructor) {
    constructor.prototype.imprimirPlan = function () {
        console.log("El plan de " + this.nombre + " es dominar el mundo");
    };
}
// ********** Decoradores anidados **********
function imprimible(constructor) {
    constructor.prototype.imprimir = function () {
        console.log(this);
    };
}
var VillanoD = /** @class */ (function () {
    function VillanoD(nombre) {
        this.nombre = nombre;
    }
    VillanoD = __decorate([
        imprimible,
        planVillano
    ], VillanoD);
    return VillanoD;
}());
var lex = new VillanoD("Lex Luthor");
lex.imprimirPlan();
lex.imprimir();
// ********** Decoradores de métodos **********
function editable(esEditable) {
    return function (target, nombrePropiedad, descriptor) {
        if (!esEditable) {
            console.warn("No cambiaré de opinion");
        }
        descriptor.writable = esEditable;
    };
}
var VillanoM = /** @class */ (function () {
    function VillanoM(nombre) {
        this.nombre = nombre;
    }
    VillanoM.prototype.plan = function () {
        console.log("Dominar el mundo");
    };
    __decorate([
        editable(false)
    ], VillanoM.prototype, "plan", null);
    return VillanoM;
}());
var lexM = new VillanoM("Lex Luthor");
// // Da error con @editable(false)
// lexM.plan = function () {
//   console.log("Cortar flores");
// };
lexM.plan();
