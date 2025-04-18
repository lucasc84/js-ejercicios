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