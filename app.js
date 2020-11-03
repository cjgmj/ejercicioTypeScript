"use strict";
console.log("Hola mundo");
// Booleans
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
// Numbers
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
// Strings
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
// Any
