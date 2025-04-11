// EJEMPLO 2 FOR 🚀
//      DESDE - HASTA - ACT.
for (let i = 1; i < 5; i++) {
   alert(i);
}


const cantPacientes = Number(prompt('Cuantos pacientes desea registrar?'));

for (let i = 1; i <= cantPacientes; i++) {
    const nombrePaciente = prompt(`Nombre paciente número ${i}`)
    const edad = Number(prompt(`Edad del paciente número ${i}`))    
    const obraSocial = prompt(`Obra social del paciente ${i}`)

    console.log(`Paciente ${nombrePaciente}, de ${edad} años (${obraSocial}), registrado`);

}

