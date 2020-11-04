// ********** Funciones básicas **********
let heroe: string = "Flash";

function imprimeHeroe(): string {
  return heroe;
}

let activarBatisenal = function () {
  return "Bati-señal activada";
};

console.log(imprimeHeroe());
console.log(activarBatisenal());

// ********** Parámetros obligatorios **********
function nombreCompleto(nombre: string, apellido: string): string {
  return `${nombre} ${apellido}`;
}

let nombre = nombreCompleto("John", "Doe");

console.log(nombre);

export {};
