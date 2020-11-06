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

// ********** Interfaces en las clases **********
class Mutante implements Xmen {
  nombre!: string;
  poder?: string | undefined;

  regenerar(nombre: string): void {
    console.log(`${nombre} regenerado`);
  }
}

let wolverineC = new Mutante();

wolverineC.regenerar("Wolverine");

// ********** Interfaces para las funciones **********
interface DosNumerosFunc {
  (num1: number, num2: number): number;
}

let sumar: DosNumerosFunc = (a: number, b: number): number => a + b;

let restar: DosNumerosFunc = (a: number, b: number): number => a - b;

export {};
