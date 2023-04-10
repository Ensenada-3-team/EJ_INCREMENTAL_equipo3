/*
 
Ejercicio Incremental 21 - OBJETOS

Crear las clases y objetos necesarios para manejar los datos de los usuarios de la red social (perfil).
Crear un usuario de prueba con nombre: José Hernández.
Solicitar al menos un atributo por teclado.

Ejercicio Extra 21

Crear una clase llamada "Cuenta" que tendrá los siguientes atributos:
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

//Creación de clase con atributos en forma de parámetro
class User {
	constructor(
		age,
		name,
		secondName,
		email,
		location,
		picture,
		followers,
		following,
		bio,
		links
	) {
		this.age = age;
		this.name = name;
		this.secondName = secondName;
		this.email = email;
		this.location = location;
		this.picture = picture || null;
		this.followers = followers || null;
		this.following = following || null;
		this.bio = bio || null;
		this.links = links || null;
	}
}

let jose = new User("", "Jose", "Hernandez", "", ""); // tienen que ir todos, y en el mismo orden que en el constructor
let pepe = new User(); //se puede crear sin valores para agregarselos luego


//Ejemplo de creacion de clase con constructor que recibe objeto como parámetro
//De esta forma no hace falta pasar los parámetros en el mismo orden

// con valores por defecto
class User2 {
	constructor({
		age = 0,
		name = "",
		secondName = "",
		email = "",
		location = "",
		picture = "",
		followers = 0,
		following = 0,
		bio = "",
		links = {},
	} = {}) {
		this.age = age;
		this.name = name;
		this.secondName = secondName;
		this.email = email;
		this.location = location;
		this.picture = picture;
		this.followers = followers;
		this.following = following;
		this.bio = bio;
		this.links = links;
	}
}


let maria = new User2({            // agrego los valores de los atributos a través de un objeto
	secondName: "Pescador",      // el orden ya no importa (si el constructor recibe objetos (destructuring))
	age: 33,
	email: "mariapescador@gmail.com",
	location: "Gijón",
	name: "María",
});



//sin valores por defecto
class User3 {
	constructor({
		age,
		name,
		secondName,
		email,
		location,
		picture,
		followers,
		following,
		bio,
		links,
	}) {
		this.age = age;
		this.name = name;
		this.secondName = secondName;
		this.email = email;
		this.location = location;
		this.picture = picture;
		this.followers = followers;
		this.following = following;
		this.bio = bio;
		this.links = links;
	}
}


let sandra = new User3({           // puedo no pasar algun atributo y no da problemas
	secondName: "Martinez",
	age: 33,
	location: "Las Bahamas",
	name: "Sandra",
});

let edgar = new User3({});


// FUNCION ONCLICK DEL BOTÓN QUE PINTA LOS VALORES EN EL DOM
const updateUser = () => {
// 	sandra.age = prompt("Introduce tu edad:");
// 	sandra.name = prompt("Introduce tu nombre:");
// 	sandra.secondName = prompt("Introduce tu apellido:");
	sandra.email = prompt("Introduce tu email ✉:");
// 	sandra.location = prompt("Introduzca su ubicación:");

	//Mostrar los atributos del usuario en el perfil
	document.getElementById("age").innerHTML = sandra.age;
	document.getElementById("name").innerHTML = sandra.name;
	document.getElementById("secondName").innerHTML = sandra.secondName;
	document.getElementById("email").innerHTML = sandra.email;
	document.getElementById("location").innerHTML = sandra.location;
	
};
