/*
 
Ejercicio Incremental 21 - OBJETOS

Crear las clases y objetos necesarios para manejar los datos de los usuarios de la red social (perfil).
Crear un usuario de prueba con nombre: José Hernández.
Solicitar al menos un atributo por teclado.

Ejercicio Extra 21

Crear una clase llamada “Cuenta” que tendrá los siguientes atributos: titular (que es una persona) y cantidad (puede tener decimales).
 El titular será obligatorio y la cantidad es opcional. Construye los siguientes métodos para la clase:
- Un constructor, donde los datos pueden estar vacíos.
- Los setters y getters para cada uno de los atributos. El atributo no se puede modificar directamente, sólo ingresando o retirando dinero.
- *mostrar(): Muestra los datos de la cuenta.
- *ingresar(cantidad): se ingresa una cantidad a la cuenta, si la cantidad introducida es negativa, no se hará nada.
- *retirar(cantidad): se retira una cantidad a la cuenta. La cuenta puede estar en números rojos.

*/

let user = {
	age: "",
	name: "",
	secondName: "",
	email: "",
	location: "",
};

const updateUser = () => {
	
	user.age = prompt("Introduce tu edad:");
	user.name = prompt("Introduce tu nombre:");
	user.secondName = prompt("Introduce tu apellido:");
	user.email = prompt("Introduce tu email ✉:");
	user.location = prompt("Introduzca su ubicación:");

	//Mostrar los atributos del usuario en el perfil
	document.getElementById("age").innerHTML = user.age;
	document.getElementById("name").innerHTML = user.name;
	document.getElementById("secondName").innerHTML = user.secondName;
	document.getElementById("email").innerHTML = user.email;
	document.getElementById("location").innerHTML = user.location;
};


