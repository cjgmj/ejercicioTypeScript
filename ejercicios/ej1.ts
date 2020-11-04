// Base

// // Tipos
// var batman = "Bruce";
// var superman = "Clark";

// var existe = false;

// // Tuplas
// var parejaHeroes = [batman, superman];
// var villano = ["Lex Lutor", 5, true];

// // Arreglos
// var aliados = ["Mujer Maravilla", "Acuaman", "San", "Flash"];

// //Enumeraciones
// var fuerzaFlash = 5;
// var fuerzaSuperman = 100;
// var fuerzaBatman = 1;
// var fuerzaAquaman = 0;

// // Retorno de funciones
// function activar_batiseñal() {
//   return "activada";
// }

// function pedir_ayuda() {
//   console.log("Auxilio!!!");
// }

// // Aserciones de Tipo
// var poder = "100";
// var largoDelPoder = poder.length;
// console.log(largoDelPoder);

// Solución
// Tipos
let batman: string = "Bruce";
let superman: string = "Clark";

let existe: boolean = false;

// Tuplas
let parejaHeroes: [string, string] = [batman, superman];
let villano: [string, number, boolean] = ["Lex Lutor", 5, true];

// Arreglos
let aliados: string[] = ["Mujer Maravilla", "Acuaman", "San", "Flash"];

//Enumeraciones
enum Fuerza {
  aquaman = 0,
  batman = 1,
  flash = 5,
  superman = 100,
}

let fuerzaFlash = Fuerza.flash;
let fuerzaSuperman = Fuerza.superman;
let fuerzaBatman = Fuerza.batman;
let fuerzaAquaman = Fuerza.aquaman;

// Retorno de funciones
function activar_batiseñal(): string {
  return "activada";
}

function pedir_ayuda(): void {
  console.log("Auxilio!!!");
}

// Aserciones de Tipo
let poder = "100";
let largoDelPoder: number = (<string>poder).length;
console.log(largoDelPoder);

export {};
