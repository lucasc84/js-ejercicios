//forEach: Iterando Arrays

const numeros = [1, 2, 3, 4, 5];

numeros.forEach(function(numero) {
    console.log(numero);
});

// Uso del índice en la iteración:
const frutas = ['Manzana', 'Banana', 'Cereza'];

frutas.forEach(function(fruta, indice) {
    console.log(`Índice ${indice}: ${fruta}`);
});

// Modificación de elementos en un array (aunque no es el uso principal de forEach):

const numeros2 = [1, 2, 3, 4];
const duplicados = [];

numeros2.forEach(function(numero) {
    duplicados.push(numero * 2);
});

console.log(duplicados); // [2, 4, 6, 8]