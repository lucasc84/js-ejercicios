// //ejemplo 1 funcion

// function saludar () {
//   console.log("Hola, bienvenido a la clase de JavaScript");
// }

// saludar(); // Llamada a la función saludar


// //ejemplo 2 funcion

// function solicitarNombre () {
//   let nombreUsuario = prompt("Por favor, introduce tu nombre:");
//   return nombreUsuario;
//   alert("Hola, " + nombreUsuario + "! Bienvenido a la clase de JavaScript");
// }

// solicitarNombre(); // Llamada a la función solicitarNombre

// //ejemplo 3 funcion con parametros
// let nombreUno = prompt("Por favor, introduce tu nombre:");
// let telefono = 1234;

// function conParametros (nombre,telefono) {

// }

// conParametros (nombreUno, telefono); // Llamada a la función conParametros


//ejemplo 4 funcion con paramtros suma

// let resultado = 0;

// function sumar (numeroUno, numeroDos){

// resultado = numeroUno + numeroDos;

// console.log("La suma de " + numeroUno + " + " + numeroDos + " es: " + resultado);

// }

// sumar(5, 10); // Llamada a la función sumar con los números 5 y 10

// EJEMPLO 5 funcion con return y parametros

// function calculadora (primerNumero, segundoNumero, operacion) {

//   switch (operacion) {
//     case "suma":
//       return primerNumero + segundoNumero;
//     case "resta":
//       return primerNumero - segundoNumero;
//     case "multiplicacion":
//       return primerNumero * segundoNumero;
//     case "division":
//       return primerNumero / segundoNumero;
//     default:
//       return "Operación no válida";
//   }

// }

// console.log(calculadora(10, 5, "suma")); // Llamada a la función calculadora con suma
// console.log(calculadora(Number(prompt("Introduce el primer número:")), Number(prompt("Introduce el segundo número:")), prompt("Introduce la operación (suma, resta, multiplicacion, division):"))); // Llamada a la función calculadora con entrada del usuario


// ejemplo 6 scope - variables locales

// function sumar (num1, num2) {
//   let resultado = num1 + num2; // Variable local a la función
// }

// console.log(resultado); // Esto generará un error porque resultado no está definida en este ámbito

// sumar (5, 10); // Llamada a la función sumar con los números 5 y 10


// ejemplo 7 funcion anonima

const suma = function (num1, num2) {
  return num1 + num2;
}

const resta = function (num1, num2) {
  return num1 - num2;
}

console.log(suma(5, 10)); // Llamada a la función anónima suma con los números 5 y 10
console.log(resta(10, 5)); // Llamada a la función anónima resta con los números 10 y 5

// ejemplo 8 funcion flecha

const multiplicar = (num1, num2) => { 
  return num1 * num2;
}