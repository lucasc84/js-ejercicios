let edad = 36;

if(edad < 18){
    console.log('Usted es menor de edad');
}
if(edad === 35 ){
    console.log('Usted es mayor de edad');
}
else{
    console.log('No sabemos su edad');
}


let temperatura = 20;

if(temperatura > 28){
    console.log('Parece que volvió el verano');
}
else if ( temperatura < 15 ){
    console.log('Dia fresco');
}
else{
    console.log('No sabemo la temp.');
}


let profesor = '';

if (profesor === 'Juan'){
    console.log('Se cumple la cond.');
}
else{
    alert('Ese no es su nombre');
    let nombre = prompt('Cual es su nombre')
    alert(`Su nombre es ${nombre}`)
}