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
