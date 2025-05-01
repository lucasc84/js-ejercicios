let productos = []; // Array principal
let contadorID = 1; // Variable para generar un ID único a cada producto

// Clase Producto
class Producto {
    constructor(nombre, precio, cantidad) {
        this.id = contadorID++; // Genera un ID único para cada producto
        this.nombre = nombre; // Nombre del producto
        this.precio = precio; // Precio unitario del producto
        this.cantidad = cantidad; // Cantidad del producto
        this.subtotal = this.calcularSubtotal(); // Calcula el subtotal automáticamente
    }

    // Método para calcular el subtotal
    calcularSubtotal() {
        return this.precio * this.cantidad;
    }
}

// Agregar productos al array
productos.push(new Producto("Laptop", 1500, 2)); // 2 unidades de Laptop
productos.push(new Producto("Celular", 800, 1)); // 1 unidad de Celular
productos.push(new Producto("Silla", 120, 4)); // 4 unidades de Silla
productos.push(new Producto("Mesa", 200, 3)); // 3 unidades de Mesa
productos.push(new Producto("Auriculares", 50, 5)); // 5 unidades de Auriculares

// Mostrar los productos en la consola
console.log(productos);