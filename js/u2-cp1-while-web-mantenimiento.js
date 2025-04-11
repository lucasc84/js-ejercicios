// EJEMPLO 7 DO WHILE 🚀

let repetir = false;

do {
  alert("Esta web estará en mantenimineto");
  let pregunta = prompt(
    "Igualmente, tiene alguna consulta? Responderemos por mail"
  ).toUpperCase();

  if (pregunta == "SI") {
    let mail = prompt("Indique su mail");
    console.log(`mail ${mail} registrado, en un momento le responderemos`);
  }

  if (pregunta == "NO") {
    alert("Gracias por su comprensión");
  }

  if (pregunta != 'SI'  && pregunta != 'NO') {
    alert("Por favor responda SI o NO");
  }

} while (repetir);

