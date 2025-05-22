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



    // function getDatos() {
    // return usuarios
    // }

    // console.log("Datos obtenidos Inmediatamente", getDatos());