const persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Buenos Aires"
};


console.log(persona.nombre); // Salida: Juan
console.log(persona.edad); // Salida: 30    
console.log(persona.ciudad); // Salida: Buenos Aires
console.log(persona); // Salida: { nombre: 'Juan', edad: 30, ciudad: 'Buenos Aires' }

// Diferencias con Arrays
// A diferencia de los arrays, que son colecciones indexadas de elementos, los objetos literales no mantienen un orden específico de sus elementos y no se accede a sus valores mediante índices numéricos. En los arrays, el acceso a los elementos se realiza a través de índices comenzando desde 0, mientras que en los objetos, el acceso se realiza a través de las claves definidas.

// Ejemplo de Diferencias:

// Array
const colores = ["rojo", "verde", "azul"];
console.log(colores[0]); // Accede al primer elemento: "rojo"

// Objeto Literal
const semaforo = {
    rojo: "Detenerse",
    verde: "Avanzar",
    azul: "Cuidado"
};
console.log(semaforo.rojo); // Accede al valor de la clave 'rojo': "Detenerse"

// VIDEO WEB

let arrayObjetos = [];

arrayObjetos.push({
    id:1, nombre:"Producto 1"
});
arrayObjetos.push({
    id:2, nombre:"Producto 2"
});
arrayObjetos.push({
    id:3, nombre:"Producto 3"
});

console.log(arrayObjetos);

for (let objeto of arrayObjetos) {
    console.log(objeto.id);
    console.log(objeto.nombre);
}

// agregar con puhs objetos a un array vacio


const usuarios = [];
usuarios.push({ nombre: "Ana", edad: 35 });
usuarios.push({ nombre: "Luis", edad: 30 });

console.log(usuarios);

//ordenarlos con sort
usuarios.sort((a, b) => a.edad - b.edad);
console.log(usuarios);


//filtrar con filter

const mayoresDe30 = usuarios.filter(usuario => usuario.edad > 30);
console.log(mayoresDe30);

const luis = usuarios.find(usuario => usuario.nombre === "Luis");
console.log(luis);
// Resultado: { nombre: "Luis", edad: 30 }