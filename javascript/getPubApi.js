const pubList = document.getElementById("lista-publicaciones");

const usuarios = [
      { name: 'Juan', userId: 1 },
      { name: 'María', userId: 2 },
      { name: 'Pedro', userId: 3 },
      { name: 'Ana', userId: 4 },
      { name: 'Carlos', userId: 5 },
      { name: 'Sofía', userId: 6 },
      { name: 'Diego', userId: 7 },
      { name: 'Laura', userId: 8 },
      { name: 'Luis', userId: 9 },
      { name: 'Lucía', userId: 10 },
      { name: 'Marta', userId: 11 },
      { name: 'David', userId: 12 },
      { name: 'Isabel', userId: 13 },
      { name: 'Hugo', userId: 14 },
      { name: 'Cristina', userId: 15 },
      { name: 'Jorge', userId: 16 },
      { name: 'Fernanda', userId: 17 },
      { name: 'Lucas', userId: 18 },
      { name: 'Valentina', userId: 19 },
      { name: 'Pablo', userId: 20 },
      { name: 'Adriana', userId: 21 },
      { name: 'Andrés', userId: 22 },
      { name: 'Gabriela', userId: 23 },
      { name: 'Sebastián', userId: 24 },
      { name: 'Rocío', userId: 25 },
      { name: 'Mario', userId: 26 },
      { name: 'Natalia', userId: 27 },
      { name: 'Gustavo', userId: 28 },
      { name: 'Estefanía', userId: 29 },
      { name: 'Lorena', userId: 30 }
];

async function getUserPosts() {
	const nombreUsuario = prompt(
		"Introduce el nombre de usuario del que quieres ver sus publicaciones"
	);
      
      // busca en el array de usuarios el usuario que tenga su propiedad .name igual que el prompt
	const usuario = usuarios.find((u) => u.name === nombreUsuario);

      //comprueba si el usuaro no existe, y si es así alerta
	if (!usuario) {
		alert(`El usuario ${nombreUsuario} no existe.`);
		return;
	}

      //asigna a userId el valor de la propiedad .userId del usuario concreto
	const userId = usuario.userId;

      //Usa userId como parámetro en el endpoint de la petición a la API
	await fetch(`https://dummyjson.com/posts/user/${userId}`)
		.then((res) => res.json())
		.then((data) => {
			//en caso de que en el contenedor principal existieran pub antigüas:
			//inicializamos el contenedor en una string vacía
			pubList.innerHTML = "";

			//recorremos cada elemento del array 'posts' que está dentro de data
			data.posts.forEach((element) => {
				//creamos un elemento 'div' y le damos la clase card
				let pubContainer = document.createElement("div");
				pubContainer.classList.add("card");

				//creamos un elemento 'p' y le agregamos el contenido title del elemento del array que estamos recorriendo
				let pubTitle = document.createElement("h5");
				pubTitle.textContent = element.title;

				//agregamos 'p' al 'div' y por último agregamos el 'div' ya con todo, al contenedor principal
				pubContainer.appendChild(pubTitle);
				pubList.appendChild(pubContainer);
			});
		})
		.catch((error) => {
			console.error(error);
			alert("Ha ocurrido un error al obtener las publicaciones del usuario.");
		});
}

//{
// 	"posts": [
// 	  {
// 	    "id": 1,
// 	    "title": "His mother had always taught him",
// 	    "body": "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
// 	    "userId": 9,
// 	    "tags": [
// 		  "history",
// 		  "american",
// 		  "crime"
// 	    ],
// 	    "reactions": 2
// 	  },
// 	  {...},
// 	  {...}
// 	  // 30 items
// 	],
// 	"total": 150,
// 	"skip": 0,
// 	"limit": 30
//     }










//{
// 	"posts": [
// 	  {
// 	    "id": 1,
// 	    "title": "His mother had always taught him",
// 	    "body": "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
// 	    "userId": 9,
// 	    "tags": [
// 		  "history",
// 		  "american",
// 		  "crime"
// 	    ],
// 	    "reactions": 2
// 	  },
// 	  {...},
// 	  {...}
// 	  // 30 items
// 	],
// 	"total": 150,
// 	"skip": 0,
// 	"limit": 30
//     }