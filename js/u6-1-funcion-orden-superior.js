// Recibir funciones como parámetros



const numeros = [1, 2, 3, 4];

function porCadaUno(arrayNumeros, cl) {
    for (let i = 0; i < arrayNumeros.length; i++) {
        cl(arrayNumeros[i]);
    }
}

porCadaUno(numeros, console.log);
// 1
// 2
// 3
// 4

// Retornar funciones

function mayorQue(n) {
    return function(m) {
        return m > n;
    }
}

let mayorQueDiez = mayorQue(10);

console.log(mayorQueDiez(12)); // true
console.log(mayorQueDiez(8));  // false

// Ejemplo con map:


const numeros2 = [1, 2, 3, 4];
const duplicados = numeros2.map(function(num) {
    return num * 2;
});

console.log(duplicados); // [2, 4, 6, 8]