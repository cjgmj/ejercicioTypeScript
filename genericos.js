"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ********** Funciones genéricas **********
function devolver(arg) {
    return arg;
}
console.log(devolver(15.456789).toFixed(2));
console.log(devolver("John Doe").charAt(0));
console.log(devolver(new Date()).getTime());
function functionGenerica(arg) {
    return arg;
}
var deadpool = {
    nombre: "Deadpool",
    nombreReal: "Wade Winston Wilson",
    poder: "Regeneración",
};
console.log(functionGenerica(deadpool));
console.log(functionGenerica(deadpool));
// ********** Arrays genéricos **********
var heroes = ["Flash", "Batman", "Superman"];
var villanos = ["Lex Luthor", "Joker"];
// ********** Clases genéricas **********
var Cuadrado = /** @class */ (function () {
    function Cuadrado() {
    }
    Cuadrado.prototype.area = function () {
        return +this.base * +this.altura;
    };
    return Cuadrado;
}());
var cuadrado = new Cuadrado();
cuadrado.base = "10";
cuadrado.altura = 10;
console.log(cuadrado.area());
