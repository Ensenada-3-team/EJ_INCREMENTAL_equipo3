//Elementos del DOM donde queremos que se renderice el contador actualizado
let contadorDOM = document.getElementById('sumLikes') // addEventListener
let contadorDOM2 = document.getElementById('sumLikes2') //onclick

//Botones del DOM donde añadimos los eventos click (para onclick en el propio botón no hace falta)
let likeBtn = document.getElementById('likeBtn')
let dislikeBtn = document.getElementById('dislikeBtn')

//Inicializamos en cero ambos contadores
let contadorLikes = 0
let contadorLikes2 = 0

// EJ. PUBLICACIÓN 1: CREANDO EVENTO CON addEventListenerr
sumLikes = () => {
      contadorLikes = contadorLikes + 1
      contadorDOM.innerHTML = `${contadorLikes} &nbsp `  //agrega un espacio en blanco 
};

removeLikes = () => {
      contadorLikes = contadorLikes - 1
      contadorDOM.innerHTML = `${contadorLikes} &nbsp` 
};

likeBtn.addEventListener('click', sumLikes );
dislikeBtn.addEventListener('click', removeLikes);


// EJ. PUBLICACIÓN 2: CREADO EVENTO DIRECTAMENTE EN EL BOTON CON onclick
//para ello creamos dos funciones nuevas que son llamadas por el onclick.
sumLikesOn = () =>  {
      contadorLikes2++
      contadorDOM2.innerHTML = `${contadorLikes2}&nbsp` 
}

removeLikesOn = () => {
      contadorLikes2--
      contadorDOM2.innerHTML = `${contadorLikes2} &nbsp` 
}

//Ejemplo de acceder a elementos del DOM por su ID y cambiar su HTML
// changeDom = () => {
//       document.getElementById('sumLikes').innerHTML = "Aquí va ir un contador real"
// }

// changeDom()

