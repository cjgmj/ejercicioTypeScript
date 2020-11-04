"use strict";
// ********** Objetos básicos **********
var flash = {
    nombre: "Barry Allen",
    edad: 24,
    poderes: ["Velocidad", "Viajar en el tiempo"],
};
// flash.padres = []; // No podemos añadir nuevas propiedades
// flash = {}; // No podemos definirlo como vacío porque espera las propiedades con las que se creó
flash = {
    nombre: "Clark Kent",
    edad: 500,
    poderes: ["Volar"],
};
// ********** Tipos específicos **********
var persona = {
    nombre: "John",
    apellido: "Doe",
    edad: 33,
};
// ********** Métodos en los objetos **********
var personaMetodo = {
    nombre: "John",
    apellido: "Doe",
    edad: 33,
    getNombre: function () {
        return this.nombre;
    },
};
var per1 = {
    nombre: "John",
    apellido: "Doe",
    edad: 33,
    getNombre: function () {
        return this.nombre;
    },
};
// ********** Múltiples tipos permitidos **********
// Para indicar que una variable puede tener varios tipos usamos
// | entre los tipos
var arg = true;
arg = 10;
arg = "John";
