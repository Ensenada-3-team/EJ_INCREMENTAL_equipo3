const express = require("express");
const router = express.Router();
require("dotenv").config();
const pool = require("../db/connection");

const coolImages = require("cool-images");

const authMiddleware = require("../lib/authMiddleware");
const minutesAgo = require("../lib/minutesAgo");

/**ENDPOINTS /posts  */

//GET - OBTENER TODAS LAS PUBLICACIONES EXISTENTES
router.get("/", async (req, res) => {
	try {
		const [results] = await pool.query(
			`
			SELECT posts.*, users.*
			FROM posts
			INNER JOIN users ON users.user_id = posts.user_id
			WHERE posts.user_id  OR posts.user_id 
			ORDER BY post_date DESC
		    `
		);

		// Añadimos a cada post el tiempo atrás de publicación
		const resultsWithTimeAgo = results.map((result) => ({
			...result,
			timeAgo: minutesAgo(result.post_date),
		}));

		res.status(200).json(resultsWithTimeAgo);
	} catch (error) {
		console.error(error);
		res.sendStatus(500);
	}
});

//GET - TRAE LOS POSTS DE UN USUARIO POR SU NICKNAME
router.get("/private/search/:nickname", authMiddleware, async (req, res) => {
	const nickname = req.params.nickname;
	pool
		.query(
			`
			SELECT posts.*, users.* 
			FROM posts 
			INNER JOIN users ON users.user_id = posts.user_id 
			WHERE users.nickname =  ? 
			ORDER BY posts.post_date ASC
		    `,
			[nickname]
		)
		.then((results) => {
			res.json(results);
		})
		.catch((error) => {
			console.error(error);
			res.sendStatus(500);
		});
});

//GET - TRAE PUBLICACIONES DEL USUARIO Y DE SUS AMIGOS Y ADEMÁS LOS DATOS DE LOS AMIGOS QUE ESCRIBIERON EL POST
router.get("/private/:user_id", authMiddleware, async (req, res) => {
	const user = req.params.user_id;
	try {
		const [results] = await pool.query(
			`
			SELECT posts.*, users.*
			FROM posts
			INNER JOIN users ON users.user_id = posts.user_id
			WHERE posts.user_id = ? OR posts.user_id IN (
			SELECT receiver_id FROM friends WHERE sender_id = ? AND status = 'accepted'
			UNION
			SELECT sender_id FROM friends WHERE receiver_id = ? AND status = 'accepted'
			)
			ORDER BY post_date DESC
		    `,
			[user, user, user]
		);

		// Añadimos a cada post el tiempo atrás de publicación
		const resultsWithTimeAgo = results.map((result) => ({
			...result,
			timeAgo: minutesAgo(result.post_date),
		}));

		res.json(resultsWithTimeAgo);
	} catch (error) {
		console.error(error);
		res.sendStatus(500);
	}
});

//POST- CREA UN POST + LO AÑADE A LA BASE DE DATOS + LO DEVUELVE JUNTO CON VALOR EXTRA PUBLISHDATE
router.post("/new-post/", authMiddleware, async (req, res) => {
	const { text, user_id } = req.body;

	if (!text) {
		res.status(400).send("El campo text es requerido");
		return;
	}

	try {
		const query = `INSERT INTO posts (text, image, post_date, like_number, user_id) VALUES (?, ?, ?, ?, ?)`;
		const image = coolImages.one();
		const like_number = parseInt(Math.random() * 10);
		const post_date = new Date();
		const [result] = await pool.query(query, [
			text,
			image,
			post_date,
			like_number,
			user_id,
		]);

		res.status(200).json({
			post_id: result.insertId,
			text,
			user_id,
			image,
			post_date,
			like_number,
			publishDate: minutesAgo(),
		});
	} catch (error) {
		console.error(error);
		res.status(500).json(error);
	}
});

//DELETE- BORRAR UN POST POR SU POST_ID
router.delete("/delete-post/:postId", authMiddleware, async (req, res) => {
	const { postId } = req.params;
	const user = req.jwtInfo.user_id;
	
	try {
		const [result] = await pool.query(
			"SELECT * FROM posts WHERE post_id = ? AND user_id = ? ",
			[postId, user]
		);

		if (result.length === 0) {
			res
				.status(404)
				.send("El post no existe o no tienes permiso para eliminarlo");
			return;
		}

		await pool.query("DELETE FROM posts WHERE post_id = ? ", [postId]);
		res.status(200).json({message: "El post ha sido eliminado exitosamente"});
	} catch (error) {
		console.error(error);
		res.status(500).json(error);
	}
});

//POST - AÑADIR LIKES A UN POST                   /:post_id/likes/:user_id
//DELETE - USUARIO RETIRA LIKE A UNA PUBLICACION  /:post_id/likes/:user_id

module.exports = router;
