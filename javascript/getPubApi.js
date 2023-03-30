//Variable que hay que pasarle a la petición a la api diciendole:
//1 - El método de la petición http (en este caso es GET porque solicitamos datos)
//2 - Los encabezados donde se refleja la clave de que estoy registrada y suscrita en la api (en esta concreta se necesita)
//Nota: he metido la clave en una variable de entorno para que no sea visible para nadie en en el repositorio de gitHub
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '01862a3d2fmsh5e05a1ae12a760ep144336jsn8be5c5304cd0',
		'X-RapidAPI-Host': 'instagram-scraper-2022.p.rapidapi.com'
	}
};

const formBuscaPostsByUsername = document.getElementById('form-busca-posts-por-username')

formBuscaPostsByUsername.addEventListener('Submit', async(event) => {
	event.preventDefault();

	const inputUserName = document.getElementById('username').value

	console.log('aquí 1')
	
	await getPostsByUsername(inputUserName)
})


//Función que hace una peticíon a la api, de obtener los posts de un usuario buscado en la searchbar
async function getPostsByUsername(username) {
	console.log('aquí 2')
      await fetch(`https://instagram-scraper-2022.p.rapidapi.com/ig/posts_username/${username}`, options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

}