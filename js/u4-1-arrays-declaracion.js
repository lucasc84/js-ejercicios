// ACCESO A LOS ARRAYS

const frutas = ["manzana", "banana", "cereza"];

// Acceder al primer elemento
console.log(frutas[0]);  // "manzana"

// Acceder al tercer elemento
console.log(frutas[2]);  // "cereza"

// DECLARACION AVANZADA - numers, palabras, boleeanos y mariz

let numeros = [1, 2, 3, 4, 5];
console.log(numeros); // [1, 2, 3, 4, 5]
console.log(numeros[0]); // 1

let palabras = ["hola", "mundo", "javascript", "arrays"];
console.log(palabras); // ["hola", "mundo", "javascript", "arrays"]
console.log(palabras[2]); // "javascript"

let booleanos = [true, false, true, false];
console.log(booleanos); // [true, false, true, false]
console.log(booleanos[1]); // false

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matriz); // [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(matriz[1][2]); // 6

//RECORRER ARRAYS



// Supongamos que tenemos el siguiente array de números
const recorrerNumeros = [10, 20, 30, 40, 50];

// Para recorrer este array usaremos un bucle for
for (let i = 0; i < recorrerNumeros.length; i++) {
    console.log(recorrerNumeros[i]); // Esto imprimirá cada número del array en la consola
}

// Acceso a Elementos Específicos
const fruta = ["Manzana", "Banana", "Cereza"];
console.log(fruta[0]); // Salida: Manzana
console.log(fruta[1]); // Salida: Banana
console.log(fruta[fruta.length - 1]); // Salida: Cereza - Utilizamos length - 1 para acceder al último elemento.