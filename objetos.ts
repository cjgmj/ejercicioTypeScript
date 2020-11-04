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
