//Elemento del DOM donde queremos que se renderice el contador actualizado
let contadorDOM = document.getElementById('sumLikes')
let contadorDOM2 = document.getElementById('sumLikes2')

//Botones del DOM donde añadimos los eventos click | para onclick en el propio botón no hace falta
let likeBtn = document.getElementById('likeBtn')
let dislikeBtn = document.getElementById('dislikeBtn')

let contadorLikes = 0
let contadorLikes2 = 0

// EJ. PUBLICACIÓN 1: CREANDO EVENTO CON addEventListenr
sumLikes = () => {
      contadorLikes = contadorLikes + 1
      contadorDOM.innerHTML = `${contadorLikes}`     
};

removeLikes = () => {
      contadorLikes = contadorLikes - 1
      contadorDOM.innerHTML = `${contadorLikes}` 
};

likeBtn.addEventListener('click', sumLikes );
dislikeBtn.addEventListener('click', removeLikes);

// EJ. PUBLICACIÓN 2: CREADO EVENTO DIRECTAMENTE EN EL BOTON CON onclick

//para ello creamos dos funciones nuevas que son llamadas por el onclick.
sumLikesOn = () =>  {
      contadorLikes2++
      contadorDOM2.innerHTML = `${contadorLikes2}` 
}

removeLikesOn = () => {
      contadorLikes2--
      contadorDOM2.innerHTML = `${contadorLikes2}` 
}


// Ejemplo de cambio de HTML en el elemento del DOM que queramos

// changeDom = () => {
//       if 
//       document.getElementById('sumLikes').innerHTML = "Aquí va ir un contador real"
// }

// changeDom()

