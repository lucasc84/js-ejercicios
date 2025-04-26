// ==============================
// Primera Preentrega - Turnero para casa de préstamos
// ==============================

// Declaración de variable con array para almacenar los turnos
let turnos = []; // Array principal (agrupa los turnos)

// === Función de entrada de datos (con prompt) ===
function solicitarDatosTurno() {
  // Solicito al usuario los datos necesarios para crear un turno
  let nombre = prompt("Ingresá tu nombre:");
  let dni = prompt("Ingresá tu DNI:");
  let direccion = prompt("Ingresá tu dirección:");
  let telefono = prompt("Ingresá tu teléfono:");

  // Menú de selección de sucursal con switch 
  
  let sucursalElegida = prompt("Elegí la sucursal:\n1. La Plata\n2. Berisso\n3. Ensenada");
  let sucursalSeleccionada = "";
  
  switch (sucursalElegida) {
    case "1":
      sucursalSeleccionada = "La Plata";
      break;
    case "2":
      sucursalSeleccionada = "Berisso";
      break;
    case "3":
      sucursalSeleccionada = "Ensenada";
      break;
    default:
      sucursalSeleccionada = "Sucursal no válida";
      break;
  }



  let horario = prompt("Ingresá el horario deseado (Ej: 10:30)");

  // volcado de datos para futura llamada
  return [nombre, dni, direccion, telefono, sucursalSeleccionada, horario];
}

// Guardado de datos
function registrarTurno(datos) {
  // Validación de que  todos los datos se ingresaron correctamente
  if (
    datos[0] !== "" &&
    datos[1] !== "" &&
    datos[2] !== "" &&
    datos[3] !== "" &&
    datos[4] !== "Sucursal no válida" && // Validar sucursal
    datos[5] !== ""
  ) {

    turnos.push(datos); // Agrego los datos al array vacio de turnos y emito alerta
    alert("✅ Turno registrado con éxito para " + datos[0]);
  } else {
    // Si falta algún dato, no agrego datos al array y emito alerta
    alert("⚠️ Error: Faltan datos o la sucursal es incorrecta.");
  }
}

// Salida de Consola: Turnos Registrados
// ANALIZADO HASTA ACA
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
alert("Bienvenido al sistema de turnos de Préstamos Express S.A.");
let continuarIngresando = "si";

// Bucle para ingresar múltiples turnos
while (continuarIngresando === "si") {
  let nuevoTurno = solicitarDatosTurno();       // Entrada
  registrarTurno(nuevoTurno);                   // Procesamiento
  continuarIngresando = prompt("¿Querés ingresar otro turno? (si / no)");
}

// Muestro resultados finales por consola
mostrarTurnos();
