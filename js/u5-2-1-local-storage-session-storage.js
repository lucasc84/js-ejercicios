//localStorage:

localStorage.setItem('saludo', 'Hola, mundo!');



// Guardar datos
localStorage.setItem('usuario', 'Juan Perez');
// Obtener datos
let usuario = localStorage.getItem('usuario');
console.log(usuario); // 'JuanPerez'
// Eliminar datos
localStorage.removeItem('usuario');



//Almacenar un número:

//Aunque localStorage solo puede almacenar cadenas de texto, puedes guardar números como texto y luego convertirlos de vuelta a números cuando los leas:


 localStorage.setItem('puntuacion', '10');
//Para recuperar el número y convertirlo a su tipo original:

 
 let puntuacion = parseInt(localStorage.getItem('puntuacion'));
 console.log(puntuacion); // 10

// Almacenar datos complejos (como objetos o arrays):

// Para guardar objetos o arrays, primero debes convertirlos a una cadena JSON:
 
 
  let usuarioC = {
    nombre: 'Ana',
    edad: 25
  };
  
  localStorage.setItem('usuario', JSON.stringify(usuarioC));
// Para recuperarlo, usa `JSON.parse`:

  let usuarioRecuperado = JSON.parse(localStorage.getItem('usuario'));
  console.log(usuarioRecuperado.nombre); // Ana



//sessionStorage:


// Guardar datos
sessionStorage.setItem('detalleCompra', 'Libro de JavaScript');
// Obtener datos
let detalle = sessionStorage.getItem('detalleCompra');
console.log(detalle); // 'Libro de JavaScript'