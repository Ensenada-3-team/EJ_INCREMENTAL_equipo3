
//Variable que hay que pasarle a la petición a la api diciendole:
//1 - El método de la petición http (en este caso es GET porque solicitamos datos)
//2 - Los encabezados donde se refleja la clave de que estoy registrada y suscrita en la api (en esta concreta se necesita)
//Nota: he metido la clave en una variable de entorno para que no sea visible para nadie en en el repositorio de gitHub
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.API_KEY,
		'X-RapidAPI-Host': 'instagram-scraper-2022.p.rapidapi.com'
	}
};

// petición a la api que hemos encapsulado en una función asociada al evento onclic del botón de búsqueda
async function getPubApi() {

      await fetch('https://instagram-scraper-2022.p.rapidapi.com/ig/user_id/?user=cr7cristianoronaldo', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));


}