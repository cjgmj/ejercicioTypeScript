// Base

// // Convierta este archivo de ES5 a ES6 - JavaScript 2015
// // OJO: No es a TypeScript, solo JAVASCRIPT

// // ==============================
// //  Spiderman info
// // ==============================
// // Constantes?
// var HEROE = "Spiderman";

// // Declaracion de variables?
// var spiderman = "Peter Parker",
//     venom = "Eddie Brock";

// // Destructuracion de arreglos?
// var versiones = ["Spider-Man 2099","Spider-Girl","Ultimate Spider-Man"];

// var spiderman2099 = versiones[0];
// var spidergirl = versiones[1];
// var ultimate = versiones[2];

// // Destructuracion de objetos?
// var villanos = {
//   venom: "Eddie Brock",
//   carnage: "Cletus Kasady",
//   sandman: "William Baker"
// };

// var venom = villanos.venom;
// var carnage = villanos.carnage;
// var sandman = villanos.sandman;

// // Ciclo for Of?
// for(var i=0; i<= versiones.length - 1; i++){
//   var spider = versiones[i];
//   console.log(spider);
// }

// Solución
// Convierta este archivo de ES5 a ES6 - JavaScript 2015
// OJO: No es a TypeScript, solo JAVASCRIPT

// ==============================
//  Spiderman info
// ==============================
// Constantes?
const HEROE = "Spiderman";

// Declaracion de variables?
let spiderman = "Peter Parker",
  venom = "Eddie Brock";

// Destructuracion de arreglos?
let versiones = ["Spider-Man 2099", "Spider-Girl", "Ultimate Spider-Man"];

let [spiderman2099, spidergirl, ultimate] = versiones;

// Destructuracion de objetos?
let villanos = {
  venom: "Eddie Brock",
  carnage: "Cletus Kasady",
  sandman: "William Baker",
};

let { venom: venomObj, carnage, sandman } = villanos;

// Ciclo for Of?
for (let version of versiones) {
  console.log(version);
}
