/* global Swal, Toastify */
document.getElementById("boton").addEventListener("click", function () {
  Swal.fire({
    title: "Alerta de prueba",
    text: "Esto es una alerta de prueba",
    icon: "warning",
    confirmButtonText: "Aceptar",
    cancelButtonText: "Cancelar",
    showCancelButton: true,
  });
});

// Toastify({

document.getElementById("boton-toast").addEventListener("click", function () {
  Toastify({
    text: "¡Esta es una notificación básica!",
    duration: 3000,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,

  }).showToast();
});
