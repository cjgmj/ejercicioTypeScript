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
