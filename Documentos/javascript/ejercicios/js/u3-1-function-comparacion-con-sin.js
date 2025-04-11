// Sin usar funciones (código repetitivo)
console.log("Hola, Ana");
console.log("Hola, Juan");
console.log("Hola, María");

// Usando funciones
function saludar(nombre) {
    console.log(`Hola, ${nombre}`);
}

saludar("Ana");
saludar("Juan");
saludar("María");


// Sin encapsular operaciones complejas
let base = 10;
let altura = 5;
let areaTriangulo = (base * altura) / 2;
console.log(`El área del triángulo es ${areaTriangulo}`);

// Encapsulando la lógica en una función
function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
}

console.log(`El área del triángulo es ${calcularAreaTriangulo(10, 5)}`);