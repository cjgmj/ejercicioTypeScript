console.log("Hola mundo");

// ********** Booleans **********
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

// ********** Numbers **********
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

// ********** Strings **********
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

// ********** Any **********
// Pueden ser cualquier tipo, cuando las variables no tienen valor y tampoco se
// indica un tipo, por defecto todas son tipo any
let vengador: any;
let existe;
let derrotas;

vengador = "Dr. Strange";

console.log(vengador.charAt(0));

vengador = 150.5555;

console.log(vengador.toFixed(2)); // Redondea el valor

vengador = true;

console.log(vengador);
console.log(existe); // Por defecto tiene valor undefined
console.log(derrotas); // Por defecto tiene valor undefined

// ********** Arrays **********
let array: number[] = [1, 23, 4, 5, 6, 7];
let villanosList: string[] = ["Cráneo rojo", "Dormammu", "Duende Verde"];

console.log(villanosList[0].charAt(0));
