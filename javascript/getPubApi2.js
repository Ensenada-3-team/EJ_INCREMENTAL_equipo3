const pubList = document.getElementById("lista-publicaciones");


async function getUserPosts() {
	
      await fetch('https://dummyjson.com/users/search?q=John')
            .then(res => res.json())
            .then(async (data) => {

                  let userId = data.users[0].id
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