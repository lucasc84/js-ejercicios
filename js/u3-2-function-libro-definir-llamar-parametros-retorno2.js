// ejmeplo 1 cona rgumentos libro agregador poir

function agregarLibro(titulo, autor) {
    console.log(`Libro agregado: "${titulo}" por ${autor}.`);
}

agregarLibro("El Principito", "Antoine de Saint-Exupéry");
agregarLibro("Carrie", "Stephen King");

// ejmeplo 2 con argumentos calculo multa
// 

function calcularMulta(diasRetraso) {
    const multaPorDia = 0.50; // 50 centavos por día de retraso
    return diasRetraso * multaPorDia;
}

// //original cometnado con console.log 
// let resultado = calcularMulta(7); 
// console.log(`La multa por 7 días de retraso es: $${resultado}`);
// // Muestra: La multa por 7 días de retraso es: $3.5

// Pedir al usuario los días de retraso
let diasRetraso = Number(prompt("Ingrese la cantidad de días de retraso:"));

// Calcular la multa
let resultado = calcularMulta(diasRetraso);

// Mostrar el resultado en la consola
console.log(`La multa por ${diasRetraso} días de retraso es: $${resultado}`);
// Muestra: La multa por X días de retraso es: $Y


/// OTRO EJEMPLO CON OPCIONES DE RESPUESTA:



function devolverLibro(titulo, diasRetraso = 0) {
    const multa = diasRetraso * 0.50;


//LOQ UE VIENE TAMBIEN PODRIA SER EXPRESADO CON ELFE_IF ASI:
// if (diasRetraso > 0) {
//     mensaje = `Devuelto con ${diasRetraso} días de retraso. Multa: $${multa}`;
// } else {
//     mensaje = "Devuelto a tiempo. No hay multa.";
// }

    const mensaje = diasRetraso > 0 
        ? `Devuelto con ${diasRetraso} días de retraso. Multa: $${multa}` 
        : "Devuelto a tiempo. No hay multa.";



    console.log(`Libro "${titulo}": ${mensaje}`);
}

devolverLibro("El Principito");
// Muestra: Libro "El Principito": Devuelto a tiempo. No hay multa.

devolverLibro("El Principito", 3);
// Muestra: Libro "El Principito": Devuelto con 3 días de retraso. Multa: $1.5.