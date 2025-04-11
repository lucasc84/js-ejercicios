
// -------------------------
// Ejemplo 2: Concatenar texto hasta que se ingrese "ESC"
// -------------------------

let texto = prompt("Ingresá un texto (escribí 'ESC' para salir):");
let resultado = "";

while (texto !== "ESC") {
    resultado = resultado + texto + " ";
    // Otra forma de concatenar :     resultado += texto + " ";

    console.log("Texto acumulado: " + resultado);
    texto = prompt("Ingresá otro texto (escribí 'ESC' para salir):");
}
