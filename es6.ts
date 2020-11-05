// ********** Variables LET **********
var nombre = "Tony";

if (true) {
  var nombre = "Bruce";
}

console.log(nombre);

// Al crear una variable con let la crea en un scope específico
let nombre2 = "Tony";

if (true) {
  let nombre2 = "Bruce";
  //   nombre2 = "Bruce"; // Cambia el calor de la variable
}

console.log(nombre2);

// ********** Variables CONST **********
// Son variable que no pueden mutar una vez definidas
// Generalmente las constantes van en mayúsculas
const OPCIONES: string = "Activo";

// const OPCIONES: string; // No se puede definir sin valor
// OPCIONES = "Desactivado"; // No se puede hacer

if (true) {
  const OPCIONES: string = "Desactivado"; // Lo permite al estar en otro scope
}

for (const i of [1, 2, 3, 4, 5, 6]) {
  console.log(i);
}

const CONFIGURACION = {
  estado: true,
  audio: 10,
  ultima: "main",
};

// CONFIGURACION = {}; // No se puede hacer

CONFIGURACION.estado = false; // Está permitido

// ********** Templates literales **********
let nombre1: string = "John";
let apellido1: string = "Doe";

function getNombreCompleto(): string {
  return `${nombre1} ${apellido1}`;
}

let informacion: string = `1. Esta es una línera normal
2. Hola ${nombre1}
3. Apellido: ${apellido1}
4. Nombre completo: ${getNombreCompleto()}
5. 5 + 7 = ${5 + 7}`;

console.log(informacion);

// ********** Funciones de flecha **********
// function sumar(a:number, b:number): number {
//     return a + b;
// }

// Es igual que la función comentada
const sumar = (a: number, b: number): number => a + b;

console.log(sumar(2, 2));

// function darOrdenHulk(orden: string): string {
//   return `Hulk ${orden}`;
// }

const darOrdenHulk = (orden: string): string => `Hulk ${orden}`;

console.log(darOrdenHulk("golpea"));

let capitanAmerica = {
  nombre: "Hulk",
  darOrdenHulk: function () {
    // setTimeout(function () {
    //   console.log(`${this.nombre} golpea`); // El this cambia de scope apuntando al objeto global
    // }, 1000);
    // Las funciones de flecha no cambian el objeto this, this va a apuntar al scope superior
    setTimeout(() => console.log(`${this.nombre} golpea`), 1000);
  },
};

capitanAmerica.darOrdenHulk();

// ********** Destructuración de objetos **********
let avengersOb = {
  nick: "Samuel L. Jackson",
  ironman: "Robert Downey Jr.",
  vision: "Paul Bettany",
};

// let nickFromObject = avengersOb.nick;
// let ironmanFromObject = avengersOb.ironman;
// let visionFromObject = avengersOb.vision;

let {
  nick: nickFromObject,
  ironman: ironmanFromObject,
  vision: visionFromObject,
  //   thorFromObject = "Chris Hemsworth", // Válido para ES6
} = avengersOb;

console.log(nickFromObject);
console.log(ironmanFromObject);
console.log(visionFromObject);
// console.log(thorFromObject);

// ********** Destructuración de arrays **********
let avangersArr = ["Samuel L. Jackson", "Robert Downey Jr.", "Paul Bettany"];

// let [avanger1, avanger2, avanger3] = avangersArr;
let [avanger1, , avanger3] = avangersArr; // Obtener los valores del 1 y el 3

console.log(avanger1);
// console.log(avanger2);
console.log(avanger3);
