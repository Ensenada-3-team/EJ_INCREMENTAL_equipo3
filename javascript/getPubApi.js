let fetchBtn = document.getElementById('fetchBtn')


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.API_KEY,
		'X-RapidAPI-Host': 'instagram-scraper-2022.p.rapidapi.com'
	}
};


async function getPubApi() {

      await fetch('https://instagram-scraper-2022.p.rapidapi.com/ig/user_id/?user=cr7cristianoronaldo', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));


}