// ********** Interfaz básica **********
interface Xmen {
  nombre: string;

  // ********** Propiedad opcional **********
  poder?: string;

  // ********** Métodos en la interfaz **********
  regenerar(nombreReal: string): void;
  //   regenerar?(nombreReal: string): void; // Método opcional
}

function enviarMision(xmen: Xmen) {
  console.log(`Enviando a: ${xmen.nombre}`);

  xmen.regenerar("Logan");
}

function enviarCuartel(xmen: Xmen) {
  console.log(`Enviando al cuartel: ${xmen.nombre}`);
}

let wolverine: Xmen = {
  nombre: "Wolverine",
  regenerar(x: string) {
    console.log(`Se ha regenerado ${x}`);
  },
};

enviarMision(wolverine);
enviarCuartel(wolverine);
