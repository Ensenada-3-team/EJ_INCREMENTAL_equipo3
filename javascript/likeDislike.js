//Elemento del DOM donde queremos que se renderice el contador actualizado
let contadorDOM = document.getElementById('sumLikes')
let contadorDOM2 = document.getElementById('sumLikes2')

//Botones del DOM donde añadimos los eventos click / onclick
let likeBtn = document.getElementById('likeBtn')
let dislikeBtn = document.getElementById('dislikeBtn')

let contadorLikes = 0
let contadorLikes2 = 0

sumLikes = () => {
      
      contadorLikes = contadorLikes + 1
      contadorLikes2++
      contadorDOM.innerHTML = `${contadorLikes}` 
      contadorDOM2.innerHTML = `${contadorLikes2}` 

}


removeLikes = () => {
      contadorLikes = contadorLikes - 1
      contadorLikes2--
      contadorDOM.innerHTML = `${contadorLikes}`
      contadorDOM2.innerHTML = `${contadorLikes2}` 
      
}

likeBtn.addEventListener('click', sumLikes )
dislikeBtn.addEventListener('click', removeLikes)


// changeDom = () => {
//       if 
//       document.getElementById('sumLikes').innerHTML = "Aquí va ir un contador real"
// }

// changeDom()

