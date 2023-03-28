//FUNCIONES


//INCREMENTAL 11
buscadorJuniors = () => {
      let nombre = prompt('Ingresa tu nombre')
      let apellido = prompt('Ingresa tu apellido')
      let añoNacimiento = parseInt(prompt('Ingresa tu año de nacimiento'))
      let numCursos = parseInt(prompt('Ingresa el número de cursos de programación realizados'))
      //Condicion hecha con if
      if(añoNacimiento < 2000 ) {
            alert('¿Estás seguro de que eres un programador Junior?')
      }
      
      //Condición hecha con operador ternario en vez de con IF 
      añoNacimiento < 2000 ? alert('¿Estás seguro de que eres un programador Junior?') : alert('Ya te queda poquito para ser un pro')
      
      alert(`${nombre} ${apellido}, naciste en el año ${añoNacimiento} y realizaste ${numCursos + 1} cursos de programación.`)
};

// buscadorJuniors()

//EXTRA 11
inicioSesion = () => {
      let user = prompt('Ingrese su Usuario')
      let password = prompt('Ingrese su contraseña')

}


//INCREMENTAL  12
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

// contadorLikes()



//EXTRA 12
userOption = () => {
      let select

      do {
            select = prompt("Ingrese '1' si quiere los números impares, '2' si quiere los números pares o 'Salir' para finalizar")
            
            if (select === '1' && select !== 'Salir'){
                  for (let i = 19; i >= 0; i-=2 ) {
                        console.log(i)
                  }
                  console.log('Cuenta atrás de números impares ⬆')

            } else if (select === '2'  && select !== 'Salir') {
                  for (let i = 20; i >= 0; i-=2) {
                        console.log(i)    
                  }
                  console.log('Cuenta atrás de números pares ⬆')

            } else if (select !== '1' && select !== '2' && select !== "Salir") {
                  alert('El número introducido no es válido, vuelve a probar')

            } else {
                  alert('Gracias por utilizar nuestra app 😁')
            }

      } while (select !== 'Salir')
};

// userOption()


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
            valor = prompt('¡¡Bienvenid@ Tecler!!\n-Ingrese su id de usuario para obtener sus datos.\n-Ingrese "Salir" para finalizar.')
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
                        closeApp = prompt('¿Estás segur@ de querer salir?\n-Igresa "Si" para finalizar.\n ingresa "No" para continuar.')
                        break;

                  default:
                        alert('El usuario con ese ID no existe, prueba de nuevo, o teclee "Salir" para finalizar 😊')    
            }; 
        
      } while (valor !== 'salir' && closeApp !== 'si');
      
};

// userData()


//EXTRA 13

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

// sortFriends()


//EXTRA 14

let carros = ["Nissan March", "Chevrolet Aveo", "Volkswagen Taos", "KIA Rio Sedan"];
let elements = ["Hyundai Creta", "Nissan Versa"]

deleteLastElement = (arr) => {
      arr.pop()
      console.table(arr)
};

addElementToEnd = (arr, element) => {
      arr.push(element)
      console.table(arr)
};

spliceElement = (arr, element) => {
      arr.splice(0,0, element)
      console.table(arr)
};

// deleteLastElement(carros);
// addElementToEnd(carros, elements[0]);
// spliceElement(carros, elements[1]);


//EXTRA 16

let form = document.querySelector('form')
let listaDOM = document.getElementById('listaTareas') //ul


form.addEventListener('submit', function(e) {
      e.preventDefault();

      //Guardamos en una variable el valor que entra por input
      let nuevaTarea = document.querySelector('#tarea').value 
      
      //creamos un elemento li  y le agregamos el contenido de nuevaTarea
      const li = document.createElement('li'); //creamos el elemento li 
      li.textContent = nuevaTarea;

      //Creamos un elemento botton de eliminar y le agregamos contenido
      const deleteBtn = document.createElement('button')
      deleteBtn.textContent = 'Eliminar' //!! si no, no se ve

      //Agregamos un event listener al botón que borre el elemento li
      deleteBtn.addEventListener('click', function(){
            li.remove()
      })

      //Agregamos el botón al elemento li, y el elemento li a la ul
      li.appendChild(deleteBtn)
      listaDOM.appendChild(li);

      //Borramos el valor residual del input
      document.querySelector('#tarea').value = '';
      
})




// INCREMENTAL 17

const eliminarCuentaBtn = document.querySelector('#eliminar-cuenta');
eliminarCuentaBtn.addEventListener('click', confirmarEliminacionCuenta);


function confirmarEliminacionCuenta() {
const confirmacion = confirm('¿Estás seguro de que deseas eliminar tu cuenta? Esta acción no se puede deshacer.');

if (confirmacion) {
      eliminarCuenta();
}
}


async function eliminarCuenta() {
try {
      // Simulamos la eliminación de la cuenta del usuario ficticio
      const usuarioFicticio = { nombre: 'John', apellido: 'Doe', email: 'johndoe@example.com' };
      delete usuarioFicticio;

      // Esperamos 2 segundos para simular una solicitud asincrónica al servidor
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Redireccionamos al usuario a la página de inicio de sesión
      window.location.href = '/login';
      
      } catch (error) {
            console.error(error);
      }
}
    
    
    
    
    