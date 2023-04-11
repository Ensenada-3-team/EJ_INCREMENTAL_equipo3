//Defino tres variables globales A, B y C,que almacenen los valores ingresados por el usuario para el número de likes de tres fotos.
let A, B, C;

//Función que pide al usuario que ingresar los números de likes de las tres fotos
//los convierta con parseInt() en números enteros
//los asigna a las variables A, B y C respectivamente.
function ingresaValores() {
	alert("Ingresa el nº de likes de tus 3 fotos\nRecuerda que han de ser números distintos.")

	A = parseInt(prompt("Likes de la Foto 1:"))
	B = parseInt(prompt("Likes de la Foto 2:"))
	C = parseInt(prompt("Likes de la Foto 3:"))
}

//Nº primo = número natural mayor que 1 que tiene únicamente dos divisores positivos distintos: él mismo y el 1

//Función que verifica si un número dado es un número primo.
// comprobar si un número es divisible por algún número entero de 2 a su raíz cuadrada, y devolver verdadero si no se encuentra ningún divisor.
function esNumeroPrimo(num) {
      //si el número es menor o igual a uno devuelve false.
	if (num <= 1) {
		return false;
	}
      //utilizo un bucle for para iterar desde 2 hasta la raíz cuadrada del número
	for (let i = 2; i <= Math.sqrt(num); i++) {
		//si el número es divisible por algún número entero devuelve false;
		if (num % i === 0) {
			return false;
		}
	}
      // de lo contrario, devuelve true.
	return true;
}


// Función que inicializa el programa y usa las funciones anteriores para hallar el resultado
function init() {
      //llamo a la función "ingresaValores()" para obtener los valores de likes de las fotos del usuario.
	ingresaValores()

	// Verifico si los valores son distintos
	if (A === B || A === C || B === C) {
            //si no son distintos, muestre una alerta pidiendo al usuario que ingrese tres valores distintos.
		alert("Por favor, introduce tres valores distintos")
	} else {
		//Si son distintos identifico qué número es mayor y qué número es menor
		let mayor = A > B ? (A > C ? A : C) : (B > C ? B : C)
		let menor = A < B ? (A < C ? A : C) : (B < C ? B : C)

            //Verifico si el mayor y menor valor son mayores que 0 y si son números primos utilizando la función "esNumeroPrimo(num)".
		if (
			mayor > 0 &&
			menor > 0 &&
			esNumeroPrimo(mayor) &&
			esNumeroPrimo(menor)
		) {
                  //Muestro número mayor y menor 
                  //si son números primos y positivos lo añade a la alerta si no, no.
			alert(`El mayor valor es: ${mayor} y el menor valor es: ${menor}. Además, ambos son números primos y positivos.`)
		} else {
			alert(`El mayor valor es: ${mayor} y el menor valor es: ${menor}.`)
		}
	}
}

init();
