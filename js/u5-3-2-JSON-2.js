let usuario = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid"
};

console.log("Usuario original:", usuario);

// Convertir el objeto a una cadena JSON
let usuarioJSON = JSON.stringify(usuario);
console.log("Usuario en formato JSON:", usuarioJSON);

// Guardar el objeto JSON en localStorage
localStorage.setItem("usuario", usuarioJSON);
console.log("Usuario guardado en localStorage.");

// Recuperar el objeto JSON de localStorage
let usuarioRecuperadoJSON = localStorage.getItem("usuario");
console.log("Usuario recuperado de localStorage:", usuarioRecuperadoJSON);

// Convertir la cadena JSON de nuevo a un objeto
let usuarioRecuperado = JSON.parse(usuarioRecuperadoJSON);

console.log("Usuario recuperado como objeto:", usuarioRecuperado);
