
var nombre;
var apellidos;
var fechaNacimiento;
var numCursos;

nombre = prompt("Ingrese su nombre");  
apellidos = prompt("Ingrese sus apellidos");
fechaNacimiento = prompt("Ingrese su fecha de nacimiento en formato dd-mm-aaaa");
numCursos = parseInt(prompt("Ingrese el número de cursos de programación realizados"));

//Comparar fecha nacimiento

var fechaNacimiento =  new Date(fechaNacimiento);
var añoFecha =  fechaNacimiento.getFullYear();

if (añoFecha <2000){
    alert("¿Estas seguro de que eres un programador junior?")
};

//Mostrar datos introducidos en la consola



numCursos = numCursos + 1 ;
console.log("Nombre y apellidos:" + " " + nombre + " " + apellidos);
console.log("Fecha de nacimiento:" + " " + fechaNacimiento);    //Me da fecha completa del día, no el dd-mm-aaaa)
console.log("Número de cursos realizados:" + " " + numCursos);


