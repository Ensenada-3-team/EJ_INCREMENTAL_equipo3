/*
 
Ejercicio Incremental 21 - OBJETOS

Crear las clases y objetos necesarios para manejar los datos de los usuarios de la red social (perfil).
Crear un usuario de prueba con nombre: José Hernández.
Solicitar al menos un atributo por teclado.

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
// 	sandra.age = prompt("Introduce tu age:");
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



/* INCREMENTAL + EXRA (resuelto en el mismo ejercicio) 22 */

//PSEUDOCÓDIGO
/*
 1. Inicio

2.Defino TRES VARIABLES globales A, B y C,que almacenen los valores ingresados por el usuario para el número de likes de tres fotos.

3.FUNCIÓN que pide al usuario que ingresar los números de likes de las tres fotos -- ingresaValores()
      //los convierta con parseInt() en números enteros
      //los asigna a las variables A, B y C respectivamente.
        
4.FUNCIÓN que verifica si un número dado es un número primo. -- esNumeroPrimo()
      // comprobar si un número es divisible por algún número entero de 2 a su raíz cuadrada, y devolver verdadero si no se encuentra ningún divisor.

            // si el número es menor o igual a uno devuelve false.
      // utilizo un bucle for para iterar desde 2 hasta la raíz cuadrada del número
            // si el número es divisible por algún número entero devuelve false;
            // de lo contrario, devuelve true.

5. FUNCIÓN que inicializa el programa y usa las funciones anteriores para hallar el resultado -- init()
      // llamo a la función "ingresaValores()" para obtener los valores de likes de las fotos del usuario.
      // Verifico si los valores son distintos
            // si no son distintos, muestre una alerta pidiendo al usuario que ingrese tres valores distintos.
      // Si son distintos identifico qué número es mayor y qué número es menor
      // Verifico si el mayor y menor valor son mayores que 0 y si son números primos utilizando la función "esNumeroPrimo(num)".
      // Muestro número mayor y menor 
      // si son números primos y positivos lo añade a la alerta si no, no.

6. Fin

((NOTA: Nº primo = número natural mayor que 1 que tiene únicamente dos divisores positivos distintos: él mismo y el 1))
*/

let A, B, C;

function ingresaValores() {
	alert(
		"Ingresa el nº de likes de tus 3 fotos\nRecuerda que han de ser números distintos."
	);

	A = parseInt(prompt("Likes de la Foto 1:"));
	B = parseInt(prompt("Likes de la Foto 2:"));
	C = parseInt(prompt("Likes de la Foto 3:"));
}

function esNumeroPrimo(num) {
	if (num <= 1) {
		return false;
	}

	for (let i = 2; i <= Math.sqrt(num); i++) {
		if (num % i === 0) {
			return false;
		}
	}

	return true;
}

function init() {
	ingresaValores();

	if (A === B || A === C || B === C) {
		alert("Por favor, introduce tres valores distintos");
	} else {
		let mayor = A > B ? (A > C ? A : C) : B > C ? B : C;
		let menor = A < B ? (A < C ? A : C) : B < C ? B : C;

		if (
			mayor > 0 &&
			menor > 0 &&
			esNumeroPrimo(mayor) &&
			esNumeroPrimo(menor)
		) {
			alert(
				`El mayor valor es: ${mayor} y el menor valor es: ${menor}. Además, ambos son números primos y positivos.`
			);
		} else {
			alert(`El mayor valor es: ${mayor} y el menor valor es: ${menor}.`);
		}
	}
}

// SOLUCION SORT (DAVID)

function encontrarMayormenor(A, B, C) {
	let valores = [A, B, C];
	valores.sort(function (a, b) {
		return a - b;
	});
	console.log(
		`El valor mayor es: ${valores[2]}, y el valor menor es: ${valores[0]}`
	);
}

function pedirValores() {
	do {
		A = parseInt(prompt("Ingrese el valor de A:"));
		B = parseInt(prompt("Ingrese el valor de B:"));
		C = parseInt(prompt("Ingrese el valor de C:"));

		if (A === B || A === C || B === C) {
			alert("ALERTA: Dos o más valores son iguales. Intente de nuevo.");
		}

		return encontrarMayormenor(A, B, C);
	} while (A === B || A === C || B === C);
}

//INCREMENTAL 23 - ORDENAR AMIGOS

//CREACIÓN DE FUNCIÓN SWAP QUE MUEVE valores entre los índices del array que queremos ordenar
//NECESITAMOS ESTA FUNCIÓN PARA IMPLEMENTAR FUNCIÓN BURBUJA
function swap(myArr, indexOne, indexTwo) {
	var tmpVal = myArr[indexOne];
	myArr[indexOne] = myArr[indexTwo];
	myArr[indexTwo] = tmpVal;

	return myArr;
}
var myArr = ["a", "b", "c", "d"];
console.log(swap(myArr, 0, 1)); // ["b", "a", "c", "d"]

//CREACIÓN FUNCIÓN BURBUJA
function burbuja(myArr) {
	var size = myArr.length;

	for (var pass = 1; pass < size; pass++) {
		//LOOP EXTERNO
		for (var left = 0; left < size - pass; left++) {
			//LOOP INTERNO
			var right = left + 1;
			if (myArr[left] > myArr[right]) {
				swap(myArr, left, right);
			}
		}
	}
	return myArr;
}
var myArr = ["d", "f", "d", "c", "a", "e", "b"];
console.log(burbuja(myArr)); // ["a", "b", "c", "d", "d", "e", "f"]
