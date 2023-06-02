//INCREMENTAL 11

buscadorJuniors = () => {
      let name = prompt('Ingresa tu nombre')
      let firstname = prompt('Ingresa tu apellido')
      let añoNacimiento = parseInt(prompt('Ingresa tu año de nacimiento'))
      let numCursos = parseInt(prompt('Ingresa el número de cursos de programación realizados'))
      //Condicion hecha con if
      // if(añoNacimiento < 2000 ) {
      //     alert('¿Estás seguro de que eres un programador Junior?')
      // }
      
      //Condición hecha con operador ternario en vez de con IF 
      añoNacimiento < 2000 ? alert('¿Estás seguro de que eres un programador Junior?') : alert('Ya te queda poquito para ser un pro')
      
      alert(`${name} ${firstname}, naciste en el año ${añoNacimiento} y realizaste ${numCursos + 1} cursos de programación.`)
};

//INCREMENTAL 12

contadorLikes = () => {
      let cantLikes = 0;
      let sumLikes = 0;
      let fotosMenosDe10Likes = 0;
      let numeroFotos = parseInt(prompt('Indique el número de fotos del usuario:'));

      for (let i = 0; i < numeroFotos; i++) {
            cantLikes = prompt(`Indique la cantidad de Likes de la Foto ${i+1}`);
            sumLikes = sumLikes + parseInt(cantLikes);

            if (parseInt(cantLikes) < 10) {
                  fotosMenosDe10Likes = fotosMenosDe10Likes + 1;
            }
      };
      alert('La suma total de Likes es: ' + sumLikes);
      alert('Fotos con menos de 10 Likes: ' + fotosMenosDe10Likes);
};

//INCREMENTAL 13

getMonthName = (string) => {

      const monthStr = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

      let month = parseInt(string.substring(string.indexOf(':')+7, string.indexOf(':')+9 ))

      let monthName = monthStr[month-1];

      alert(`El mes en que te uniste al mundo tecler es ${monthName}.`)
      return monthName;
}

userData = () => {
      let valor
      let closeApp 

      do {
            valor = prompt('¡¡Bienvenid@ Tecler!!\n-Ingrese su id de usuario para obtener sus datos.\n-Ingrese "Salir" para finalizar.').toLowerCase()
            closeApp = ''

            switch (valor) {
                  case '1': 
                        alert('Job Daniel, fecha alta: 2021-09-16')
                        getMonthName('Job Daniel, fecha alta: 2021-09-16')
                        break
                        
                  case '5':
                        alert('Juan, fecha alta: 2021-05-01')
                        getMonthName('Juan, fecha alta: 2021-05-01')
                        break
                  
                  case '6':
                        alert('Jose, fecha alta: 2021-01-01')
                        getMonthName('Jose, fecha alta: 2021-01-01')
                        break

                  case '14':
                        alert('Citlalli, fecha alta: 2021-03-15')
                        getMonthName('Citlalli, fecha alta: 2021-03-15')
                        break

                  case '600':
                        alert('Maria, fecha alta: 2021-03-11 id: 601')
                        getMonthName('Maria, fecha alta: 2021-03-11 id: 601')
                        break

                  case 'salir':
                        alert('Gracias por utilizar nuestra app 😊')
                        break;

                  case '': // en blanco
                        alert('No has introducido ningun dato, ¡prueba de nuevo!')
                        break 
                  
                  case null:
                        closeApp = prompt('¿Estás segur@ de querer salir?\n-Igresa "Si" para finalizar.\n ingresa "No" para continuar.').toLowerCase()
                        break;

                  default:
                        alert('El usuario con ese ID no existe, prueba de nuevo, o teclee "Salir" para finalizar 😊')    
            }; 

      } while (valor !== 'salir' && closeApp !== 'si');

};

//INCREMENTAL 14

sortFriends = () => {
      friendsArr = new Array()
  
      do {
          newFriend = prompt('Introduce el nombre de un amigo\nPara finalizar deja el campo vacío y pulsa "Aceptar"')
          if (newFriend !== null && newFriend !== '') {
                  friendsArr.push(newFriend)
          }
  
      } while(newFriend !== '' && newFriend !== null)
  
      friendsSortedAlphabetically = friendsArr.sort() 
  
      alert(`Tus amigos por orden alfabético:\n${friendsSortedAlphabetically.join('\n')}`)
      console.table(friendsSortedAlphabetically)
};



// INCREMENTAL 18_________________________________________________________________________

let publicacion = {
      id: 1,
      author: 'Sandra',
      likes: 3,
      avatar: '',
      text: 'aslfjasñjdfñlasjdfjkasdf'
};



// INCREMENTAL 18 RESOLUCION CON ASYNC/AWAIT________________
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

    
// INCREMENTAL 18  RESOLUCION CON .THEN .CATCH_______________
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


// INCREMENTAL 18 RESOLUCION 3________________________________________________________
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