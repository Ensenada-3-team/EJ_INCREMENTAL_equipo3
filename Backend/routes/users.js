var express = require("express");
var router = express.Router();
require("dotenv").config();
const pool = require("../db/connection");

//Middlewares
const { isNumber, isChar, ageValidation } = require("../lib/middlewares");
const authMiddleware = require("../lib/authMiddleware");
const minutesAgo = require("../lib/minutesAgo");

/* ENPOINTS /users/ */

//GET - LISTA DE TODOS LOS USUARIOS   http://localhost:3000/users
router.get("/", async (req, res) => {
	try {
		const results = await pool.query(
			"SELECT user_id, name, firstname, nickname, birthdate, gender, avatar, email, occupation, location, grade, linkedin, language, bio, role, last_login FROM users"
		);

		allUsersWithLastLogin = results[0].map((result) => ({
			...result,
			lastLogin: minutesAgo(result.last_login),
		}));

		res.status(200).json(allUsersWithLastLogin);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Error al buscar los usuarios" });
	}
});

//GET - OBTIENE UN USUARIO POR SU ID + SU ÚLTIMO LOGIN
router.get("/user/:user_id", isNumber, async (req, res) => {
	const userId = parseInt(req.params.user_id);
	try {
		const results = await pool.query(
			"SELECT user_id, name, firstname, nickname, birthdate, gender, avatar, email, occupation, location, grade, linkedin, language, bio, last_login FROM users WHERE user_id = ?",
			[userId]
		);
		if (results.length === 0) {
			return res.status(404).json({ mesage: "Usuario no encontrado" });
		}

		userWithLastLogin = results[0].map((result) => ({
			...result,
			lastLogin: minutesAgo(result.last_login),
		}));
		res.status(200).send(userWithLastLogin);
	} catch (error) {
		console.error(error);
		console.log("SQL error:", error.sql);
		res.status(500).json({ message: "Error al buscar usuario" });
	}
});

//GET - OBTIENE UN USUARIO POR SU NICKNAME
router.get("/user/nickname/:nickname", isChar, async (req, res) => {
	const nickname = req.params.nickname;
	try {
		const results = await pool.query(
			"SELECT user_id, name, firstname, nickname, birthdate, gender, avatar, email, occupation, location, grade, linkedin, language, bio, last_login FROM users WHERE nickname = ?",
			[nickname]
		);
		if (results.length === 0) {
			return res.status(404).json({ message: "Usuario no encontrado" });
		}
		userWithLastLogin = results[0].map((result) => ({
			...result,
			lastLogin: minutesAgo(result.last_login),
		}));
		res.status(200).send(userWithLastLogin);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Error al buscar usuario" });
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
		console.log(results[0]);

		//modificar en el futuro para que concrete si es el emai o el nickname
		if (results[0].length > 0) {
			return res.status(409).json({
				message: "El nickname o el email ya existen en la base de datos",
			});
		} else {
			return res.status(200).json({
				message: "Puedes usar el nickname y/o el email",
			});
		}
	} catch (error) {
		console.error(error.message);
		res
			.status(500)
			.json({ message: "Error al comprobar el nickname y el email" });
	}
});

//PATCH - MODIFICACIÓN DE DATOS DE USUARIO
router.patch("/change-data/:user_id", authMiddleware, ageValidation, async (req, res) => {
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

		// Devolvemos status 200 + usuario con datos nuevos
		return res.status(200).json({
			message: "Usuario actualizado con éxito",
			user: updatedUser[0],
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Error al actualizar usuario" });
	}
});

//DELETE- ELIMINAR USUARIO DE LA BD (CERRAR CUENTA)
router.delete("/delete/:user_id", authMiddleware, async (req, res) => {
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



module.exports = router;
