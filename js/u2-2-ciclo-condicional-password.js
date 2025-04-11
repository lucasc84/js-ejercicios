//Ciclos condicionales

const password = "1234";

let passwordIngresado = prompt("Introduce la contraseña");

while(passwordIngresado != password) {
    alert("Contraseña incorrecta");
    passwordIngresado = prompt("Introduce la contraseña");
}