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
  // Comprueba que el apellido existe
  if (apellido) {
    return `${nombre} ${apellido}`;
  }

  return `${nombre}`;
}

let nombreOpcional = nombreCompletoOpcional("John");

console.log(nombreOpcional);

// ********** Parámetros por defecto **********
function nombreCompletoDefault(
  nombre: string,
  apellido: string,
  capitalizado: boolean = false
): string {
  if (capitalizado) {
    return `${capitalizar(nombre)} ${capitalizar(apellido)}`;
  }

  return `${nombre} ${apellido}`;
}

let nombreDefault = nombreCompletoDefault("john", "doe");
let nombreCapitalizado = nombreCompletoDefault("john", "doe", true);

console.log(nombreDefault);
console.log(nombreCapitalizado);

function capitalizar(palabra: string): string {
  return `${palabra.charAt(0).toUpperCase()}${palabra
    .substring(1)
    .toLowerCase()}`;
}

export {};
