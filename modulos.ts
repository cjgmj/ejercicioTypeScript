// import { PI } from "./validaciones/numerosM";

// ********** Default **********
// "numeros" apunta a la función restar
import numeros from "./validaciones/numerosM";

// ********** Alias **********
import * as textos from "./validaciones/textosM";

// console.log(PI);
console.log(numeros(10, 5));
console.log(textos.obtenerError(0));
