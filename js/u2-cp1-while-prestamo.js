// EJEMPLO 8 SWITCH - CONDICONALES - WHILE 🚀

alert('Bienvenido a nuestro sitio web');

let registro = prompt('Desea registraerse ? SI o NO').toUpperCase();

while (registro != 'SI' && registro != 'NO') {

    alert('Debe colocar SI o NO')
    registro = prompt('Desea registrarse ? SI o NO');
    
}

if(registro == 'SI'){

    let nombre = prompt('Ingrese su nombre');
    while(nombre == '' || nombre.length < 3 ){
        alert('Ingrese un nombre válido (mayor a 3 caracteres)');
        nombre = prompt('Ingrese su nombre');
    }

    let claveNumerica = Number(prompt('Ingrese su clave numérica de 6 dígitos'));

    while(!Number(claveNumerica) || claveNumerica.toString().length < 6){
        alert('Ingrese una clave numérica válida')
        claveNumerica = Number(prompt('Ingrese su clave numérica de 6 dígitos'));
    }

    alert('Usuario registrado con éxito');
}


let prestamo = prompt('Desea un prestamo?').toUpperCase();

if(prestamo == 'SI' ){

    const banco = prompt('Ingrese su banco').toUpperCase();
    const monto= Number(prompt('Ingrese el monto de su préstamo'));

    let interes;


    switch(banco){
        case 'SANTANDER':
            interes=1.12;
            break;
            case 'MACRO':
                interes=1.25;
                break;
                case 'NACION':
                    interes = 1.9;
                    break;
                    case 'GALICIA':
                        interes=2.5;
                        break;
                        default:
                            alert('No ingresaste un banco válido')
    }

    alert(`Tu monto a devolver al banco ${banco} es de ${monto * interes}`)
}

