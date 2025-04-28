
// Objeto usuario
const usuario = {
    id: "1234",
    nombre: "Juan",
    correo: "juan@example.com"
  };
  
  // Convertir el objeto usuario a una cadena JSON para almacenamiento
  localStorage.setItem('usuario', JSON.stringify(usuario));
  
  // Recuperar el objeto usuario de localStorage y convertirlo de nuevo a un objeto JavaScript
  const usuarioAlmacenado = JSON.parse(localStorage.getItem('usuario'));
  
  console.log(usuarioAlmacenado);