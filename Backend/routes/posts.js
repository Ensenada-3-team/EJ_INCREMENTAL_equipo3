const publicaciones = require("../bd-posts");
var express = require('express');
var router = express.Router();
const coolImages = require('cool-images');
const moment = require('moment');



/* GET */
//obtener todas las publicaciones
router.get("/", async (req, res) => {

})

/* POST */

// Agregar una nueva publicación  
//peticion fetch desde el frontend a http://localhost:3000/posts/publicaciones
//(añadir objeto a la peticion con method:POST, headers y body con el contenido pasado a JSON (JSON.stringify) de text y user)
router.post("/publicaciones", async (req, res) => {
	console.log(req.body)

	const { text } = req.body;
	let time = moment()
	let postTime = moment((time), "DD/MM/YYYY hh:mm")
	let getTime = moment()
	let diffTime = moment(postTime).from(getTime)

	if (!text) {
		res.sendStatus(400).send('El campo text es requerido')
		return 
	}

	const publicacion = {
		text,
		author: "Anonimus",
		// date: moment().format("DD-MM-YY HH:MM:SS"),
		date: diffTime,
		likes: parseInt(Math.random() * 10), // dato aleatorio parseInt(Math.random()*10)
		image: coolImages.one(),
	};

	Promise.resolve(publicacion)
	.then((pub) => res.status(200).json(pub))
	.catch((err) => res.status(500).json(err));
	// res.status(200).send(publicacion);
})


// router.get('/minutesAgo', (req, res) => {
// 	let time = moment()
// 	let postTime = moment((time), "DD/MM/YYY hh:mm")
// 	let getTime = moment()
// 	let diffTime = moment(postTime).from(getTime)
// 	res.json({time: diffTime})
// }) 





module.exports = router;
