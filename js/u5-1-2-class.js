//EJEMPLO 2 - Comparación con Clases en ES6


class Persona {
    constructor(nombre, edad, calle) {
        this.nombre = nombre;
        this.edad = edad;
        this.calle = calle;
    }

    describir() {
        return `Nombre: ${this.nombre}, Edad: ${this.edad}, Calle: ${this.calle}`;
    }
}

// Crear un nuevo objeto Persona
const persona1 = new Persona("Ana", 25, "Calle Falsa 123");
console.log(persona1.describir());
