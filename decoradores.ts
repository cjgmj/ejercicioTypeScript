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

// ********** Ejemplo decorador **********
function planVillano(constructor: Function) {
  constructor.prototype.imprimirPlan = function () {
    console.log(`El plan de ${this.nombre} es dominar el mundo`);
  };
}

@planVillano
class VillanoD {
  constructor(public nombre: string) {}
}

let lex = new VillanoD("Lex Luthor");

(<any>lex).imprimirPlan();

export {};
