// la variable local es como algo que está en tu casa, la variable global es algo que está en la calle: desde tu casa puedes ver lo que está adentro Y lo que está en la calle, pero desde la calle no puedes ver lo que hay dentro de tu casa.


//EJEMPLOS - VAS A TENER QUE DESCOMENTAR APRA IRLOS PROBANDO PORQUE SINO GENERAR ERROR
// https://platzi.com/blog/como-funciona-el-scope-en-javascript/

// EJEMPLO 1

// A)

// function platzi() {
// 	const soyEstudiante = true;
// 	console.log(soyEstudiante);
// }

// platzi(); // true
// console.log(soyEstudiante); // soyEstudiante is not defined

// B)

// const soyEstudiante = true;

// function platzi() {
// 	console.log(soyEstudiante);
// }

// platzi(); //true
// console.log(soyEstudiante); //true

// EJEMPLO 2

// A)


// let platzi = 'Esto está fuera del bloque';

// if (true) {
// 	let platzi = 'Esto está dentro del bloque';
// 	console.log(platzi); //Esto está dentro del bloque
// }

// console.log(platzi) //Esto está fuera del bloque

// B)

// let platzi = 'Esto está afuera del bloque';

// if (true) {
// 	...
// }

// let platzi = 'Misma variable declarada dos veces'; // Error, platzi has already been declared


// EJEMPLO 3

function afuera() {
	let variable_afuera = 'Esta variable está declarada afuera';

	function adentro() {
		let variable_adentro = 'Esta variable está declarada adentro';
		console.log(variable_afuera); // Esta variable está declarada afuera
	}

	console.log(variable_adentro); // variable_adentro is not defined
}

