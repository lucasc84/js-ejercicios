// Ejemplo con getElementsByClassName
// Definición: Selecciona todos los elementos que tienen una clase específica.
// En este código: Selecciona los elementos con la clase "paises" y muestra su contenido.
let paises = document.getElementsByClassName("paises");
console.log(paises[0].innerHTML); // Muestra "AR"
console.log(paises[1].innerHTML); // Muestra "CL"
console.log(paises[2].innerHTML); // Muestra "UY"
console.log(paises[0,1,2].innerHTML); // Muestra "UY"

// Ejemplo con getElementsByTagName
// Definición: Selecciona todos los elementos que tienen una etiqueta específica.
// En este código: Selecciona todos los elementos <div> y muestra su contenido.
let contenedores = document.getElementsByTagName("div");
console.log(contenedores[0].innerHTML); // Muestra "CONTENEDOR 2"
console.log(contenedores[1].innerHTML); // Muestra "CONTENEDOR 3"

// Ejemplo con getElementById
// Definición: Selecciona un único elemento que tiene un ID específico.
// En este código: Selecciona los elementos con los IDs "parrafo1" y "parrafo2" y muestra su contenido.
let parrafo1 = document.getElementById("parrafo1");
console.log(parrafo1.innerHTML); // Muestra "Hola Mundo"

let parrafo2 = document.getElementById("parrafo2");
console.log(parrafo2.innerHTML); // Muestra "Hola Mundo" lo llamo derecho aunque está dentro de un div

// Ejemplo con querySelector
// Definición: Selecciona el primer elemento que coincide con un selector CSS.
// En este código: Selecciona un elemento por clase, ID y etiqueta, y muestra su contenido.
let elementoPorClase = document.querySelector(".texto");
console.log(elementoPorClase.innerHTML); // Muestra "Texto 1"

let elementoPorId = document.querySelector("#parrafo1");
console.log(elementoPorId.innerHTML); // Muestra "Hola Mundo"

let elementoPorEtiqueta = document.querySelector("h1");
console.log(elementoPorEtiqueta.innerHTML); // Muestra "Acceso al DOM"

// Ejemplo con querySelectorAll
// Definición: Selecciona todos los elementos que coinciden con un selector CSS y devuelve una NodeList.
// En este código: Selecciona todos los elementos con la clase "texto" y muestra su contenido.
let textos = document.querySelectorAll(".texto");
textos.forEach((texto, index) => {
    console.log(`Texto ${index + 1}: ${texto.innerHTML}`);
});
// Muestra:
// Texto 1: Texto 1
// Texto 2: Texto 2
// Texto 3: Texto 3

// Seleccionar todos los elementos que coincidan con clase, ID y etiqueta
// En este código: Selecciona elementos con la clase "texto", el ID "parrafo1" y la etiqueta <h1>.
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

// Ejemplo con innerHTML
// Definición: Permite leer o modificar el contenido HTML de un elemento.
// En este código: Cambia el contenido HTML del elemento con la clase "texto".
let elementoHTML = document.querySelector(".texto");
console.log(elementoHTML.innerHTML); // Muestra "Texto 1"
elementoHTML.innerHTML = "<strong>Texto Modificado</strong>"; // Cambia el contenido HTML del elemento

// Ejemplo con innerText
// Definición: Permite leer o modificar el texto visible de un elemento (sin incluir etiquetas HTML).
// En este código: Cambia el texto visible del elemento con el ID "parrafo1".
let elementoTexto = document.querySelector("#parrafo1");
console.log(elementoTexto.innerText); // Muestra "Hola Mundo"
elementoTexto.innerText = "Texto cambiado con innerText"; // Cambia el texto visible del elemento

// Ejemplo con textContent
// Definición: Permite leer o modificar el texto de un elemento, incluyendo texto oculto y sin interpretar HTML.
// En este código: Cambia el texto del elemento <h1>.
let elementoContenido = document.querySelector("h1");
console.log(elementoContenido.textContent); // Muestra "Acceso al DOM"
elementoContenido.textContent = "Nuevo Título"; // Cambia el texto del elemento

// Ejemplo con setAttribute
// Definición: Permite agregar o modificar atributos de un elemento.
// En este código: Agrega un atributo "title" al elemento con el ID "parrafo2".
let elementoAtributo = document.querySelector("#parrafo2");
elementoAtributo.setAttribute("title", "Este es un tooltip"); // Agrega un atributo "title" al elemento
console.log(elementoAtributo.getAttribute("title")); // Muestra "Este es un tooltip"

// Ejemplo con createElement
// Definición: Permite crear un nuevo elemento HTML.
// En este código: Crea un nuevo elemento <p> con texto.
let nuevoElemento = document.createElement("p");
nuevoElemento.textContent = "Este es un párrafo creado dinámicamente"; // Agrega texto al nuevo elemento

// Ejemplo con appendChild
// Definición: Permite agregar un elemento hijo al final de otro elemento.
// En este código: Agrega el nuevo elemento <p> al contenedor con la clase "contenedor".
let contenedor = document.querySelector(".contenedor");
contenedor.appendChild(nuevoElemento); // Agrega el nuevo elemento <p> al contenedor

// Ejemplo con insertBefore
// Definición: Permite insertar un elemento antes de otro elemento hijo.
// En este código: Inserta un nuevo elemento <p> antes del primer hijo del contenedor.
let otroElemento = document.createElement("p");
otroElemento.textContent = "Este es un párrafo insertado antes";
contenedor.insertBefore(otroElemento, contenedor.firstChild); // Inserta el nuevo elemento antes del primer hijo

// Ejemplo con removeChild
// Definición: Permite eliminar un elemento hijo de otro elemento.
// En este código: Elimina el primer hijo del contenedor.
let primerHijo = contenedor.firstChild;
contenedor.removeChild(primerHijo); // Elimina el primer hijo del contenedor

// Ejemplo con remove
// Definición: Permite eliminar un elemento directamente del DOM.
// En este código: Elimina el último hijo del contenedor.
let ultimoHijo = contenedor.lastChild;
ultimoHijo.remove(); // Elimina el último hijo del contenedor

// Ejemplo con className
// Definición: Permite leer o modificar las clases de un elemento.
// En este código: Cambia las clases del elemento con la clase "texto" a "bold center red".
let elementoClase = document.querySelector(".texto");
elementoClase.className = "bold center red"; // Cambia las clases del elemento
console.log(elementoClase.className); // Muestra "bold center red"