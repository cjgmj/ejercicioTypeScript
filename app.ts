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

// Strings
let batman: string = "Batman";
let superman: string = "Superman";
let aquaman: string = `Aquaman`;
let joker = "Joker"; // No recomendada
let wonderWoman: String; // Interfaz

console.log(batman);
console.log(superman);
console.log(aquaman);

let concatenar: string =
  "Los héroes son: " + batman + ", " + superman + " y " + aquaman;

// La mejor manera para concatenar son los templates literales
let concat: string = `Los héros son: ${batman}, ${superman} y ${aquaman}`;

console.log(concat);

// Any
