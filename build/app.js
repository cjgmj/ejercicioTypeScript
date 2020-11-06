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
