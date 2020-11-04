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

// ********** Parámetros opcionales **********
// Indicamos que un parámetro es opcional con ? detrás del nombre del argumento
function nombreCompletoOpcional(nombre: string, apellido?: string): string {
  if (apellido) {
    // Comprueba que el apellido existe
    return `${nombre} ${apellido}`;
  }

  return `${nombre}`;
}

let nombreOpcional = nombreCompletoOpcional("John");

console.log(nombreOpcional);

export {};
