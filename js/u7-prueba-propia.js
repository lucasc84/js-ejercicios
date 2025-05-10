let numeroUno = document.querySelector("#uno");
let numeroDos = document.querySelector("#dos");
let numeroTres = document.querySelector("#tres");

let numeroElegido = prompt("Elegí el numero a mostrar:\n1\n2\n3");
let numeroSeleccionado = "";

switch (numeroElegido) {
  case "1":
    numeroSeleccionado = numeroUno.innerText;
    break;
  case "2":
    numeroSeleccionado = numeroDos.innerText;
    break;
  case "3":
    numeroSeleccionado = numeroTres.innerText;
    break;
  default:
    numeroSeleccionado = "número no válido";
    break;
}

console.log("Número elegido: " + numeroSeleccionado);




