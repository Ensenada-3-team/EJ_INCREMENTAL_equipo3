var express = require("express");
var router = express.Router();
const pool = require("../db/connection");

const users = require("../bd-usuarios");

// MIDDLEWARE: COMPRUEBA SI ID ES UN NUMERO
function isNumber(req, res, next) {
	const userId = parseInt(req.params.user_id) // Parseamos el parámetro como un número entero
	if (isNaN(userId)) {
		// Verificamos si no es un número válido
		return res.status(400).send("El parámetro id debe ser un número entero"); // Devolvemos el error bad request
	}
	// Si llegamos aquí es porque el parámetro es un número válido, entonces llamamos al siguiente middleware
	next();
}

//MIDDLEWARE: COMPRUEBA SI NINCNAME NO ES UN NUMERO
function isChar(req, res, next) {
	const nickname = req.params.nickname;
	if (!isNaN(nickname)) {
		// Verificamos si el parámetro es un número
		return res
			.status(400)
			.send("El parámetro name debe ser una cadena de caracteres"); // Devolvemos un error
	}
	// Si llegamos aquí es porque el parámetro es una cadena de caracteres, entonces llamamos al siguiente middleware
	next();
}

// ENDPOINTS_________________________________________________

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
		const results = await pool.query("SELECT * FROM users WHERE user_id = ?", [userId]);
		if (results.length === 0) {
			return res.status(404).send("Usuario no encontrado");
		}
		res.send(results[0]);
	} catch (error) {
		console.error(error);
		console.log('SQL error:', error.sql);
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
	const userId = req.params.user_id
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
		res.status(500).json({ error: "Error al obtener los datos de los usuarios no seguidos por el usuario" });
	}
});





// POST- AGREGAR AMIGO           /:user1_id/friendship/:user2_id
//INSERT INTO `friends`(`user1_id`, `user2_id`) VALUES ('6', '5');

//DELETE- ELIMINAR AMIGO         /:user1_id/friendship/:user2_id  
//UPDATE `friends` SET `status` = '0' WHERE friends.user1_id = '5' AND friends.user2_id = '7';

//DELETE- ELIMINAR USUARIO DE LA BD (CERRAR CUENTA)       /:user_id 
//DELETE FROM `users` WHERE user_id = 8;    


module.exports = router;
