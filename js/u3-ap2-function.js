// Función anónima asignada a una variable
let frutas = function() {
  let cantBanana = prompt("Ingresá la cantidad de Bananas");
  let cantFrutilla = prompt("Ingresá la cantidad de Frutillas");
  let cantManzana = prompt("Ingresá la cantidad de Manzanas");
  let precioBanana = prompt("Ingresá el precio de la Banana");
  let precioFrutilla = prompt("Ingresá el precio de la Frutilla");
  let precioManzana = prompt("Ingresá el precio de la Manzana");

  
  return [cantBanana, cantFrutilla, cantManzana, precioBanana, precioFrutilla, precioManzana];
}


// Función flecha
const subtotales = (cBan, cFrut, cManz, pBan, pFrut, pManz) => {
  let subtotalBanana = Number(cBan) * Number(pBan);
  let subtotalFrutilla = Number(cFrut) * Number(pFrut);
  let subtotalManzana = Number(cManz) * Number(pManz);
  let total = subtotalBanana + subtotalFrutilla + subtotalManzana;

  return [subtotalBanana, subtotalFrutilla, subtotalManzana, total];
}



// Función tradicional
function mostrarResultado(cantBanana, cantFrutilla, cantManzana, subtotalBanana, subtotalFrutilla, subtotalManzana, total) {
  alert("El precio total de " + cantBanana + " Bananas es: " + subtotalBanana);
alert("El precio total de " + cantFrutilla + " Frutillas es: " + subtotalFrutilla);
alert("El precio total de " + cantManzana + " Manzanas es: " + subtotalManzana);
alert("El precio total es de " + total);

  console.log("Cantidad de Bananas: " + cantBanana + " | Precio de bananas: " + subtotalBanana);
  console.log("Cantidad de Frutillas: " + cantFrutilla + " | Precio de Frutillas: " + subtotalFrutilla);
  console.log("Cantidad de Manzanas: " + cantManzana + " | Precio de Manzanas: " + subtotalManzana);
  console.log("Precio Total: " + total);
}


// Función principal
function ejecutarPrograma() {
  let datos = frutas();
  let subtotal = subtotales(datos[0], datos[1], datos[2], datos[3], datos[4], datos[5]);
  let subtotalBanana = subtotal[0];
  let subtotalFrutilla = subtotal[1];
  let subtotalManzana = subtotal[2];
  let total = subtotal[3];
  mostrarResultado(datos[0], datos[1], datos[2], subtotalBanana, subtotalFrutilla, subtotalManzana, total);
}

  
  // Llamamos al programa
  ejecutarPrograma();
  