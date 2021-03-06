"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// ********** Clases básicas **********
var Avenger = /** @class */ (function () {
    // ********** Constructores **********
    function Avenger(nombre, equipo, nombreReal) {
        // ********** Propiedades públicas **********
        // Si no se especifica por defecto son públicas
        this.nombre = "";
        // ********** Propiedades protegidas **********
        this.equipo = "";
        // ********** Propiedades privadas **********
        this.nombreReal = "";
        this.puedePelear = false;
        this.peleasGanadas = 0;
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
    // ********** Métodos públicos **********
    // Si no se especifica por defecto son públicos
    Avenger.prototype.bio = function () {
        var mensaje = this.nombre + " " + this.nombreReal + " " + this.equipo;
        console.log(mensaje);
    };
    Avenger.prototype.cambiaEquipoPublico = function (nuevoEquipo) {
        return this.cambiarEquipo(nuevoEquipo); // Si no se pone el this busca una función dentro de este scope
    };
    // ********** Métodos protegidos **********
    Avenger.prototype.sumarPeleaGanada = function () {
        this.peleasGanadas++;
    };
    // ********** Métodos privados **********
    Avenger.prototype.cambiarEquipo = function (nuevoEquipo) {
        if (nuevoEquipo === this.equipo) {
            return false;
        }
        this.equipo = nuevoEquipo;
        return true;
    };
    return Avenger;
}());
var antman = new Avenger("Antman", "cap", "Scott Lang");
antman.bio();
console.log(antman.cambiaEquipoPublico("cap"));
console.log(antman);
// ********** Herencia, super y definir propiedades en el constructor **********
var AvengerH = /** @class */ (function () {
    // Definir propiedades en el constructor
    function AvengerH(nombre, nombreReal) {
        this.nombre = nombre;
        this.nombreReal = nombreReal;
        console.log("Constructor AvengerH");
    }
    AvengerH.prototype.getNombre = function () {
        console.log("getNombre AvengerH (protected)");
        return this.nombre;
    };
    return AvengerH;
}());
var Xmen = /** @class */ (function (_super) {
    __extends(Xmen, _super);
    function Xmen(nombre, nombreReal) {
        var _this = this;
        console.log("Constructor Xmen");
        _this = _super.call(this, nombre, nombreReal) || this;
        return _this;
    }
    Xmen.prototype.getNombre = function () {
        console.log("getNombre Xmen (public)");
        return _super.prototype.getNombre.call(this);
    };
    return Xmen;
}(AvengerH));
var ciclopeH = new Xmen("Cíclope", "Scott");
console.log(ciclopeH);
console.log(ciclopeH.getNombre());
// ********** Gets y Sets **********
var AvengerGS = /** @class */ (function () {
    function AvengerGS(nombre) {
        this._nombre = nombre;
    }
    Object.defineProperty(AvengerGS.prototype, "nombre", {
        get: function () {
            if (this._nombre) {
                return this._nombre;
            }
            return "No tiene nombre";
        },
        set: function (nombre) {
            if (nombre.length <= 3) {
                console.error("El nombre tiene que tener más de tres caracteres");
                return;
                // throw new Error("El nombre tiene que tener más de tres caracteres");
            }
            this._nombre = nombre;
        },
        enumerable: false,
        configurable: true
    });
    return AvengerGS;
}());
var ciclopeGS = new AvengerGS();
console.log(ciclopeGS.nombre);
ciclopeGS.nombre = "Cíclope";
console.log(ciclopeGS.nombre);
ciclopeGS.nombre = "Lee";
console.log(ciclopeGS.nombre);
// ********** Métodos y propiedades estáticos **********
var XmenE = /** @class */ (function () {
    function XmenE() {
    }
    XmenE.crearXmen = function () {
        console.log("Se creó un xmen estátiico");
        return new XmenE();
    };
    XmenE.nombre = "Wolverine";
    return XmenE;
}());
var wolverineE = XmenE.crearXmen();
console.log(XmenE.nombre);
console.log(wolverineE);
// ********** Clases abstractas **********
var Mutantes = /** @class */ (function () {
    function Mutantes(nombre, nombreReal) {
        this.nombre = nombre;
        this.nombreReal = nombreReal;
    }
    return Mutantes;
}());
var XmenA = /** @class */ (function (_super) {
    __extends(XmenA, _super);
    function XmenA() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return XmenA;
}(Mutantes));
var wolverineA = new XmenA("Wolverine", "Logan");
console.log(wolverineA);
// ********** Constructores privados (Singleton) **********
var Apocalipsis = /** @class */ (function () {
    function Apocalipsis(nombre) {
        this.nombre = nombre;
    }
    Apocalipsis.llamarApocalipsis = function () {
        if (!Apocalipsis.instancia) {
            Apocalipsis.instancia = new Apocalipsis("Apocalipsis (único)");
        }
        return Apocalipsis.instancia;
    };
    return Apocalipsis;
}());
// let apocalipsisFalso = new Apocalipsis("Apocalipsis (falso)"); // No se puede
var apocalipsisReal = Apocalipsis.llamarApocalipsis();
console.log(apocalipsisReal);
