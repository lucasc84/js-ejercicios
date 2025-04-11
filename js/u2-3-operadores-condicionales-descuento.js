const mensaje = document.getElementById("mensaje");
const boton = document.getElementById("boton");


let descuentoInicial;

const descuentoPredeterminado = 10;

let descuentoActual = descuentoInicial  ||  descuentoPredeterminado;
mensaje.textContent = `El descuento actual es del ${descuentoActual}%`;


boton.addEventListener("click", () => {
    let descuentoIngresado = prompt("Ingrese el descuento en porcentaje");

    descuentoIngresado = Number(descuentoIngresado);

    descuentoActual = descuentoIngresado  || descuentoPredeterminado;

    mensaje.textContent = `El descuento actual es del ${descuentoActual}%`;

}
)


// Si el codigo oo hubeiramos hecho con ?? (Nullish Coalescing) en vez de || (Operador OR Lógico) hubieramos podido poner 0 en el decuento, proque la diferencia radica en que si bien ambos condieran valores  null y undefined, ?? no considera otros valores "falsy" como 0 o ''.