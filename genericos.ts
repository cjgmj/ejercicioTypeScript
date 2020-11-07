// ********** Funciones genéricas **********
function devolver<T>(arg: T) {
  return arg;
}

console.log(devolver(15.456789).toFixed(2));
console.log(devolver("John Doe").charAt(0));
console.log(devolver(new Date()).getTime());

function functionGenerica<T>(arg: T) {
  return arg;
}

type Heroe = {
  nombre: string;
  nombreReal: string;
};

type Villano = {
  nombre: string;
  poder: string;
};

let deadpool = {
  nombre: "Deadpool",
  nombreReal: "Wade Winston Wilson",
  poder: "Regeneración",
};

console.log(functionGenerica<Heroe>(deadpool));
console.log(functionGenerica<Villano>(deadpool));

// ********** Arrays genéricos **********
let heroes: Array<string> = ["Flash", "Batman", "Superman"];

let villanos: string[] = ["Lex Luthor", "Joker"];

export {};
