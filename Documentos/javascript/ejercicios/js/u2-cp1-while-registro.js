// EJEMPLO 6 WHILE 🚀

alert('Bienvenido a nuestro sitio web');
let registro = prompt('Desea registrarse ? - Ingrese SI o NO ').toUpperCase();

while (registro != 'SI'  && registro != 'NO') {

    alert('Debe colocar SI o NO')

    registro = prompt('Desea registrarse ? - Ingrese SI o NO ')

}

if(registro == 'SI'){
    let nombre = prompt('Ingrese su nombre');
    while(nombre == '' || nombre.length < 3 ){
        alert('Ingrese un nombre válido');
        nombre = prompt('Ingrese su nombre');
    }

    let claveNumerica = Number(prompt('Ingrese su clave numérica de 6 dígitos'));

    while(!Number(claveNumerica) || claveNumerica.toString().length < 6){
        alert('Ingrese una clave numérica válida')
        claveNumerica = Number(prompt('Ingrese su clave numérica de 6 dígitos'));
    }

    alert('Usuario registrado con éxito');

}