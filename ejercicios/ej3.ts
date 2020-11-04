// Base

// // Objetos
// var batimovil = {
//     carroceria: "Negra",
//     modelo: "6x6",
//     antibalas: true,
//     pasajeros:4
//   };

//   var bumblebee = {
//     carroceria: "Amarillo con negro",
//     modelo: "4x2",
//     antibalas: true,
//     pasajeros:4,
//     disparar(){ // El metodo disparar es opcional
//       console.log("Disparando");
//     }
//   };

//   // Villanos debe de ser un arreglo de objetos personalizados
//   var villanos = [{
//     nombre:"Lex Luthor",
//     edad: 54,
//     mutante:false
//   },{
//     nombre: "Erik Magnus Lehnsherr",
//     edad: 49,
//     mutante: true
//   },{
//     nombre: "James Logan",
//     edad: undefined,
//     mutante: true
//   }];

//   // Multiples tipos
//   // cree dos tipos, uno para charles y otro para apocalipsis
//   var charles = {
//     poder:"psiquico",
//     estatura: 1.78
//   };

//   var apocalipsis = {
//     lider:true,
//     miembros: ["Magneto","Tormenta","Psylocke","Angel"]
//   }

//   // Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
//   var mystique;

//   mystique = charles;
//   mystique = apocalipsis;

// Solución
// Objetos
type Coche = {
  carroceria: string;
  modelo: string;
  antibalas: boolean;
  pasajeros: number;
  disparar?: () => void;
};

let batimovil: Coche = {
  carroceria: "Negra",
  modelo: "6x6",
  antibalas: true,
  pasajeros: 4,
};

let bumblebee: Coche = {
  carroceria: "Amarillo con negro",
  modelo: "4x2",
  antibalas: true,
  pasajeros: 4,
  disparar() {
    // El metodo disparar es opcional
    console.log("Disparando");
  },
};

// Villanos debe de ser un arreglo de objetos personalizados
type Villano = {
  nombre: string;
  edad: number | undefined;
  mutante: boolean;
};

let villanos: Villano[] = [
  {
    nombre: "Lex Luthor",
    edad: 54,
    mutante: false,
  },
  {
    nombre: "Erik Magnus Lehnsherr",
    edad: 49,
    mutante: true,
  },
  {
    nombre: "James Logan",
    edad: undefined,
    mutante: true,
  },
];

// Multiples tipos
// cree dos tipos, uno para charles y otro para apocalipsis
type Charles = {
  poder: string;
  estatura: number;
};

type Apocalipsis = {
  lider: boolean;
  miembros: string[];
};

let charles: Charles = {
  poder: "psiquico",
  estatura: 1.78,
};

let apocalipsis: Apocalipsis = {
  lider: true,
  miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"],
};

// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
let mystique: Charles | Apocalipsis;

mystique = charles;
mystique = apocalipsis;

export {};
