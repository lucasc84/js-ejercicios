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


// Ejemplo Avanzado

const cursos = [
    { nombre: 'JavaScript',
        duracion: 30,
        precio: 17000,
     },
    { nombre: 'Python',
        duracion: 40,
        precio: 20000,
     },
    { nombre: 'Java',
        duracion: 50,
        precio: 25000,
     },
    { nombre: 'C++',
        duracion: 60,
        precio: 30000,
     },
    { nombre: 'JavaScript',
        duracion: 70,
        precio: 35000,
     },
];

const resultado = cursos.find(curso => curso.nombre === 'JavaScript');
console.log(resultado); // { nombre: 'JavaScript', duracion: 30, precio: 17000 }

const resultado2 = cursos.find(curso => curso.precio > 20000);
console.log(resultado2); // { nombre: 'Java', duracion: 50, precio: 25000 }

const noExiste = cursos.find(curso => curso.nombre === 'PHP');
console.log(noExiste); // undefined

const todosJavaScript = cursos.filter(curso => curso.nombre === 'JavaScript');
console.log(todosJavaScript); // [{ nombre: 'JavaScript', duracion: 30, precio: 17000 }, { nombre: 'Javascript', duracion: 70, precio: 35000 }]