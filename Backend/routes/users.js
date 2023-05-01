var express = require("express");
var router = express.Router();
const pool = require("../db/connection");

const {validarEmail, ageValidation, validarPassword , isNumber, isChar} = require('../lib/middlewares')

/* ENPOINTS */

/* GET - LISTA DE TODOS LOS USUARIOS  http://localhost:3000/users */
router.get("/", (req, res) => {
	pool
		.query("SELECT * FROM users")
		.then((results) => {
			res.json(results);
		})
		.catch((error) => {
			console.error(error);
			res.sendStatus(500);
		});
});

//GET - OBTIENE UN USUARIO POR SU ID
router.get("/user/:user_id", isNumber, async (req, res) => {
	const userId = parseInt(req.params.user_id);
	try {
		const results = await pool.query("SELECT * FROM users WHERE user_id = ?", [
			userId,
		]);
		if (results.length === 0) {
			return res.status(404).send("Usuario no encontrado");
		}
		res.send(results[0]);
	} catch (error) {
		console.error(error);
		console.log("SQL error:", error.sql);
		res.status(500).send("Error al buscar usuario");
	}
});

//GET - OBTIENE UN USUARIO POR SU NICKNAME
router.get("/user/nickname/:nickname", isChar, async (req, res) => {
	const nickname = req.params.nickname;
	try {
		const results = await pool.query("SELECT * FROM users WHERE nickname = ?", [
			nickname,
		]);
		if (results.length === 0) {
			return res.status(404).send("Usuario no encontrado");
		}
		res.send(results[0]);
	} catch (error) {
		console.error(error);
		res.status(500).send("Error al buscar usuario");
	}
});

// GET - OBTENER AMIGOS DE UN USUARIO POR SU ID
router.get("/friends/:user_id", async (req, res) => {
	try {
		const [rows, fields] = await pool.query(
			"SELECT * FROM users " +
				"INNER JOIN friends on friends.user2_id = users.user_id " +
				"WHERE friends.user1_id = ? and friends.status = 1",

			[req.params.user_id]
		);
		res.json(rows);
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: "Error al obtener los amigos del usuario" });
	}
});

// GET - OBTENER USUARIOS NO AMIGOS DE UN USUARIO POR SU ID
router.get("/nonfriends/:user_id", async (req, res) => {
	const userId = req.params.user_id;
	try {
		const [rows, fields] = await pool.query(
			"SELECT * FROM users " +
				"WHERE user_id NOT IN (SELECT user2_id FROM friends WHERE user1_id = ?) " +
				"AND user_id <> ? ",

			[userId, userId]
		);
		res.json(rows);
	} catch (err) {
		console.error(err);
		res.status(500).json({
			error:
				"Error al obtener los datos de los usuarios no seguidos por el usuario",
		});
	}
});


// PUT - UPDATE USER DATA - 1º busca los datos del usuario en la BD y los actualiza con los datos del body
router.put("/user/:user_id", validarEmail, ageValidation, validarPassword, async (req, res) => {
	const userId = req.params.user_id;
	const userData = req.body;

	try {
		// Existe el usuario en la bd?
		const isUser = await pool.query("SELECT * FROM users WHERE user_id = ?", [
			userId,
		]);

		// Si no existe, respuesta de error
		if (isUser.length === 0) {
			return res.status(404).json({ message: "El usuario no está en la base de datos" });
		}

		// Copiamos los datos del usuario existente y los mergeamos con los entrantes en el body
		const updatedUserData = { ...isUser[0], ...userData };

		// Hacemos update de los nuevos datos en la base de datos
		await pool.query("UPDATE users SET ? WHERE user_id = ?", [
			updatedUserData,
			userId,
		]);

		// Enviamos respuesta al cliente con el resultado
		res.status(200).json(updatedUserData);

	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal server error" });
	}
});

//DELETE- ELIMINAR USUARIO DE LA BD (CERRAR CUENTA)
router.delete("/delete/:user_id", async (req, res) => {
	const userId = req.params.user_id;
	try {
		// Borrar los registros en la tabla "posts" relacionados al usuario a eliminar
		await pool.query("DELETE FROM posts WHERE posts.user_id = ? ", [userId]);

		// Borrar el usuario
		const usersResult = await pool.query(
			"DELETE FROM users WHERE users.user_id = ? ",
			[userId]
		);

		if (usersResult.affectedRows === 0) {
			res.status(404).json({ error: "User not found" });
		} else {
			res.status(200).json({ message: "User deleted successfully" });
		}
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});


// POST- AGREGAR AMIGO           /:user1_id/friendship/:user2_id
//INSERT INTO `friends`(`user1_id`, `user2_id`) VALUES ('6', '5');

//DELETE- ELIMINAR AMIGO         /:user1_id/friendship/:user2_id
//UPDATE `friends` SET `status` = '0' WHERE friends.user1_id = '5' AND friends.user2_id = '7';

module.exports = router;
