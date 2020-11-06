// ********** Clases básicas **********
class Avenger {
  // ********** Propiedades públicas **********
  // Si no se especifica por defecto son públicas
  public nombre: string = "";

  // ********** Propiedades protegidas **********
  protected equipo: string = "";

  // ********** Propiedades privadas **********
  private nombreReal: string = "";

  private puedePelear: boolean = false;
  private peleasGanadas: number = 0;

  // ********** Constructores **********
  constructor(nombre: string, equipo: string, nombreReal: string) {
    this.nombre = nombre;
    this.equipo = equipo;
    this.nombreReal = nombreReal;
  }
  // ********** Métodos públicos **********
  // Si no se especifica por defecto son públicos
  public bio(): void {
    let mensaje: string = `${this.nombre} ${this.nombreReal} ${this.equipo}`;

    console.log(mensaje);
  }

  public cambiaEquipoPublico(nuevoEquipo: string): boolean {
    return this.cambiarEquipo(nuevoEquipo); // Si no se pone el this busca una función dentro de este scope
  }

  // ********** Métodos protegidos **********
  protected sumarPeleaGanada(): void {
    this.peleasGanadas++;
  }

  // ********** Métodos privados **********
  private cambiarEquipo(nuevoEquipo: string): boolean {
    if (nuevoEquipo === this.equipo) {
      return false;
    }

    this.equipo = nuevoEquipo;
    return true;
  }
}

let antman: Avenger = new Avenger("Antman", "cap", "Scott Lang");
antman.bio();
console.log(antman.cambiaEquipoPublico("cap"));

console.log(antman);

// ********** Herencia, super y definir propiedades en el constructor **********
class AvengerH {
  // Definir propiedades en el constructor
  constructor(public nombre: string, private nombreReal: string) {
    console.log("Constructor AvengerH");
  }

  protected getNombre(): string {
    console.log("getNombre AvengerH (protected)");
    return this.nombre;
  }
}

class Xmen extends AvengerH {
  constructor(nombre: string, nombreReal: string) {
    console.log("Constructor Xmen");
    super(nombre, nombreReal);
  }

  public getNombre(): string {
    console.log("getNombre Xmen (public)");
    return super.getNombre();
  }
}

let ciclopeH: Xmen = new Xmen("Cíclope", "Scott");

console.log(ciclopeH);
console.log(ciclopeH.getNombre());

// ********** Gets y Sets **********
class AvengerGS {
  private _nombre: string | undefined;

  constructor(nombre?: string) {
    this._nombre = nombre;
  }

  get nombre(): string {
    if (this._nombre) {
      return this._nombre;
    }

    return "No tiene nombre";
  }

  set nombre(nombre: string) {
    if (nombre.length <= 3) {
      console.error("El nombre tiene que tener más de tres caracteres");
      return;
      // throw new Error("El nombre tiene que tener más de tres caracteres");
    }

    this._nombre = nombre;
  }
}

let ciclopeGS: AvengerGS = new AvengerGS();

console.log(ciclopeGS.nombre);

ciclopeGS.nombre = "Cíclope";

console.log(ciclopeGS.nombre);

ciclopeGS.nombre = "Lee";

console.log(ciclopeGS.nombre);

// ********** Métodos y propiedades estáticos **********
class XmenE {
  static nombre: String = "Wolverine";

  constructor() {}

  static crearXmen(): XmenE {
    console.log("Se creó un xmen estátiico");
    return new XmenE();
  }
}

let wolverineE = XmenE.crearXmen();

console.log(XmenE.nombre);
console.log(wolverineE);

// ********** Clases abstractas **********
abstract class Mutantes {
  constructor(public nombre: String, public nombreReal: string) {}
}

class XmenA extends Mutantes {}

let wolverineA = new XmenA("Wolverine", "Logan");

console.log(wolverineA);

// ********** Constructores privados (Singleton) **********
class Apocalipsis {
  static instancia: Apocalipsis;

  private constructor(public nombre: String) {}

  static llamarApocalipsis() {
    if (!Apocalipsis.instancia) {
      Apocalipsis.instancia = new Apocalipsis("Apocalipsis (único)");
    }

    return Apocalipsis.instancia;
  }
}

// let apocalipsisFalso = new Apocalipsis("Apocalipsis (falso)"); // No se puede
let apocalipsisReal = Apocalipsis.llamarApocalipsis();

console.log(apocalipsisReal);

export {};
