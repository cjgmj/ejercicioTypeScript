// ********** Crear un Namespace **********
namespace Validaciones {
  // Con el export se indica que las funciones podrán ser utilizadas fuera del Namespace
  export function validarTexto(texto: string): boolean {
    if (texto.length > 3) {
      return true;
    }

    return false;
  }

  export function validarFecha(fecha: Date): boolean {
    if (isNaN(fecha.valueOf())) {
      return false;
    }

    return true;
  }
}

console.log(Validaciones.validarTexto("Barry Allen"));
console.log(Validaciones.validarTexto("All"));

let hoy = new Date();

console.log(Validaciones.validarFecha(hoy));

// ********** Múltiples namespaces **********

// Solución importando el archivo en el HTML
// if (ValidacionesMultiple.validarTexto("Barry Allen")) {
//   console.log("El texto es válido");
// } else {
//   console.log("El texto no es válido");
// }

// Otra solución es ejecutar en terminal el comando tsc --outFile build/app.js /validaciones/fechas.ts /validaciones/textos.ts
// e importar un único js en el HMTL.
