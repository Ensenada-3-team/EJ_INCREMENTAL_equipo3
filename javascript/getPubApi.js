
const pubList = document.getElementById('lista-publicaciones')

async function getUserPosts() {

	let userId = parseInt(prompt('Introduce el id de usuario del que quieres ver sus publicaciones'))
	await fetch(`https://dummyjson.com/posts/user/${userId}`)
	.then(res => res.json())
	.then((data) => {

		pubList.innerHTML = ""
		data.posts.forEach(element => {
			let pubContainer = document.createElement('div')
			pubContainer.classList.add('card')
			let pubTitle = document.createElement('p')
			pubTitle.textContent = element.title

			pubContainer.appendChild(pubTitle)
			pubList.appendChild(pubContainer)
		});
	})
	.catch((error) => {
		console.error(error)
		alert('El usuario que tratas de buscar no existe.😪')
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