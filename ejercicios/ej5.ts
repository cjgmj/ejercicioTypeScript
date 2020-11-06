// Base

// // Crear interfaces

// // Cree una interfaz para validar el auto (el valor enviado por parametro)
// function conducirBatimovil( auto ):void{
//     auto.encender = true;
//     auto.velocidadMaxima = 100;
//     auto.acelear();
//   }

//   let batimovil = {
//     encender:false,
//     velocidadMaxima:0,
//     acelear(){
//       console.log("...... run!!!");
//     }
//   }

//   // Cree una interfaz con que permita utilzar el siguiente objeto
//   // utilizando propiedades opcionales

//   let guason = {
//     reir: true,
//     comer:true,
//     llorar:false
//   }

//   function reir( guason ):void{
//     if( guason.reir ){
//       console.log("JAJAJAJA");
//     }
//   }

//   // Cree una interfaz para la siguiente funcion

//   function ciudadGotica( ciudadanos:string[] ):number{
//     return ciudadanos.length;
//   }

//   // Cree una interfaz que obligue crear una clase
//   // con las siguientes propiedades y metodos

//   /*
//     propiedades:
//       - nombre
//       - edad
//       - sexo
//       - estadoCivil
//       - imprimirBio(): void // en consola una breve descripcion.
//   */

// Solución
// Crear interfaces

// Cree una interfaz para validar el auto (el valor enviado por parametro)
interface Auto {
  encender: boolean;
  velocidadMaxima: number;
  acelerar(): void;
}

function conducirBatimovil(auto: Auto): void {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelerar();
}

let batimovil: Auto = {
  encender: false,
  velocidadMaxima: 0,
  acelerar() {
    console.log("...... run!!!");
  },
};

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales
interface Guason {
  reir: boolean;
  comer?: boolean;
  llorar?: boolean;
}

let guason: Guason = {
  reir: true,
  comer: true,
  llorar: false,
};

function reir(guason: Guason): void {
  if (guason.reir) {
    console.log("JAJAJAJA");
  }
}

// Cree una interfaz para la siguiente funcion
interface ciudadGoticaFunc {
  (ciudadanos: string[]): number;
}

let ciudadGotica: ciudadGoticaFunc = (ciudadanos: string[]): number =>
  ciudadanos.length;

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

/*
    propiedades:
      - nombre
      - edad
      - sexo
      - estadoCivil
      - imprimirBio(): void // en consola una breve descripcion.
  */

interface PersonaInterface {
  nombre: string;
  edad: number;
  sexo: string;
  estadoCivil: string;
  imprimirBio(): void;
}

class PersonaClass implements PersonaInterface {
  nombre: string;
  edad: number;
  sexo: string;
  estadoCivil: string;

  constructor(nombre: string, edad: number, sexo: string, estadoCivil: string) {
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
    this.estadoCivil = estadoCivil;
  }

  imprimirBio() {
    console.log(`${this.nombre} tiene ${this.edad} y está ${this.estadoCivil}`);
  }
}
