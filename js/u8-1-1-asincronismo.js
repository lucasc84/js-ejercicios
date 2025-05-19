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