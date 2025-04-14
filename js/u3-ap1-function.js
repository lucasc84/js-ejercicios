// Función anónima asignada a una variable
let pedirDatos = function() {
    let nombre = prompt("Ingresá tu nombre");
    let nota1 = prompt("Ingresá la primera nota");
    let nota2 = prompt("Ingresá la segunda nota");
    return [nombre, nota1, nota2];
  }
  
  // Función flecha
  const sumarNotas = (n1, n2) => {
    let suma = Number(n1) + Number(n2);
    return suma;
  }
  
  // Función tradicional
  function mostrarResultado(nombre, suma) {
    alert("Hola " + nombre + ", la suma de tus dos notas es: " + suma);
    console.log("Nombre: " + nombre + " | Suma de notas: " + suma);
  }
  
  // Función principal
  function ejecutarPrograma() {
    let datos = pedirDatos();
    let suma = sumarNotas(datos[1], datos[2]);
    mostrarResultado(datos[0], suma);
  }
  
  // Llamamos al programa
  ejecutarPrograma();
  