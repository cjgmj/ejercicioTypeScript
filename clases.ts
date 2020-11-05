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

export {};
