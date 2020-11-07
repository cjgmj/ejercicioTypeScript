// ********** Decoradores de clase **********
function consola(constructor: Function): void {
  console.log(constructor);
}

// ********** Decoradores de fábrica **********
function imprimirConsola(imprimir: boolean): Function {
  if (imprimir) {
    return consola;
  }

  return null;
}

// @consola
@imprimirConsola(true)
class Villano {
  constructor(public nombre: string) {}
}

export {};
