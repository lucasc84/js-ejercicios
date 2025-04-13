//ORIGINAL


function prestarLibro(titulo, usuario) {
    console.log(`El libro "${titulo}" ha sido prestado a ${usuario}.`);
}

prestarLibro("1984", "Ana");
// Muestra: El libro "1984" ha sido prestado a Ana.

//MODIFICADO CON PROMPT


let titulo = prompt("Ingrese el Nombre del Libro:");
let usuario = prompt("Ingrese el Nombre del usuario:");

prestarLibro(titulo, usuario);

function prestarLibro(titulo, usuario) {
    console.log(`El libro "${titulo}" ha sido prestado a ${usuario}.`);
}