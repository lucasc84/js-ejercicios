// EJEMPLO 1 🚀

// THIS ==> HACE REFERENCIA A C/U DE LAS PROPIEDADES DEL OBJETO QUE SE ESTÁ CREANDO AL INSTANCIAR LA FN CON NEW()

// const personas = []

// function Persona(nombre,edad,calle){
//     this.nombre = nombre;
//     this.edad = edad;
//     this.calle = calle;
// }

// const persona1 = new Persona('NombreUno', 22 , 'CalleUno')
// const persona2 = new Persona('NombreDos', 23 , 'CalleDos')
// const persona3 = new Persona('NombreTres', 24 , 'CalleTres')

// console.log(persona1, persona2,persona3);

// personas.push(persona1,persona2,persona3)
// console.log(personas);



// EJEMPLO 2 🚀

// function Persona(nombre,edad,calle){
//     this.nombre = nombre;
//     this.edad = edad;
//     this.calle = calle;
//     this.hablar = function(){
//         console.log(`Mi nombre es ${this.nombre}`);
//     }
// }

// const persona1 = new Persona('NombreUno', 22 , 'CalleUno')
// const persona2 = new Persona('NombreDos', 23 , 'CalleDos')
// const persona3 = new Persona('NombreTres', 24 , 'CalleTres')

// persona1.hablar()
// persona2.hablar()


// EJEMPLO 3 CLASE - METODOS 🚀

// class Producto {
//     constructor(nombre,precio){
//         this.nombre = nombre;
//         this.precio = precio;
//         this.vendido = false;
//     }

//     sumarIva(){
//         return this.precio = this.precio * 1.21
//     }
//     vender(){
//         return this.vendido= true;
//     }
// }


// EJEMPLO 4 -setItem 🚀

// const prod1 = new Producto('Yerba', 4000);
// const prod2 = new Producto('Café', 6500);

// console.log(prod1,prod2);

// console.log(prod1.sumarIva(), prod1.vender());


// function saludar(){

//     const nombreGuardado=localStorage.getItem('nombre');

//     if(nombreGuardado){
//         console.log(`Bienvenido nuevamente ${nombreGuardado}`);
//     }
//     else{
//         const nombre = prompt('Cual es tu nombre ?');

//         if(nombre){
//             localStorage.setItem('nombre', nombre)
//             console.log(`Hola ${nombre}! Registrado!`);
//         }
//         else{
//             console.log('Bievenido a nuestro sitio web!');
//         }
//     }

// }



// saludar()




// EJEMPLO 1 🚀

// localStorage.clear();
// localStorage.setItem('Bienvenida', 'Hola');
// localStorage.setItem('valorBoolean', true);
// localStorage.setItem('EsUnNumero', 100)

// console.log(localStorage);


// EJEMPLO 2 🚀

// console.log(localStorage.getItem('Bienvenida'))
// console.log(localStorage.getItem('valorBoolean'))
// console.log(localStorage.getItem('EsUnNumero'))


// EJEMPLO 3 🚀


// sessionStorage.setItem('Bienvenida', 'Hola');
// sessionStorage.setItem('valorBoolean', true);
// sessionStorage.setItem('EsUnNumero', 100)


// EJEMPLO 4 🚀

// localStorage.clear()
// console.log(localStorage);


// EJEMPLO 5 🚀

// const nombre1 = {

//     id:1,
//     codigo:100

// }

// localStorage.setItem('nombreUno', nombre1)
// console.log(localStorage);


// EJEMPLO 6 🚀

// const nombre1 = {

//     id:1,
//     codigo:100

// }

// const enJson = JSON.stringify(nombre1)

// localStorage.setItem('nombreUno', enJson)
// console.log(localStorage);


// EJEMPLO 7 🚀

// const nombre1 = {

//     id:1,
//     codigo:100

// }

// const enJson = JSON.stringify(nombre1)

// localStorage.setItem('nombreUno', enJson)
// console.log(localStorage);


// const data = localStorage.getItem('nombreUno')

// const enObjeto= JSON.parse(data)

// console.log(enObjeto);

// EJEMPLO 8 🚀

// const prodCelulares = [
//     {
//         nombre : 'Samsung',
//         precio:500000
//     },
//     {
//         nombre : 'Nokia',
//         precio:400000
//     },
//     {
//         nombre : 'Motorola',
//         precio:600000
//     }
// ]

// localStorage.setItem('listaProductos', JSON.stringify(prodCelulares) );


// class Producto {
//     constructor(objeto){
//         this.nombre = objeto.nombre;
//         this.precio = objeto.precio;
//     }

//     sumarIva(){
//         return this.precio = this.precio * 1.21 ;
//     }

//     nombreCel(){
//         return this.nombre;
//     }

// }

// const almacenados = JSON.parse(localStorage.getItem('listaProductos'));

// const productos = [];


// for (const objeto of almacenados) {

//     productos.push(new Producto(objeto))

    
// }

// for (const celular of productos) {

//     console.log(celular.nombreCel());
//     console.log(celular.sumarIva());
//     console.log('-------------------------------------');
    
// }


