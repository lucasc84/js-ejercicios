const numeros = [1, 2, 3, 4, 5, 6];
const numerosPares = numeros.filter(function(numero) {
    return numero % 2 === 0;
});

console.log(numerosPares); // [2, 4, 6]


const cursos = [
    { nombre: 'JavaScript', duracion: 8 },
    { nombre: 'React', duracion: 6 },
    { nombre: 'Angular', duracion: 10 }
];

const cursosLargos = cursos.filter(function(curso) {
    return curso.duracion > 7;
});

console.log(cursosLargos);
// [{ nombre: 'JavaScript', duracion: 8 }, { nombre: 'Angular', duracion: 10 }]

const palabras = ['manzana', 'banana', 'cereza', 'damasco'];

const palabrasConA = palabras.filter(function(palabra) {
    return palabra.includes('a');
});

console.log(palabrasConA); // ['manzana', 'banana', 'cereza', 'damasco']