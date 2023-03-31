// INCREMENTAL 18

let publicacion = {
      id: 1,
      author: 'Sandra',
      likes: 3,
      avatar: '',
      text: 'aslfjasñjdfñlasjdfjkasdf'
};



// RESOLUCION CON ASYNC/AWAIT________________________________________
async function getTotalLikesAwait(id) {
      alert('Conectando al servidor')
      
      await new Promise((resolve) => setTimeout(resolve, 3000));
      alert('Servidor conectado')
      
      if (publicacion.id === id) {
        return publicacion.likes;
      } else {
        throw new Error('La publicación no existe');
      }
}

// llamada a la función con manejador de la promesa (await y try/catch)
async function mostrarLikes() {
      try {
        const likes = await getTotalLikesAwait(1);
        alert(`La publicación tiene ${likes} Likes`);
      } catch (error) {
        alert(error.message);
      }
}

    


// RESOLUCION CON .THEN .CATCH______________________________________
async function getTotalLikes(id) {
      //esto sería redundante porque al hacer gettotalLikes async ya devuelve una promesa
      return new Promise((resolve, reject) => {
            if (publicacion.id === id) {
                  resolve(publicacion.likes);
            } else {
                  reject('La publicación no existe');
            }
      });
}

// Llamada a la función con manejador de la promesa (.then y .catch)

async function getTotalLikesThenCatch() {
      // revisar implementar await o sacar fuera el código
      getTotalLikes(1)
      .then((likes) => {
            alert(`La publicación tiene ${likes} Likes`);
      })
      .catch((error) => {
            alert(error);
      });
}




//RESOLUCION 3________________________________________________________
// const getTotalLikesAwait = async (id) => {
//       const publicacion = await obtenerPublicacion(id);
//       if (publicacion) {
//             return publicacion.likes;
//       } else {
//             throw new Error('La publicación no existe');
//       }
// };
    
// (async () => {
//       try {
//             const likes = await getTotalLikesAwait(1);
//             alert(`La publicación tiene ${likes} Likes`);
//       } catch (error) {
//             alert(error.message);
//       }
// })();
    