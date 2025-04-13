// 1. EJEMPLO DE DEFINICIÓN Y LLAMADA DE UNA FUNCIÓN
// Definición de la función


function mostrarLibros() {
    console.log("Bienvenido a la biblioteca. ¡Estos son los libros disponibles!");
}  
// Llamada a la función

mostrarLibros(); // Muestra: Bienvenido a la biblioteca. ¡Estos son los libros disponibles!

// 2. EJEMPLO DE PARAMETROS EN UNA FUNCIÓN
// Definición de la función con parámetros

function buscarLibro(titulo) {
    console.log(`Buscando el libro: ${titulo}...`);
}

// Llamada a la función con diferentes argumentos
buscarLibro("El Principito"); // Muestra: Buscando el libro: El Principito...

buscarLibro("Carrie"); // Muestra: Buscando el libro: Carrie...

// 3. EJEMPLO DE RETORNO EN UNA FUNCIÓN
// Definición de la función con retorno

function calcularMulta(diasRetraso) {
    const multaPorDia = 0.50; // 50 centavos por día de retraso
    return diasRetraso * multaPorDia;
}

// Llamada a la función y almacenamiento del resultado
let multa = calcularMulta(5);
console.log(`La multa total es: $${multa}`); // Muestra: La multa total es: $2.5


// 3. EJEMPLO PRACTICO DE UNA FUNCIÓN QUE RETORNA UN OBJETO
// Definición de la función que retorna un objeto
// Esta función crea un libro con título y autor
// y retorna un objeto con esos datos


function agregarLibro(titulo, autor) {
    return { titulo, autor };
}

// Definición de la función que muestra los detalles del libro
// Esta función toma un objeto libro como argumento
// y muestra su título y autor en la consola

function mostrarDetalleLibro(libro) {
    console.log(`Título: ${libro.titulo}, Autor: ${libro.autor}`);
}

// Agregar un libro
// Crear un objeto libro usando la función agregarLibro
let libro1 = agregarLibro("1984", "George Orwell");

// Mostrar detalles del libro
// Esta función crea un libro con título y autor
mostrarDetalleLibro(libro1);
// Muestra: Título: 1984, Autor: George Orwell

// Agregar un segundo libro

let libro2 = agregarLibro("IT", "Stephen King");

// Mostrar detalles del libro

mostrarDetalleLibro(libro2);
// Muestra: Título: IT, Autor: Stephen King