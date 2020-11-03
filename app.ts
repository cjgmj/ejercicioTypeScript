console.log("Hola mundo");

// Booleans
let esSuperman: boolean = true;
let esBatman: boolean;
let esIronman = true; // No recomendada
let esSpiderman: Boolean; // Interfaz

if (esSuperman) {
  console.log("Estamos salvados");
} else {
  console.log("Oops");
}

// esSuperman = false;
esSuperman = convertirClark();

function convertirClark() {
  return false;
}

// Numbers
// Soportan enteros y números decimales
let avengers: number = 5;
let villanos: number;
let otros = 2; // No recomendada
let xmen: Number; // Interfaz

villanos = 3;

if (avengers > villanos) {
  console.log("Estamos salvados");
} else {
  console.log("Oops");
}

otros = 123;
otros = 123.123;
