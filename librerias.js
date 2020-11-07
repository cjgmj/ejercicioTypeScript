"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jquery");
console.log("Hola mundo");
$(function () {
    console.log("Página cargada");
    $("h1").text("Hola desde TypeScript");
    $("p").text("Párrafo desde TypeScript");
    $("h1").css("background-color", "red");
});
$("#botAlerta").on("click", function () { return alert("Hola mundo desde TypeScript"); });
