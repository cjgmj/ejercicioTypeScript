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
// ********** Funciones de flecha **********
// function sumar(a:number, b:number): number {
//     return a + b;
// }
// Es igual que la función comentada
var sumar = function (a, b) { return a + b; };
console.log(sumar(2, 2));
// function darOrdenHulk(orden: string): string {
//   return `Hulk ${orden}`;
// }
var darOrdenHulk = function (orden) { return "Hulk " + orden; };
console.log(darOrdenHulk("golpea"));
var capitanAmerica = {
    nombre: "Hulk",
    darOrdenHulk: function () {
        var _this = this;
        // setTimeout(function () {
        //   console.log(`${this.nombre} golpea`); // El this cambia de scope apuntando al objeto global
        // }, 1000);
        // Las funciones de flecha no cambian el objeto this, this va a apuntar al scope superior
        setTimeout(function () { return console.log(_this.nombre + " golpea"); }, 1000);
    },
};
capitanAmerica.darOrdenHulk();
// ********** Destructuración de objetos **********
var avengersOb = {
    nick: "Samuel L. Jackson",
    ironman: "Robert Downey Jr.",
    vision: "Paul Bettany",
};
// let nickFromObject = avengersOb.nick;
// let ironmanFromObject = avengersOb.ironman;
// let visionFromObject = avengersOb.vision;
var nickFromObject = avengersOb.nick, ironmanFromObject = avengersOb.ironman, visionFromObject = avengersOb.vision;
console.log(nickFromObject);
console.log(ironmanFromObject);
console.log(visionFromObject);
// console.log(thorFromObject);
// ********** Destructuración de arrays **********
var avengersArr = ["Samuel L. Jackson", "Robert Downey Jr.", "Paul Bettany"];
// let [avenger1, avenger2, avenger3] = avengersArr;
var avenger1 = avengersArr[0], avenger3 = avengersArr[2]; // Obtener los valores del 1 y el 3
console.log(avenger1);
// console.log(avenger2);
console.log(avenger3);
// ********** Ciclo for of **********
var thorArr = {
    nombre: "Thor",
    arma: "Mjolnir",
};
var ironmanArr = {
    nombre: "Ironman",
    arma: "Armorsuit",
};
var capitanAmericaArr = {
    nombre: "Capitán América",
    arma: "Escudo",
};
var avengersForOf = [thorArr, ironmanArr, capitanAmericaArr];
// for (let i = 0; i < avengersForOf.length; i++) {
//   let avenger = avengersForOf[i];
//   console.log(avenger.nombre, avenger.arma);
// }
for (var _b = 0, avengersForOf_1 = avengersForOf; _b < avengersForOf_1.length; _b++) {
    var avenger = avengersForOf_1[_b];
    console.log(avenger.nombre, avenger.arma);
}
