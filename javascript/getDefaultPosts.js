let ol = document.getElementById("lista-publicaciones");

//FUNCIÓN QUE ALEATORIZA UN ARRAY
function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}

//FUNCIÓN QUE CREA UN POST CON NUESTRA ESTRUCTURA HTML
function createPostHTML(userImage, username, lastName, nickName, post) {
	return `
          <li class="card border p-4">
              <div class="container">
                  <div class="row d-flex">
                      <div class="col-lg-4 col-md-4 col-sm-12">
                          <div>
                              <img class="img-fluid rounded align-self-start" src="${userImage}" alt="${username} ${lastName}">
                              <h4 class="mt-3">${username} ${lastName}</h4>
                          </div>
                      </div>
                      <div class="col-lg-8 col-md-8 col-sm-12">
                          <div class="border border-dark sombra rounded p-4 bg-post">
                              <h5 class="fw-bold"><p>@${nickName}</p>${post.title}</h5>
                              <p style="color: black">${post.body}</p>
                          </div>
                      </div>
                  </div>
                  <div class="row">
                      <div class="d-flex justify-content-between w-100">
                          <div class="d-flex mt-2">
                              <div id="sumLikes${post.id}" class="mt-2" style="color: black; font-weight: bold;">${post.reactions}</div>
                              <button id="${post.id}" class="btn like-btn" onclick="toggleLike(this)">
                                  <i class="bi bi-heart-fill"></i>
                              </button>
                              <div id="sumDisLikes${post.id}" class="mt-2"  style="color: black; font-weight: bold;">0</div>
                              <button id="${post.id}" class="btn dislike-btn" onclick="toggleDisLike(this)">
                                  <i class="bi bi-hand-thumbs-down-fill"></i>
                              </button>
                          </div>
                          <div>
                              <button id="commentBtn" class="btn" onclick="">
                                  <i class="bi bi-chat-left-text" style="color: black; font-size: 1.5rem"></i>
                              </button>
                              <button id="shareBtn" class="btn" onclick="">
                                  <i class="bi bi-share" style="color: black; font-size: 1.5rem"></i>
                              </button>
                          </div>
                      </div>
                  </div>
              </div>
          </li>
      `;
}

//FUNCIÓN QUE RECIBE LOS DATOS DE LA API Y USA LAS ANTERIORES FUNCIONES PARA PINTAR LOS POST ALEATORIAMENTE EN EL DOM
async function getAllPosts() {
	try {
		const responseUsers = await fetch("https://dummyjson.com/users");
		const users = await responseUsers.json();
		const postPromises = [];

            //ponemos el interior de la lista en el DOM  a cero
		ol.innerHTML = "";

            //por cada user de la lista 'users'...
		users.users.forEach(async (user) => {
                  //capturamos el id del usuario para usarlo en el siguiente endpoint que nos provee de los posts
			const userId = user.id;

                  //agregamos a la lista de promesas de posts
			postPromises.push(
				fetch(`https://dummyjson.com/posts/user/${userId}`)
					.then((response) => response.json())
					.then((data) => {
                                    //con map creo un nuevo array convirtiendo cada post del array 'posts' en un nuevo elemento HTML con sus parámetros (función arriba)
						const postHTMLArray = data.posts.map((post) =>
							createPostHTML(
								user.image,
								user.username,
								user.lastName,
								user.maidenName,
								post
							)
						);
                                    //retorno la nueva lista
						return postHTMLArray;
					})
					.catch((error) => {
						console.error(error);
						alert( "Ha ocurrido un error al obtener las publicaciones del usuario.");
					})
			);
		});

            //Después del forEach, meto en variable el resultado de esperar a todas las promesas anteriores
		const postArrays = await Promise.all(postPromises);

            //Convierto postArrays en un único array de una sola dimensión  (eliminando los sub-arrays creados antes)
		const onlyOneArrayPosts = postArrays.flat();

            //Aleatorizo el array plano después de haberle aplicado el .flat() con la función shuffleArray()
		const randomPosts = shuffleArray(onlyOneArrayPosts);

            //Agregamos por último al <OL> del dom, cada elemento del array random con .join('')
		ol.innerHTML = randomPosts.join("");

	} catch (error) {
		console.error(error.message);
	}
}

getAllPosts();







//CÓDIGO DESCARTADO POR MALAS PRÁCTICAS.
//LAS DOS PETICIONES TRABAJABAN DE FORMA ASINCRÓNICA Y AGREGABAN ELEMENTOS AL DOM SIN ESPERAR A LA OTRA

// async function getAllPosts() {
// 	try {
// 		const responseUsers = await fetch("https://dummyjson.com/users");
// 		const users = await responseUsers.json();

// 		ol.innerHTML = "";

// 		users.users.forEach(async (user) => {
// 			const userId = user.id;
// 			const username = user.firstName;
// 			const lastName = user.lastName;
// 			const userImage = user.image;
// 			const nickName = user.maidenName;

// 			try {
// 				const response = await fetch(
// 					`https://dummyjson.com/posts/user/${userId}`
// 				);

// 				const data = await response.json();

// 				const htmlArray = data.posts.map((post) => `
//                                     <li class="card border p-4">
//                                     <div class="container">
//                                           <div class="row d-flex">
//                                           <div class="col-lg-4 col-md-4 col-sm-12">
//                                           <div>
//                                                 <img class="img-fluid rounded align-self-start" src="${userImage}" alt="${username} ${lastName}">
//                                                 <h4 class="mt-3">${username} ${lastName}</h4>
//                                           </div>
//                                           </div>
//                                           <div class="col-lg-8 col-md-8 col-sm-12">
//                                           <div class="border border-dark sombra rounded p-4 bg-post">
//                                                 <h5 class="fw-bold"><p>@${nickName}</p>${post.title}</h5>
//                                                 <p style="color: black">${post.body}</p>
//                                           </div>
//                                           </div>
//                                           </div>
//                                           <div class="row">
//                                           <div class="d-flex justify-content-between w-100">
//                                           <div class="d-flex mt-2">
//                                                 <div id="sumLikes${post.id}" class="mt-2" style="color: black; font-weight: bold;">${post.reactions}</div>
//                                                 <button id="${post.id}" class="btn like-btn" onclick="toggleLike(this)">
//                                                 <i class="bi bi-heart-fill"></i>
//                                                 </button>

//                                                 <div id="sumDisLikes${post.id}" class="mt-2"  style="color: black; font-weight: bold;">0</div>
//                                                 <button id="${post.id}" class="btn dislike-btn" onclick="toggleDisLike(this)">
//                                                 <i class="bi bi-hand-thumbs-down-fill"></i>
//                                                 </button>
//                                           </div>
//                                           <div>
//                                                 <button id="commentBtn" class="btn" onclick="">
//                                                 <i class="bi bi-chat-left-text" style="color: black; font-size: 1.5rem"></i>
//                                                 </button>
//                                                 <button id="shareBtn" class="btn" onclick="">
//                                                 <i class="bi bi-share" style="color: black; font-size: 1.5rem"></i>
//                                                 </button>
//                                           </div>
//                                           </div>
//                                           </div>
//                                     </div>
//                                     </li>
//                                     `
// 				);

// 				const sortedPosts = shuffleArray(htmlArray);
// 				ol.innerHTML += sortedPosts.join("");

// 			} catch (error) {
// 				console.error(error);
// 				alert("Ha ocurrido un error al obtener las publicaciones del usuario.");
// 			}
// 		});
// 	} catch (error) {
// 		console.error(error.message);
// 	}
// }
