/* global Swal */
document.getElementById("boton").addEventListener("click", function() {

    Swal.fire ({
        title: "Alerta de prueba",
        text: "Esto es una alerta de prueba",
        icon: "warning",
        confirmButtonText: "Aceptar",
        cancelButtonText: "Cancelar",
        showCancelButton: true,
     });

     });