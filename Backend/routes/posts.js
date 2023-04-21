var express = require('express');
var router = express.Router();
const coolImages = require('cool-images');
const moment = require('moment');

//Endpoints de los métodos GET y POST

/* GET */


/* POST */

//peticion fetch desde el frontend a http://localhost:3000/publicaciones
//(añadir objeto a la peticion con method:POST, headers y body con el contenido pasado a JSON (JSON.stringify) de text y user)
router.post("/publicaciones", async (req, res) => {
	const { text, user } = req.body;
	const publicacion = {
		text,
		user,
		date: moment().format("DD-MM-YY HH:MM:SS"),
		likes: parseInt(Math.random() * 10), // dato aleatorio parseInt(Math.random()*10)
		image: coolImages.one(),
	};
	res.status(200)
})


module.exports = router;
