console.log("Hola mundo");

// Booleans
let esSuperman: boolean = true;
let esBatman: boolean;
let esIronman = true; // No recomendada
let esSpiderman: Boolean; // Interfaz

if (esSuperman) {
  console.log("Estamos salvados");
} else {
  console.log("Oops");
}

// esSuperman = false;
esSuperman = convertirClark();

function convertirClark() {
  return false;
}
