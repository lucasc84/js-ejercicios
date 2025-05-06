// EJEMPLO VIDEO

const cursos = [
    { nombre: 'JavaScript', duracion: 30, precio: 17000 },
    { nombre: 'Python', duracion: 40, precio: 20000 },
    { nombre: 'Java', duracion: 50, precio: 25000 },
    { nombre: 'C++', duracion: 60, precio: 30000 },
    { nombre: 'JavaScript', duracion: 70, precio: 35000 }
];

const nombresCursos = cursos.map(curso => curso.nombre);
console.log(nombresCursos); // ['JavaScript', 'Python', 'Java', 'C++', 'JavaScript']

const cursoConDescuento = cursos.map(curso => {
    return {
        ...curso,
        precio: curso.precio * 0.9 // Aplicar un descuento del 10%
    };
}
);
console.log(cursoConDescuento);

const duracionHoras = cursos.map(curso => curso.duracion*10);  
console.log(duracionHoras); // [300, 400, 500, 600, 700]