// ¿Qué son las Funciones Anónimas?
// Las funciones anónimas son funciones sin nombre que pueden ser asignadas a variables, pasadas como argumentos o ejecutadas inmediatamente. Son útiles para encapsular lógica que no necesita reutilizarse o referenciarse directamente

const suma = function(a, b) {
    return a + b;
};
console.log(suma(5, 3)); // Salida: 8


(function() {
    let mensaje = "Ejecutada al instante";
    console.log(mensaje);
})();