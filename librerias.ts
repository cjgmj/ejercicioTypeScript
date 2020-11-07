import "jquery";
import Swal from "sweetalert2";

console.log("Hola mundo");

$(() => {
  console.log("Página cargada");

  $("h1").text("Hola desde TypeScript");
  $("p").text("Párrafo desde TypeScript");

  $("h1").css("background-color", "red");
});

$("#botAlerta").on("click", () =>
  // alert("Hola mundo desde TypeScript")
  Swal.fire("Good job!", "You clicked the button!", "success")
);
