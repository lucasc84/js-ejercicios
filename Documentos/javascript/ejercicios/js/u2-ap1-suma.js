// -------------------------
// Ejemplo 1: Pedir un número y sumarle otro en cada repetición
// -------------------------

let numero1 = Number(prompt("Ingresá un número para empezar a sumar:"));
let incremento = Number(prompt("¿Cuánto querés sumarle en cada repetición?"));

for (let i = 1; i <= 5; i++) {
    numero1 = numero1 + incremento;
    //numero1 se actualiza con numero1+ incremento, por eso confunde que el nombre sea el mismo. numero 1 PASA A SER numero1 + incremento
    console.log("Resultado de la suma #" + i + " = " + numero1);
}

