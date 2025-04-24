// ==============================
// Primera Preentrega - Turnero
// Proyecto: Simulador de turnos para casa de préstamos
// Cumple requisitos hasta Unidad 4 inclusive
// ==============================

// === Variables y Array para almacenar los turnos ===
let turnos = []; // Array principal del simulador (agrupa elementos similares: los turnos)

// === Función de entrada de datos (con prompt) ===
function solicitarDatosTurno() {
  // Solicito al usuario los datos necesarios para crear un turno
  let nombre = prompt("Ingresá tu nombre:");
  let dni = prompt("Ingresá tu DNI:");
  let direccion = prompt("Ingresá tu dirección:");
  let telefono = prompt("Ingresá tu teléfono:");

  // Menú de selección simple con números para elegir sucursal
  let sucursalElegida = prompt("Elegí la sucursal:\n1. La Plata\n2. Berisso\n3. Ensenada");
  let sucursal = "";
  if (sucursalElegida === "1") {
    sucursal = "La Plata";
  } else if (sucursalElegida === "2") {
    sucursal = "Berisso";
  } else if (sucursalElegida === "3") {
    sucursal = "Ensenada";
  } else {
    sucursal = "Sucursal no válida";
  }

  let horario = prompt("Ingresá el horario deseado (Ej: 10:30)");

  // Devuelvo los datos en una estructura simple (array de datos)
  return [nombre, dni, direccion, telefono, sucursal, horario];
}

// === Función de procesamiento de datos ===
function registrarTurno(datos) {
  // Valido que todos los datos hayan sido ingresados correctamente
  if (
    datos[0] !== "" &&
    datos[1] !== "" &&
    datos[2] !== "" &&
    datos[3] !== "" &&
    datos[4] !== "Sucursal no válida" &&
    datos[5] !== ""
  ) {
    // Uso un array como estructura para representar un turno completo
    turnos.push(datos); // Agrego los datos al array de turnos
    alert("✅ Turno registrado con éxito para " + datos[0]);
  } else {
    alert("⚠️ Error: Faltan datos o la sucursal es incorrecta.");
  }
}

// === Función de salida: mostrar todos los turnos registrados ===
function mostrarTurnos() {
  console.log("📋 Listado de turnos registrados:");
  for (let i = 0; i < turnos.length; i++) {
    let t = turnos[i]; // Accedo a cada array interno con los datos del turno
    console.log(
      "Turno " + (i + 1) + ": " + t[0] + " | DNI: " + t[1] + " | Tel: " + t[3] +
      " | Dirección: " + t[2] + " | Sucursal: " + t[4] + " | Horario: " + t[5]
    );
  }
}

// === Ciclo principal del simulador ===
alert("Bienvenido al sistema de turnos de la casa de préstamos");
let continuar = "si";

// Bucle para ingresar múltiples turnos
while (continuar === "si") {
  let datos = solicitarDatosTurno();       // Entrada
  registrarTurno(datos);                   // Procesamiento
  continuar = prompt("¿Querés ingresar otro turno? (si / no)");
}

// Muestro resultados finales por consola
mostrarTurnos();
