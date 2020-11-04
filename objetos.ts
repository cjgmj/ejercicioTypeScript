// ********** Objetos básicos **********
let flash = {
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
let persona: {
  apellido: string;
  edad: number;
  nombre: string;
} = {
  nombre: "John",
  apellido: "Doe",
  edad: 33,
};

// ********** Métodos en los objetos **********
let personaMetodo: {
  apellido: string;
  edad: number;
  nombre: string;
  getNombre: () => string;
} = {
  nombre: "John",
  apellido: "Doe",
  edad: 33,
  getNombre() {
    return this.nombre;
  },
};

// ********** Tipos personalizados **********
type Persona = {
  apellido: string;
  nombre: string;
  edad: number;
  getNombre: () => string;
};

let per1: Persona = {
  nombre: "John",
  apellido: "Doe",
  edad: 33,
  getNombre() {
    return this.nombre;
  },
};

// ********** Múltiples tipos permitidos **********
// Para indicar que una variable puede tener varios tipos usamos
// | entre los tipos
let arg: boolean | number | string = true;

arg = 10;

arg = "John";

// ********** Revisar tipo **********
let algo: any = 123;

algo = "Hola";

algo = function () {
  return null;
};

console.log(typeof algo === "number");

if (typeof algo === "number") {
  console.log("Es un número");
} else {
  console.log("No es un número");
}
