const obtenerDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const exito = true; // Cambia esto para probar diferentes resultados
            if (exito) {
                resolve("Datos obtenidos correctamente");
            } else {
                reject("Error al obtener los datos");
            }
        }, 2000);
    });
};

obtenerDatos()
    .then((resultado) => {
        console.log(resultado);
    })
    .catch((error) => {
        console.error(error);
    })
    .finally(() => {
        console.log("Operación completada.");
    });

// VIDEO WEB

const usuarios = [
    { id: 1, nombre: "Juan" },
    { id: 2, nombre: "Ana" },
    { id: 3, nombre: "Pedro" },
]

// datos obtenidos inmediatamente

    function getDatos() {
    return usuarios
    }

    console.log("Video - Datos obtenidos Inmediatamente", getDatos());


// datos obtenidos con demora sin promesas

function getDatosConDemora() {
    setTimeout(() => {
        return usuarios;
    }, 2000);
}

console.log("Video - Datos obtenidos con demora sin promesas", getDatosConDemora());

// esto no funciona porque la función no devuelve nada inmediatamente
// el codigo se lee de arriba a abajo





    function getDatosPromesas() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject("Error al obtener los datos");
            }, 2000);
        });
    }

    getDatosPromesas()
        .then((datos) => {
            console.log("Video - Datos obtenidos con promesas", datos);
        })
        .catch((error) => {
            console.error("error capturado: ", error);
        })
        .finally(() => {
            console.log("Operación completada.");
        });


// EJEMPLO AVANZADO
// Simulando una base de datos de usuarios
 // Cuando trabajas con promesas y no sabes si la operación será exitosa (por ejemplo, buscar un usuario en un array según un valor ingresado), usas un if/else dentro de la función que retorna la promesa para decidir si llamas a resolve (éxito) o a reject (error)



        function buscarUsuarioPorNombre(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const usuario = usuarios.find(u => u.nombre === nombre);
            if (usuario) {
                resolve(usuario); // Si lo encuentra, éxito
            } else {
                reject("Usuario no encontrado"); // Si no, error
            }
        }, 1000);
    });
}
// Supón que el usuario ingresa "Ana"
buscarUsuarioPorNombre("Ana")
    .then(usuario => {
        console.log("Usuario encontrado:", usuario);
    })
    .catch(error => {
        console.error("Error:", error);
    });

    // ¿Qué pasa aquí?
// Si el usuario existe en el array, la promesa se resuelve y el resultado va al .then().
// Si no existe, la promesa se rechaza y el error va al .catch().