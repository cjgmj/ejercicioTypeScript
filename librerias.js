"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("jquery");
var sweetalert2_1 = __importDefault(require("sweetalert2"));
console.log("Hola mundo");
$(function () {
    console.log("Página cargada");
    $("h1").text("Hola desde TypeScript");
    $("p").text("Párrafo desde TypeScript");
    $("h1").css("background-color", "red");
});
$("#botAlerta").on("click", function () {
    // alert("Hola mundo desde TypeScript")
    return sweetalert2_1.default.fire("Good job!", "You clicked the button!", "success");
});
