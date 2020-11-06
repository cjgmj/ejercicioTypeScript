// ********** Interfaz básica **********
interface Xmen {
  nombre: string;
  poder: string;
}

function enviarMision(xmen: Xmen) {
  console.log(`Enviando a: ${xmen.nombre}`);
}

function enviarCuartel(xmen: Xmen) {
  console.log(`Enviando al cuartel: ${xmen.nombre}`);
}

let wolverine: Xmen = {
  nombre: "Wolverine",
  poder: "Regeneración",
};

enviarMision(wolverine);
enviarCuartel(wolverine);
