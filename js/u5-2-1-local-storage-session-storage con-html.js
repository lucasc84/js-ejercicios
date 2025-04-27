const saludo = document.getElementById("saludo");
const botonGuardar = document.getElementById("guardarNombre");
const botonEliminar = document.getElementById("eliminarNombre");

botonGuardar.addEventListener("click", function() {
    const nombre = prompt("¿Cuál es tu nombre?");
    if (nombre) {
        localStorage.setItem("nombre", nombre);
        saludo.textContent = `Hola, ${nombre}!`;
    }
});

botonEliminar.addEventListener("click", function() {
    localStorage.removeItem("nombre");
    saludo.textContent = "Hola, visitante!";
});

const nombreGuardado = localStorage.getItem("nombre");
if (nombreGuardado) {
    saludo.textContent = `Hola, ${nombreGuardado}!`;
}