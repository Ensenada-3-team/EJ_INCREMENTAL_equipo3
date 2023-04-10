function toggleLike(btn) {

      // Obtener el elemento div que muestra el número de likes
      let likesDiv = document.getElementById(`sumLikes${btn.id}`)
  
      // Obtener el número actual de likes
      let likesCount = parseInt(likesDiv.innerHTML);
  
      // Si el botón fue clickeado y ya tiene la clase "liked", entonces restar un like
      if (btn.classList.contains("liked")) {
          likesCount--;
          btn.classList.remove("liked");
      } else {
        // Si el botón no tenía la clase "liked", entonces sumar un like
          likesCount++;
          btn.classList.add("liked");
      }
  
      // Actualizar el número de likes en el span correspondiente
      likesDiv.innerHTML = likesCount;
}
  
function toggleDisLike(btn) {

      // Obtener el elemento div que muestra el número de likes
      let dislikesDiv = document.getElementById(`sumDisLikes${btn.id}`)

      // Obtener el número actual de dislikes
      let dislikesCount = parseInt(dislikesDiv.innerHTML);

      // Si el botón fue clickeado y ya tiene la clase "disliked", entonces restar un dislike
      if (btn.classList.contains("disliked")) {
            dislikesCount--;
            btn.classList.remove("disliked");
      } else {
            // Si el botón no tenía la clase "disliked", entonces sumar un dislike
            dislikesCount++;
            btn.classList.add("disliked");
      }

      // Actualizar el número de likes en el div correspondiente
      dislikesDiv.innerHTML = dislikesCount;
}
