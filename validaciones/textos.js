"use strict";
var ValidacionesMultiple;
(function (ValidacionesMultiple) {
    function validarTexto(texto) {
        if (texto.length > 3) {
            return true;
        }
        return false;
    }
    ValidacionesMultiple.validarTexto = validarTexto;
})(ValidacionesMultiple || (ValidacionesMultiple = {}));
