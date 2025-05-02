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