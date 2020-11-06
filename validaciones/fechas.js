"use strict";
var ValidacionesMultiple;
(function (ValidacionesMultiple) {
    function validarFecha(fecha) {
        if (isNaN(fecha.valueOf())) {
            return false;
        }
        return true;
    }
    ValidacionesMultiple.validarFecha = validarFecha;
})(ValidacionesMultiple || (ValidacionesMultiple = {}));
