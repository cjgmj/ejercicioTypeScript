"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
// ********** Decoradores de propiedades **********
function editableProp(esEditable) {
    return function (target, nombrePropiedad) {
        var descriptor = {
            writable: esEditable,
        };
        return descriptor;
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
        editableProp(true)
    ], VillanoM.prototype, "nombre", void 0);
    __decorate([
        editable(false)
    ], VillanoM.prototype, "plan", null);
    return VillanoM;
}());
var lexM = new VillanoM("Lex Luthor");
console.log(lexM);
// // Da error con @editable(false)
// lexM.plan = function () {
//   console.log("Cortar flores");
// };
lexM.plan();
// // Da error con @editableProp(false)
// lexM.nombre = "Lex";
// console.log(lexM);
// ********** Decoradores de parámetros **********
function parametro(target, metodo, index) {
    console.log(target, metodo, index);
}
var VillanoP = /** @class */ (function () {
    function VillanoP(nombre) {
        this.nombre = nombre;
    }
    VillanoP.prototype.imprimir = function (plan, mensaje) {
        if (plan) {
            console.log("El plan es: " + mensaje);
        }
        else {
            console.log(mensaje);
        }
    };
    __decorate([
        __param(1, parametro)
    ], VillanoP.prototype, "imprimir", null);
    return VillanoP;
}());
var lexP = new Villano("Lex Luthor");
