// Ejemplo de Ejemplo de código sincrónico:


// console.log("Inicio");
// let resultado = operacionLenta(); // Supongamos que esta función tarda 5 segundos en completarse
// console.log("Resultado:", resultado);
// console.log("Fin");

// En este caso, hasta que operacionLenta no termine, el programa no continuará con la siguiente línea



// Ejemplo de código asincrónico:

console.log("Inicio");

setTimeout(() => {
    console.log("Esto se ejecuta después de 2 segundos");
}, 2000);

console.log("Fin");

// En este ejemplo, setTimeout permite que el mensaje dentro de su función se muestre después de 2 segundos, mientras que el programa continúa ejecutando las siguientes líneas sin esperar.


//ASINCRONISMO CON FETCH
// El método fetch() es una función de JavaScript que permite realizar solicitudes HTTP de manera asíncrona. Es parte de la API Fetch y se utiliza comúnmente para obtener datos de un servidor o enviar datos a un servidor.

// 1. CON PROMESAS /then / catch


const urlCorrecta = "https://jsonplaceholder.typicode.com/posts";
// url correcta

const urlErronea = "https://jsonplacehol.typicode.com/posts";
// le saque caracteres a la dirección para que me tire error



// Ejemplo de código asincrónico con fetch:
fetch(urlCorrecta)
    .then(response => response.json())
    .then(data => {
        console.log("urlCorrecta - Datos recibidos:", data);
    })
    .catch(error => {
        console.error("urlCorrecta - Error al obtener los datos:", error);
    });
// En este caso, la función fetch realiza una solicitud a la URL especificada y, una vez que recibe la respuesta, convierte los datos a formato JSON y los muestra en la consola. Si hay un error durante la solicitud, se captura y se muestra en la consola.

fetch(urlErronea)
    .then(response => response.json())
    .then(data => {
        console.log("Datos recibidos:", data);
    })
    .catch(error => {
        console.error("urlErronea - Error al obtener los datos:", error);
    });

// 2. CON FUNCIONES ASYNC / AWAIT


async function fetchCorrecta()
{
    const response = await fetch(urlCorrecta);
    const data = await response.json();
    console.log("fetch urlCorrecta - Datos recibidos:", data);
}

fetchCorrecta()

async function fetchErronea()
{
    const response = await fetch(urlErronea);
    const data = await response.json();
    console.log("fetchData urlErronea - Datos recibidos:", data);
}

fetchErronea()

// Para que el manejo de errores sea igual de claro que con promesas, debes envolver el código en un bloque try/catch:

// async function fetchErronea() {
//     try {
//         const response = await fetch(urlErronea);
//         const data = await response.json();
//         console.log("fetchData urlErronea - Datos recibidos:", data);
//     } catch (error) {
//         console.error("fetchData urlErronea - Error al obtener los datos:", error);
//     }
// }
// fetchErronea();




// ¿Qué es el Call Stack?
// El Call Stack (o pila de llamadas) es una estructura de datos en la que se registran las funciones que están siendo ejecutadas en un programa. Cada vez que se invoca una función, esta se apila en el Call Stack. Cuando una función termina de ejecutarse, se desapila, y el control se devuelve a la función anterior en la pila.


function first() {
    console.log("Primera función");
    second();
    console.log("Primera función - Parte 2");
}

function second() {
    console.log("Segunda función");
}

first();

// En este caso, la función first() llama a la función second() y luego continúa ejecutando su propio código. La salida será:
// Primera función
// Segunda función  
// Primera función - Parte 2
// Esto es un ejemplo de código sincrónico, donde las funciones se ejecutan en el orden en que son llamadas.


//¿Qué es el Event Loop?
//El Event Loop es el mecanismo que permite a JavaScript manejar operaciones asincrónicas, como temporizadores y solicitudes HTTP, a pesar de ser single-threaded. Mientras que el Call Stack maneja las funciones sincrónicas, el Event Loop supervisa la cola de tareas (también llamada Callback Queue), donde se colocan las operaciones asincrónicas una vez que están listas para ser ejecutadas.

console.log("Inicio");

setTimeout(() => {
    console.log("Esto es asincrónico");
}, 2000);

console.log("Fin");

//En este ejemplo, setTimeout coloca la función en la Callback Queue, y el Event Loop la ejecuta después de 2 segundos, una vez que el Call Stack esté vacío.


