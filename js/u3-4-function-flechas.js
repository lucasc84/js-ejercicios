// ¿Qué son las Funciones Flecha?
// Introducidas en ES6, las funciones flecha ofrecen una sintaxis más concisa para escribir funciones anónimas. No tienen su propio this, lo que las hace ideales para callbacks y programación funcional.


const suma = (a, b) => a + b; //no necesita la palabra return
// o las llaves si solo hay una línea de código
// o si no hay un return
console.log(suma(5, 3)); // Salida: 8


let cuadrados = [1, 2, 3].map(n => n * n);
console.log(cuadrados); // Salida: [1, 4, 9]