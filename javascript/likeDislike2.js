function toggleLike(btn) {
    // Obtener el elemento span que muestra el número de likes
    //var likesSpan = btn.nextElementSibling;

    //var likesSpan = btn.parentNode.querySelector(".likes");
    let likesSpan = document.getElementById('sumLikes2')

    // Obtener el número actual de likes
    let likesCount = parseInt(likesSpan.innerHTML);

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
    likesSpan.innerHTML = likesCount;
}

function toggleDislike(btn) {
    // Obtener el elemento span que muestra el número de likes
    //var likesSpan = btn.nextElementSibling;

    //var dislikesSpan = btn.parentNode.querySelector(".dislikes");
    let dislikesSpan = document.getElementById('sumDisLikes2')

    // Obtener el número actual de likes
    let dislikesCount = parseInt(dislikesSpan.innerHTML);

    // Si el botón fue clickeado y ya tiene la clase "liked", entonces restar un like
    if (btn.classList.contains("disliked")) {
        dislikesCount--;
        btn.classList.remove("disliked");
    } else {
      // Si el botón no tenía la clase "liked", entonces sumar un like
        dislikesCount++;
        btn.classList.add("disliked");
    }

    // Actualizar el número de likes en el span correspondiente
    dislikesSpan.innerHTML = dislikesCount;
}
