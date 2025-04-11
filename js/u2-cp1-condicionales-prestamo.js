// EJEMPLO 1 CONDICIONALES 🚀

let nombre = prompt('Ingrese su nombre');
alert(`Hola ${nombre}, bienvenido a nuestro servicio de prestamos`);
alert(`Recuerde que para acceder debe ser mayor a 18 años`)

const anioNacimiento = Number(prompt('Ingrese su año de nacimiento para saber su edad'));

if((!Number(anioNacimiento) || anioNacimiento == '')){
    console.log('Debe ingresar un dato numérico');
}

else if(anioNacimiento === 2007){
    const mesNacimiento= Number(prompt('Ingrese el número correspondiente al mes en que nació'))

    if(mesNacimiento >= 5){
        console.log('Aún es menor de edad, debe esperar a ser mayor de 18 años');
    }
    else if(mesNacimiento === 4){

        const fechaNacimiento = Number(prompt('Ingrese el número correspondiente a la fecha en que nació'));

        if(fechaNacimiento == 8){
            console.log('Feliz cumpleaños 🎉!');
        }

        else if(fechaNacimiento > 8 && fechaNacimiento <=30){
            console.log('Debe esperar unos días hasta cumplir la mayoría de edad');
        }

        else{
            console.log('Bienvenido');
        }

    }

    else if(mesNacimiento === 1 && mesNacimiento <=3){

        console.log('Bienvenido, usted es mayor 😎');

    }

}

else if(anioNacimiento < 1955 ){
    console.log('Debe ser menor a 70 años');
}

else if(anioNacimiento >= 2008 && anioNacimiento <= 2024){
    console.log('Usted es menor de edad, no puede solictar préstamos');
}
else if(anioNacimiento >= 1954  && anioNacimiento <= 2005){

    console.log('Bienvenido');

}

else if(anioNacimiento.toString().length >= 5 ){

    console.log('No es un año válido');

}

else{
    console.log('Ingrese un dato válido');
}