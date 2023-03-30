let fetchBtn = document.getElementById('fetchBtn')


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '01862a3d2fmsh5e05a1ae12a760ep144336jsn8be5c5304cd0',
		'X-RapidAPI-Host': 'instagram-scraper-2022.p.rapidapi.com'
	}
};


let getPubApi = () => {

      fetch('https://instagram-scraper-2022.p.rapidapi.com/ig/user_id/?user=cr7cristianoronaldo', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));


}