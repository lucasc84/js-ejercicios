function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;

    this.saludar = function() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    };
}

let persona1 = new Persona("Juan", 30);
let persona2 = new Persona("María", 25);
let persona3 = new Persona("Pedro", 40);

persona1.nombre; // "Juan"
persona2.edad; // 25
persona3.saludar(); // Hola, mi nombre es Pedro y tengo 40 años.
persona2.saludar(); // Hola, mi nombre es María y tengo 25 años.
persona1.saludar(); // Hola, mi nombre es Juan y tengo 30 años.