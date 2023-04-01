const pubList = document.getElementById("lista-publicaciones");
const form = document.getElementById('form-busca-posts')

//creamos un event listener de tipo submit al formulario que recoge la información
//El submit se completa al clicar el botón, recoge los datos que entran por input y aplica la función getUserPosts
form.addEventListener('submit', getUserPosts)

//Recogemos el evento anterior y ejecutamos la función
async function getUserPosts(event) {
	event.preventDefault();

      //capturamos el valor del input
      const input = document.querySelector('#search-username')
      const searchedUser = input.value 

      //Usamos el valor del input como parámetro en el endpoint que devuelve usario por nombre
      await fetch(`https://dummyjson.com/users/search?q=${searchedUser}`)
            .then(res => res.json())
            .then(async (data) => {

                  //Usamos los datos que necesitamos del usuario y los guardamos en variables
                  let userId = data.users[0].id //necesitamos el id para el siguiente fetch
                  let username = data.users[0].firstName
                  let lastName = data.users[0].lastName
                  let userImage = data.users[0].image
                  let nickName = data.users[0].maidenName

                  //Usa userId como parámetro en el endpoint que nos devuelve los posts por ID
                  await fetch(`https://dummyjson.com/posts/user/${userId}`)
                  .then((res) => res.json())
                  .then((data) => {
                        //Eliminamos posts de búsquedas pasadas:
                        //inicializamos el contenedor en una string vacía
                        pubList.innerHTML = "";

                        //Recorremos cada elemento del array 'posts' que está dentro de data (objeto respuesta de la api)
                        data.posts.forEach((post) => {
                              
                              //Creamos el esqueleto de tarjeta post por cada post que nos devuelve la api
                              let html = `
                                    <li class="card border p-4">
                                    <div class="container">
                                    <div class="row d-flex">
                                    <div class="col-lg-4 col-md-4 col-sm-12">
                                          <div>
                                          <img class="img-fluid rounded align-self-start"
                                          src="${userImage}" alt="${username} ${lastName}">
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
                                    <div class="likesCounter d-flex justify-content-between w-100">
                                          <div class="d-flex mt-3">
                                          <div id="sumLikes2">${post.reactions}&nbsp;</div>
                                          <i class="bi bi-heart" style="color: black;"></i>
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
                              ` 

                              //Agregamos todos los nuevos <li> creados a nuestro elemento <ol> del DOM
                              pubList.innerHTML += html;

                        });
                  })
                  .catch((error) => {
                        console.error(error);
                        alert("Ha ocurrido un error al obtener las publicaciones del usuario.");
                  });

            })
            .catch((error) => {
                  console.error(error.message)
            })

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


// {
//       "users": [
//         {
//           "id": 1,
//           "firstName": "Terry",
//           "lastName": "Medhurst",
//           "maidenName": "Smitham",
//           "age": 50,
//           "gender": "male",
//           "email": "atuny0@sohu.com",
//           "phone": "+63 791 675 8914",
//           "username": "atuny0",
//           "password": "9uQFF1Lh",
//           "birthDate": "2000-12-25",
//           "image": "https://robohash.org/hicveldicta.png?size=50x50&set=set1",
//           "bloodGroup": "A−",
//           "height": 189,
//           "weight": 75.4,
//           "eyeColor": "Green",
//           "hair": {
//             "color": "Black",
//             "type": "Strands"
//           },
//           "domain": "slashdot.org",
//           "ip": "117.29.86.254",
//           "address": {
//             "address": "1745 T Street Southeast",
//             "city": "Washington",
//             "coordinates": {
//               "lat": 38.867033,
//               "lng": -76.979235
//             },
//             "postalCode": "20020",
//             "state": "DC"
//           },
//           "macAddress": "13:69:BA:56:A3:74",
//           "university": "Capitol University",
//           "bank": {
//             "cardExpire": "06/22",
//             "cardNumber": "50380955204220685",
//             "cardType": "maestro",
//             "currency": "Peso",
//             "iban": "NO17 0695 2754 967"
//           },
//           "company": {
//             "address": {
//               "address": "629 Debbie Drive",
//               "city": "Nashville",
//               "coordinates": {
//                 "lat": 36.208114,
//                 "lng": -86.58621199999999
//               },
//               "postalCode": "37076",
//               "state": "TN"
//             },
//             "department": "Marketing",
//             "name": "Blanda-O'Keefe",
//             "title": "Help Desk Operator"
//           },
//           "ein": "20-9487066",
//           "ssn": "661-64-2976",
//           "userAgent": "Mozilla/5.0 ..."
//         },
//         {...},
//         {...}
//         // 30 items
//       ],
//       "total": 100,
//       "skip": 0,
//       "limit": 30
//     }