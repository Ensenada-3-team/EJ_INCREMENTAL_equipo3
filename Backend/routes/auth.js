var express = require("express");
var router = express.Router();
require("dotenv").config();
const pool = require("../db/connection");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const {
	validarEmail,
	ageValidation,
	validarPassword,
} = require("../lib/middlewares");

/* ENDPOINTS */

//POST - REGISTRO DE USUARIO EN LA BD - 1ºcomprueba si ya existe el nickname y el email.
router.post(
	"/register",
	validarEmail,
	ageValidation,
	validarPassword,
	async (req, res) => {
		const {
			name,
			firstname,
			nickname,
			birthdate,
			gender,
			avatar,
			password,
			email,
			ocupation,
			location,
			grade,
			linkedin,
			language,
			hobbie,
		} = req.body;

		const hashedPassword = await bcrypt.hash(password, 10);

		try {
			// Verificar si el usuario ya existe en la base de datos
			const isAlreadyUser = await pool.query(
				"SELECT * FROM users WHERE nickname = ? OR email = ? ",
				[nickname, email]
			);
			//console.log(isAlreadyUser); ---> el resultado está en la posicion [0]

			// Si el usuario ya existe, enviar una respuesta de error
			if (isAlreadyUser[0].length > 0) {
				const existingUser = isAlreadyUser[0][0];
				let nicknameExists = false;
				let emailExists = false;

				if (existingUser.nickname === nickname) {
					nicknameExists = true;
				}

				if (existingUser.email === email) {
					emailExists = true;
				}

				if (nicknameExists && emailExists) {
					return res
						.status(400)
						.json({ message: "Ya existe un usuario con ese nickname y email" });
				} else if (nicknameExists && !emailExists) {
					return res
						.status(400)
						.json({ message: "Ya existe un usuario con ese nickname" });
				} else if (emailExists && !nicknameExists) {
					return res
						.status(400)
						.json({ message: "Ya existe un usuario con ese email" });
				}
			}

			// Si el usuario no existe, insertar los nuevos datos en la base de datos
			const result = await pool.query(
				"INSERT INTO users (name, firstname, nickname, birthdate, gender, avatar, password, email, ocupation, location, grade, linkedin, language, hobbie) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
				[
					name,
					firstname,
					nickname,
					birthdate,
					gender,
					avatar,
					hashedPassword,
					email,
					ocupation,
					location,
					grade,
					linkedin,
					language,
					hobbie,
				]
			);

			res.status(200).send(result);
		} catch (error) {
			console.error(error);
			res
				.status(500)
				.json({ message: "Error al insertar el usuario en la base de datos" });
		}
	}
);

// POST- LOGUEARSE EN LA RED SOCIAL
// router.post("/login", async (req, res) => {
// 	const { nicknameOrEmail, password } = req.body;

// 	try {
// 		const [rows, fields] = await pool.query(
// 			"SELECT * FROM users WHERE (nickname = ? OR email = ?) AND password = ?",
// 			[nicknameOrEmail, nicknameOrEmail, password]
// 		);

// 		if (rows.length === 0) {
// 			return res.status(401).json({
// 				message:
// 					"Nombre de usuario o correo electrónico o contraseña incorrectos",
// 			});
// 		}

// 		const user = rows[0];
// 		res.status(200).json({
// 			redirectUrl: "./views/feed.html",
// 			user: user,
// 			token: jwt.sign({ user_id: user.user_id }, process.env.JWT_SECRET),
// 		});
// 	} catch (err) {
// 		console.error(err);
// 		res.status(500).json({ message: "Error interno del servidor" });
// 	}
// });

// POST- LOGUEARSE EN LA RED SOCIAL
router.post("/login", async (req, res) => {
	const { nicknameOrEmail, password } = req.body;

	try {
		// Obtener el usuario de la base de datos
		const [rows, fields] = await pool.query(
			"SELECT * FROM users WHERE nickname = ? OR email = ?",
			[nicknameOrEmail, nicknameOrEmail]
		);

		// Comprobar si se encontró algún usuario
		if (rows.length === 0) {
			return res.status(401).json({
				message: "Nombre de usuario o correo electrónico incorrectos",
			});
		}

		console.log(rows[0]);
		// Obtener el hash de la contraseña almacenado en la base de datos
		const hashedPassword = rows[0].password;

		// Comprobar si el hash de la contraseña introducida coincide con el hash almacenado en la base de datos
		const passwordMatches = bcrypt.compareSync(password, hashedPassword);

		if (!passwordMatches) {
			return res.status(401).json({
				message: "Contraseña incorrecta",
			});
		}

		// Si la contraseña es correcta, enviar una respuesta con los datos del usuario y un token JWT
		const user = rows[0];
		res.status(200).json({
			redirectUrl: "./views/feed.html",
			user: user,
			token: jwt.sign({ user_id: user.user_id }, process.env.JWT_SECRET),
		});
	} catch (err) {
		console.error(err);
		res.status(500).json({ message: "Error interno del servidor" });
	}
});

module.exports = router;
