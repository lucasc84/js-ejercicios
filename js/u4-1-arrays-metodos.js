//METODOS DE MODIFICACION

// Método push
// El método push añade uno o más elementos al final de un array. Este método modifica el array original y devuelve la nueva longitud del array.

let frutas = ['manzana', 'banana'];
frutas.push('naranja');
console.log(frutas);  // Salida: ['manzana', 'banana', 'naranja']


// Método pop
// El método pop elimina el último elemento de un array y lo devuelve. Este método cambia la longitud del array.

let frutas2 = ['manzana', 'banana', 'naranja'];
let frutaEliminada = frutas2.pop();
console.log(frutaEliminada);  // Salida: 'naranja'
console.log(frutas2);  // Salida: ['manzana', 'banana']

// Método shift
// El método shift elimina el primer elemento del array y lo devuelve, desplazando todos los elementos restantes a una posición inferior.

let frutas3 = ['manzana', 'banana', 'naranja'];
let primeraFruta = frutas3.shift();
console.log(primeraFruta);  // Salida: 'manzana'
console.log(frutas3);  // Salida: ['banana', 'naranja']


// Método unshift
// El método unshift añade uno o más elementos al inicio del array y devuelve la nueva longitud del array.

let frutas4 = ['banana', 'naranja'];
frutas4.unshift('manzana');
console.log(frutas4);  // Salida: ['manzana', 'banana', 'naranja']


//METODOS DE BUSQUEDA

// Método indexOf
// El método indexOf devuelve el primer índice en el que se puede encontrar un elemento dado en el array, o -1 si el elemento no está presente. Es útil para localizar la posición exacta de un elemento y es sensible a tipos de datos, es decir, diferencia entre números, strings, etc.

let nombres = ['Juan', 'Pedro', 'Maria', 'Ana'];
let indice = nombres.indexOf('Maria');
let indice2 = nombres.indexOf('Jose');
console.log(indice);  // Salida: 2 // lo enceuntra y te dice la posicion
console.log(indice2);  // Salida: -1 //no lo encuentra


// Método includes
// El método includes determina si un array contiene un determinado elemento, retornando true o false según corresponda. Este método no proporciona la posición del elemento, sino solo la confirmación de su existencia, lo que lo hace ideal para condiciones y verificaciones rápidas.

let contiene = nombres.includes('Maria');
let contiene2 = nombres.includes('Jose');
console.log(contiene);  // Salida: true
console.log(contiene2);  // Salida: false
// Método find


//METODOS DE ORDENAMIENTO

let ordenNumeros = [5, 3, 8, 1, 2];

// Método sort
ordenNumeros.sort((a, b) => a - b); // Ordena de menor a mayor
console.log(ordenNumeros);  // Salida: [1, 2, 3, 5, 8]

// Metodo localeCompare
let nombres2 = ['Juan', 'Pedro', 'Maria', 'Ana'];
nombres2.sort((a, b) => a.localeCompare(b)); // Ordena alfabéticamente
console.log(nombres2);  // Salida: ['Ana', 'Juan', 'Maria', 'Pedro']

// Método reverse
ordenNumeros.reverse(); // Invierte el orden del array
console.log(ordenNumeros);  // Salida: [8, 5, 3, 2, 1]

nombres2.reverse(); // Invierte el orden del array
console.log(nombres2);  // Salida: ['Pedro', 'Maria', 'Juan', 'Ana']

// CONTCATENAR ARRAYS
//metodo join   

// El método join une todos los elementos de un array en una cadena, separando los elementos por un separador especificado. Si no se proporciona un separador, el método utiliza una coma por defecto.

//Uso básico con coma (default)
let colores = ['Rojo', 'Verde', 'Azul'];
let resultado = colores.join();
console.log(resultado);  // "Rojo,Verde,Azul"

// Uso con separador de espacio
let resultadoEspacio = colores.join(' ');
console.log(resultadoEspacio);  // "Rojo Verde Azul"

// Uso con separador de guión
let resultadoGuion = colores.join('-');
console.log(resultadoGuion);  // "Rojo-Verde-Azul"

//Uso con separador vacío
let resultadoVacio = colores.join('');
console.log(resultadoVacio);  // "RojoVerdeAzul"


