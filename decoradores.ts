// ********** Decoradores de clase **********
function consola(constructor: Function): void {
  console.log(constructor);
}

@consola
class Villano {
  constructor(public nombre: string) {}
}

export {};
