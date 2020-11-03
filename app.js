"use strict";
console.log("Hola mundo");
// ********** Booleans **********
var esSuperman = true;
var esBatman;
var esIronman = true; // No recomendada
var esSpiderman; // Interfaz
if (esSuperman) {
    console.log("Estamos salvados");
}
else {
    console.log("Oops");
}
// esSuperman = false;
esSuperman = convertirClark();
function convertirClark() {
    return false;
}
// ********** Numbers **********
// Soportan enteros y números decimales
var avengers = 5;
var villanos;
var otros = 2; // No recomendada
var xmen; // Interfaz
villanos = 3;
if (avengers > villanos) {
    console.log("Estamos salvados");
}
else {
    console.log("Oops");
}
otros = 123;
otros = 123.123;
// ********** Strings **********
var batman = "Batman";
var superman = "Superman";
var aquaman = "Aquaman";
var joker = "Joker"; // No recomendada
var wonderWoman; // Interfaz
console.log(batman);
console.log(superman);
console.log(aquaman);
var concatenar = "Los héroes son: " + batman + ", " + superman + " y " + aquaman;
// La mejor manera para concatenar son los templates literales
var concat = "Los h\u00E9ros son: " + batman + ", " + superman + " y " + aquaman;
console.log(concat);
// ********** Any **********
// Pueden ser cualquier tipo, cuando las variables no tienen valor y tampoco se
// indica un tipo, por defecto todas son tipo any
var vengador;
var existe;
var derrotas;
vengador = "Dr. Strange";
console.log(vengador.charAt(0));
vengador = 150.5555;
console.log(vengador.toFixed(2)); // Redondea el valor
vengador = true;
console.log(vengador);
console.log(existe); // Por defecto tiene valor undefined
console.log(derrotas); // Por defecto tiene valor undefined
// ********** Arrays **********
var array = [1, 23, 4, 5, 6, 7];
var villanosList = ["Cráneo rojo", "Dormammu", "Duende Verde"];
console.log(villanosList[0].charAt(0));
// ********** Tuples **********
// Es un array del cuál sabemos que tipo de dato contendrá cada posición
// y cual es su tamaño total
// let heroe: [string, number] = ["Dr. Strange", 100];
var heroe = ["Dr. Strange", 100, false];
heroe.push(true); // Es válido
// ********** Enums **********
var Volumen;
(function (Volumen) {
    // Sin dar valores
    //   min, // 0
    //   medio, // 1
    //   max, // 2
    // Dando valores
    Volumen[Volumen["min"] = 1] = "min";
    Volumen[Volumen["medio"] = 5] = "medio";
    Volumen[Volumen["max"] = 10] = "max";
})(Volumen || (Volumen = {}));
var audio = Volumen.min;
console.log(audio);
console.log(Volumen);
console.log(Volumen[5]);
console.log(Volumen["medio"]);
// ********** Void **********
function llamarBatman() {
    console.log("Mostrar la Bati-señal");
}
var mensaje = llamarBatman();
// ********** Never **********
// Sirven para hacer puntos críticos en el programa o líneas que nunca deberían suceder
function error(mensaje) {
    throw new Error(mensaje);
}
error("Error crítico");
