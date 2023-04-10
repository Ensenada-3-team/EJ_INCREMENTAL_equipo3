/*
 
Ejercicio Incremental 21 - OBJETOS

Crear las clases y objetos necesarios para manejar los datos de los usuarios de la red social (perfil).
Crear un usuario de prueba con nombre: José Hernández.
Solicitar al menos un atributo por teclado.

Ejercicio Extra 21

Crear una clase llamada “Cuenta” que tendrá los siguientes atributos:
	- titular (que es una persona) y 
	- cantidad (puede tener decimales).
 El titular será obligatorio y la cantidad es opcional. 
 
 Construye los siguientes métodos para la clase:
	- Un constructor, donde los datos pueden estar vacíos.
	- Los setters y getters para cada uno de los atributos. 
	El atributo no se puede modificar directamente, sólo ingresando o retirando dinero.
	- *mostrar(): Muestra los datos de la cuenta.
	- *ingresar(cantidad): se ingresa una cantidad a la cuenta, si la cantidad introducida es negativa, no se hará nada.
	- *retirar(cantidad): se retira una cantidad a la cuenta. La cuenta puede estar en números rojos.

*/

class User  {
	constructor (age, name, secondName, email, location, picture, followers, following, bio, links) {
		this.age = age;
		this.name = name;
		this.secondName = secondName;
		this.email= email;
		this.location=location;
	}

};


let jose = new User("","Jose","Hernandez", "", "")

let pepe = new User()


const updateUser = () => {
	
	jose.age = prompt("Introduce tu edad:");
	// jose.name = prompt("Introduce tu nombre:");
	// jose.secondName = prompt("Introduce tu apellido:");
	jose.email = prompt("Introduce tu email ✉:");
	jose.location = prompt("Introduzca su ubicación:");

	//Mostrar los atributos del usuario en el perfil
	document.getElementById("age").innerHTML = jose.age;
	document.getElementById("name").innerHTML = jose.name;
	document.getElementById("secondName").innerHTML = jose.secondName;
	document.getElementById("email").innerHTML = jose.email;
	document.getElementById("location").innerHTML = jose.location;
};


