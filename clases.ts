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
}

let antman: Avenger = new Avenger("Antman", "cap", "Scott Lang");

console.log(antman);

export {};
