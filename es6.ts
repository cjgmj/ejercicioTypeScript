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
