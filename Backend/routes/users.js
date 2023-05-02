var express = require("express");
var router = express.Router();
require('dotenv').config();
const pool = require("../db/connection");

//Middlewares
const {
	isNumber,
	isChar,
} = require("../lib/middlewares");

/* ENPOINTS /users/ */

//GET - LISTA DE TODOS LOS USUARIOS  http://localhost:3000/users
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

//GET - COMPRUEBA CON PARÁMETROS POR QUERY STRING SI UN NICKNAME O EMAIL EXISTEN EN LA BD, EXCLUYENDO LOS DEL USUARIO
router.get("/check/:user_id", async (req, res) => {
	try {
		const userId = req.params.user_id;
		const nickname = req.query.nickname;
		const email = req.query.email;

		let query = "SELECT * FROM users WHERE ";
		let params = [];

		if (nickname) {
			query += "nickname = ? ";
			params.push(nickname);
		}

		if (email) {
			if (params.length > 0) {
				query += "OR ";
			}

			query += "email = ? ";
			params.push(email);
		}

		if (params.length === 0) {
			return res.status(400).json({
				message: "Debe proporcionar un nickname o un email",
			});
		}

		// Excluimos el nickname y el email del usuario que hace la peticion
		query += `AND user_id <> ?`;
		params.push(userId);

		// Ejecutamos la query contra la bd
		const results = await pool.query(query, params);
		
		if (results.length > 0) {
			return res.status(409).json({
				message: "El nickname o el email ya existen en la base de datos",
			});
		} else {
			return res.status(200).json({
				message: "El nickname y el email no existen en la base de datos",
			});
		}
	} catch (error) {
		console.error(error.message);
		res
			.status(500)
			.json({ message: "Error al comprobar el nickname y el email" });
	}
});

// PUT - MODIFICACIÓN DE DATOS DE USUARIO
router.put("/user/:user_id", async (req, res) => {
	const userId = req.params.user_id;
	const userData = req.body;

	try {
		// Existe el usuario en la bd?
		const isUser = await pool.query("SELECT * FROM users WHERE user_id = ?", [
			userId,
		]);

		// Si no existe, respuesta de error
		if (isUser.length === 0) {
			return res
				.status(404)
				.json({ message: "El usuario no está en la base de datos" });
		}

		// Crear objeto con las propiedades actualizadas y sus valores
		const updatedFields = {};

		// Iterar sobre las propiedades del objeto de datos entrantes
		for (const [key, value] of Object.entries(userData)) {
			console.log(isUser[0][key]);
			// Si el valor de la propiedad es diferente al valor en la BD y no es una cadena vacía, agregar la propiedad actualizada al objeto de campos actualizados
			if (value !== isUser[0][key] && value !== "") {
				updatedFields[key] = value;
			}
		}

		// Si no hay campos actualizados, responder con un mensaje
		if (Object.keys(updatedFields).length === 0) {
			return res.status(200).json({
				message: "No se han modificado campos de datos",
				user: isUser[0],
			});
		}

		// Hacer update de los nuevos datos en la base de datos
		await pool.query("UPDATE users SET ? WHERE user_id = ?", [
			updatedFields,
			userId,
		]);

		// Obtener los nuevos datos del usuario de la base de datos
		const updatedUser = await pool.query(
			"SELECT * FROM users WHERE user_id = ?",
			[userId]
		);

		// Return updated user data
		return res.status(200).json({
			message: "Usuario actualizado con éxito",
			user: updatedUser[0],
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Error al actualizar usuario" });
	}
});

// router.put("/user/:user_id", async (req, res) => {
// 	const userId = req.params.user_id;
// 	const userData = req.body;
// 	console.log(userData)

// 	try {
// 		// Existe el usuario en la bd?
// 		const isUser = await pool.query("SELECT * FROM users WHERE user_id = ?", [
// 			userId,
// 		]);

// 		// Si no existe, respuesta de error
// 		if (isUser.length === 0) {
// 			return res
// 				.status(404)
// 				.json({ message: "El usuario no está en la base de datos" });
// 		}

// 		// Crear objeto con las propiedades actualizadas y sus valores
// 		const updatedFields = {};

// 		// Iterar sobre las propiedades del objeto de datos entrantes
// 		for (const [key, value] of Object.entries(userData)) {
// 			console.log(isUser[0][key]);
// 			// Si el valor de la propiedad es diferente al valor en la BD y no es una cadena vacía, agregar la propiedad actualizada al objeto de campos actualizados
// 			if (value !== isUser[0][key] && value !== "") {
// 				updatedFields[key] = value;
// 			}
// 		}

// 		// Si no hay campos actualizados, responder con un mensaje
// 		if (Object.keys(updatedFields).length === 0) {
// 			return res.status(200).json({
// 				message: "No se han modificado campos de datos",
// 				user: isUser[0],
// 			});
// 		}

// 		// Comprobar si el email o el nickname ya existen en la base de datos
// 		let existingUser;
// 		if (userData.email !== undefined && userData.email !== isUser[0].email) {
// 			existingUser = await pool.query(
// 				"SELECT * FROM users WHERE email = ? AND user_id <> ?",
// 				[userData.email, userId]
// 			);
// 		}

// 		if (
// 			userData.nickname !== undefined &&
// 			userData.nickname !== isUser[0].nickname
// 		) {
// 			existingUser = await pool.query(
// 				"SELECT * FROM users WHERE nickname = ? AND user_id <> ?",
// 				[userData.nickname, userId]
// 			);
// 		}

// 		if (existingUser && existingUser.length > 0) {
// 			return res.status(409).json({
// 				message: "El email o el nickname ya existen en la base de datos",
// 			});
// 		}

// 		// Hacer update de los nuevos datos en la base de datos
// 		await pool.query("UPDATE users SET ? WHERE user_id = ?", [
// 			updatedFields,
// 			userId,
// 		]);

// 		// Obtener los nuevos datos del usuario de la base de datos
// 		const updatedUser = await pool.query(
// 			"SELECT * FROM users WHERE user_id = ?",
// 			[userId]
// 		);

// 		// Return updated user data
// 		return res.status(200).json({
// 			message: "Usuario actualizado con éxito",
// 			user: updatedUser[0],
// 		});
// 	} catch (error) {
// 		console.error(error);
// 		res.status(500).json({ message: "Error al actualizar usuario" });
// 	}
// });

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
