let nombre = "Raul";
let edad = 30;

// Guardar datos en localStorage
localStorage.setItem("nombre", nombre);
localStorage.setItem("edad", edad);

// Recuperar datos de localStorage
let nombreRecuperado = localStorage.getItem("nombre");
let edadRecuperada = localStorage.getItem("edad");
console.log("Nombre recuperado:", nombreRecuperado);
console.log("Edad recuperada:", edadRecuperada);

let recuperarNombre = localStorage.getItem("nombre");
console.log("Nombre recuperado como cadena:", recuperarNombre);

let recuperarEdad = parseInt(localStorage.getItem("edad"));
console.log("Edad recuperada como número:", recuperarEdad);

// Eliminar datos de localStorage
localStorage.removeItem("nombre");
localStorage.removeItem("edad");
console.log("Datos eliminados de localStorage");
// Verificar si los datos han sido eliminados

nombreRecuperado = localStorage.getItem("nombre");
edadRecuperada = localStorage.getItem("edad");
console.log("Nombre recuperado después de eliminar:", nombreRecuperado);
console.log("Edad recuperada después de eliminar:", edadRecuperada);


//Uso de clear para eliminar todos los datos
//El método clear elimina todos los datos almacenados en localStorage o sessionStorage, sin distinción de claves o valores. Este método es radical y útil cuando deseas limpiar completamente el almacenamiento para el dominio dado.

//Sintaxis básica:



localStorage.clear();
sessionStorage.clear();
