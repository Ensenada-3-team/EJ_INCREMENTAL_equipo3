var express = require("express");
var router = express.Router();
const pool = require("../db/connection");

const users = require("../bd-usuarios");

// Middleware que comprueba si el numero de id es un número
function isNumber(req, res, next) {
	const id = parseInt(req.params.id); // Parseamos el parámetro como un número entero
	if (isNaN(id)) {
		// Verificamos si no es un número válido
		return res.status(400).send("El parámetro id debe ser un número entero"); // Devolvemos el error bad request
	}
	// Si llegamos aquí es porque el parámetro es un número válido, entonces llamamos al siguiente middleware
	next();
}

//Middleware que comprueba si el nombre del parámetro no es un número
function isChar(req, res, next) {
	const name = req.params.name;
	if (!isNaN(name)) {
		// Verificamos si el parámetro es un número
		return res
			.status(400)
			.send("El parámetro name debe ser una cadena de caracteres"); // Devolvemos un error
	}
	// Si llegamos aquí es porque el parámetro es una cadena de caracteres, entonces llamamos al siguiente middleware
	next();
}

// ENDPOINTS_________________________________________________

/* GET users listing. http://localhost:3000/users */
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

// enpoint que devuelve un usuario por id
// router.get("/user/:id", isNumber, (req, res) => {
// 	const id = parseInt(req.params.id);
// 	const persona = users.find((item) => item.id === id);
// 	console.log(persona);

// 	if (!persona) {
// 		return res.status(404).send("Persona no econtrada");
// 	}
// 	res.send(persona);
// });

router.get("/user/:id", isNumber, async (req, res) => {
	const id = parseInt(req.params.id);
	try {
		const results = await pool.query("SELECT * FROM users WHERE id = ?", [id]);
		if (results.length === 0) {
			return res.status(404).send("Usuario no encontrado");
		}
		res.send(results[0]);
	} catch (error) {
		console.error(error);
		res.status(500).send("Error al buscar usuario");
	}
});

// endpoint que devuelve un usuario por nombre
// router.get("/user/name/:name", isChar, (req, res) => {
// 	const persona = users.find((item) => item.name === req.params.name);

// 	if (!persona) {
// 		return res.status(404).send("Persona no econtrada");
// 	}
// 	res.send(persona);
// });

router.get("/user/nickname/:nickname", isChar, async (req, res) => {
	const name = req.params.nickname;
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

module.exports = router;
