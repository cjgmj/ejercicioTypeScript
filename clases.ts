// ********** Clases básicas **********
class Avenger {
  nombre: string = "";
  equipo: string = "";
  nombreReal: string = "";

  puedePelear: boolean = false;
  peleasGanadas: number = 0;

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
