const publicaciones = require("../bd-posts");
const express = require("express");
const router = express.Router();
const pool = require("../db/connection");

const coolImages = require("cool-images");
const moment = require("moment");

// ENDPOINTS_________________________________________________________

//GET - OBTENER TODAS LAS PUBLICACIONES EXISTENTES
router.get("/", async (req, res) => {
	pool
		.query("SELECT * FROM posts ")
		.then((results) => {
			res.json(results);
		})
		.catch((error) => {
			console.error(error);
			res.sendStatus(500);
		});
});

//GET - TRAE PUBLICACIONES DEL USUARIO Y DE SUS AMIGOS  /private /:user_id

// router.get('/private/:user_id', async(req, res) =>)
/*
	SELECT * FROM `posts` WHERE posts.user_id = 1
	UNION
	SELECT posts.* FROM `posts`
	INNER JOIN friends on friends.user2_id = posts.user_id
	WHERE friends.user1_id = 1 and friends.status = 1;
	
*/
// router.get("/private/:user_id", async (req, res) => {
// 	const user = req.params.user_id
// 	pool
// 		.query("SELECT * FROM posts WHERE posts.user_id = ? " +
// 		"UNION " +
// 		"SELECT posts.* FROM posts " +
// 		"INNER JOIN friends on friends.user2_id = posts.user_id " +
// 		"WHERE friends.user1_id = ? and friends.status = 1 ",
// 		[user , user]

// 		)

// 		.then((results) => {
// 			res.json(results);
// 		})
// 		.catch((error) => {
// 			console.error(error);
// 			res.sendStatus(500);
// 		});
// });
//GET - TRAE PUBLICACIONES DEL USUARIO Y DE SUS AMIGOS  /private /:user_id Y ADEMÁS LOS DATOS DE LOS AMIGOS QUE ESCRIBIERON EL POST
//revisar
router.get("/private/:user_id", async (req, res) => {
	const user = req.params.user_id;
	pool
		.query(
			`
	    SELECT posts.*, users.*
	    FROM posts
	    INNER JOIN friends ON friends.user2_id = posts.user_id
	    INNER JOIN users ON users.user_id = posts.user_id OR users.user_id = friends.user1_id
	    WHERE friends.user1_id = ?
	    AND friends.status = 1
	`,
			[user]
		)
		.then((results) => {
			res.json(results);
		})
		.catch((error) => {
			console.error(error);
			res.sendStatus(500);
		});
});

//POST- CREA UN POST + LO AÑADE A LA BASE DE DATOS + LO DEVUELVE JUNTO CON VALOR EXTRA PUBLISHDATE
router.post("/new-post/", async (req, res) => {
	const { text, user_id } = req.body;

	if (!text) {
		res.status(400).send("El campo text es requerido");
		return;
	}

	try {
		const query = `INSERT INTO posts (text, image, like_number, user_id) VALUES (?, ?, ?, ?)`;
		const image = coolImages.one();
		const like_number = parseInt(Math.random() * 10);
		const [result] = await pool.query(query, [
			text,
			image,
			like_number,
			user_id,
		]);

		res.status(200).json({
			post_id: result.insertId,
			text,
			user_id,
			image,
			like_number,
			publishDate: minutesAgo(),
		});
	} catch (error) {
		console.error(error);
		res.status(500).json(error);
	}
});

//DELETE- BORRAR UN POST POR SU POST_ID            /:post_id

//POST - AÑADIR LIKES A UN POST                   /:post_id/likes/:user_id
//DELETE - USUARIO RETIRA LIKE A UNA PUBLICACION  /:post_id/likes/:user_id

function minutesAgo() {
	let time = moment();
	let postTime = moment(time, "DD/MM/YYY hh:mm");
	let getTime = moment();
	return moment(postTime).from(getTime);
}

module.exports = router;
