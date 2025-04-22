// Array donde se guardan los turnos
let turnos = [];

// Función para elegir sucursal
function elegirSucursal() {
    let opcion = prompt("Elegí la sucursal:\n1. La Plata\n2. Berisso\n3. Ensenada");
  
    switch (opcion) {
      case "1":
        return "La Plata";
      case "2":
        return "Berisso";
      case "3":
        return "Ensenada";
      default:
        return "Sucursal no válida";
    }
  }

// Función para registrar un turno
function registrarTurno() {
  alert("Registro de turno - Casa de préstamos");

  let nombre = prompt("Ingresá tu nombre");
  let dni = prompt("Ingresá tu DNI");
  let direccion = prompt("Ingresá tu dirección");
  let telefono = prompt("Ingresá tu teléfono");
  let sucursal = elegirSucursal();
  let horario = prompt("Ingresá el horario deseado (Ej: 10:30)");

  if (
    nombre !== "" &&
    dni !== "" &&
    direccion !== "" &&
    telefono !== "" &&
    sucursal !== "Sucursal no válida" &&
    horario !== ""
  ) {
    let turno = {
      nombre: nombre,
      dni: dni,
      direccion: direccion,
      telefono: telefono,
      sucursal: sucursal,
      horario: horario
    };

    turnos.push(turno);
    alert("¡Turno registrado con éxito!");
    console.log("Turno registrado:", turno);
  } else {
    alert("Error: Todos los campos son obligatorios y la sucursal debe ser válida.");
  }
}

// Función para mostrar todos los turnos
function mostrarTurnos() {
  console.log("Listado de turnos registrados:");
  for (let i = 0; i < turnos.length; i++) {
    let t = turnos[i];
    console.log(
      "Turno " + (i + 1) + ": " + t.nombre + " | DNI: " + t.dni +
      " | Tel: " + t.telefono + " | Dirección: " + t.direccion +
      " | Sucursal: " + t.sucursal + " | Horario: " + t.horario
    );
  }
}

// Llamadas para probar el sistema
registrarTurno();
let otro = prompt("¿Deseás registrar otro turno? (si / no)");

while (otro === "si") {
  registrarTurno();
  otro = prompt("¿Deseás registrar otro turno? (si / no)");
}

mostrarTurnos();
