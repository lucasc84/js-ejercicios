// Ejemplo con getElementsByClassName
let paises = document.getElementsByClassName("paises");
console.log(paises[0].innerHTML); // Muestra "AR"
console.log(paises[1].innerHTML); // Muestra "CL"
console.log(paises[2].innerHTML); // Muestra "UY"

// Ejemplo con getElementsByTagName
let contenedores = document.getElementsByTagName("div");
console.log(contenedores[0].innerHTML); // Muestra "CONTENEDOR 2"
console.log(contenedores[1].innerHTML); // Muestra "CONTENEDOR 3"

// Ejemplo con getElementById
let parrafo1 = document.getElementById("parrafo1");
console.log(parrafo1.innerHTML); // Muestra "Hola Mundo"

let parrafo2 = document.getElementById("parrafo2");
console.log(parrafo2.innerHTML); // Muestra "Hola Mundo" lo llamo derecho aunque está dentro de un div

// Ejemplo con querySelector

// Seleccionar un elemento por clase
let elementoPorClase = document.querySelector(".texto");
console.log(elementoPorClase.innerHTML); // Muestra "Texto 1"

// Seleccionar un elemento por ID
let elementoPorId = document.querySelector("#parrafo1");
console.log(elementoPorId.innerHTML); // Muestra "Hola Mundo"

// Seleccionar un elemento por etiqueta
let elementoPorEtiqueta = document.querySelector("h1");
console.log(elementoPorEtiqueta.innerHTML); // Muestra "Acceso al DOM"

// Ejemplo con querySelectorAll
let textos = document.querySelectorAll(".texto"); // Selecciona todos los elementos con la clase "texto"
textos.forEach((texto, index) => {
    console.log(`Texto ${index + 1}: ${texto.innerHTML}`);
});
// Muestra:
// Texto 1: Texto 1
// Texto 2: Texto 2
// Texto 3: Texto 3


// Seleccionar todos los elementos que coincidan con clase, ID y etiqueta
let elementosMixtos = document.querySelectorAll(".texto, #parrafo1, h1");
elementosMixtos.forEach((elemento, index) => {
    console.log(`Elemento ${index + 1}: ${elemento.innerHTML}`);
});
// Muestra:
// Elemento 1: Texto 1
// Elemento 2: Texto 2
// Elemento 3: Texto 3
// Elemento 4: Hola Mundo
// Elemento 5: Acceso al DOM