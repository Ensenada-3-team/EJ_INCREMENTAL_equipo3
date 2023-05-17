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

const authMiddleware = require("../lib/authMiddleware");

/* ENDPOINTS */

//POST - REGISTRO DE USUARIO EN LA BD - 1ºcomprueba si ya existe el nickname y el email.
router.post("/register",
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
			hobby,
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
				"INSERT INTO users (name, firstname, nickname, birthdate, gender, avatar, password, email, ocupation, location, grade, linkedin, language, hobby) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
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
					hobby,
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
		user.password = undefined; // para que en el localStorage no aparezca la contraseña

		await pool.query(
			"UPDATE users SET last_login = NOW() WHERE user_id = ? ",
			[user.user_id]
		);

		res.status(200).json({
			redirectUrl: "/feed",
			user: user,
			token: jwt.sign({ user_id: user.user_id }, process.env.JWT_SECRET),
		});
	} catch (err) {
		console.error(err);
		res.status(500).json({ message: "Error interno del servidor" });
	}
});

// PUT - MODIFICAR CONTRASEÑA
router.put("/change-password",
	authMiddleware,
	validarPassword,
	async (req, res) => {
		const { userId, oldPassword, password } = req.body;

		try {
			// Obtener el usuario de la base de datos
			const [rows, fields] = await pool.query(
				"SELECT * FROM users WHERE user_id = ?",
				[userId]
			);

			// Comprobar si se encontró algún usuario
			if (rows.length === 0) {
				return res.status(401).json({
					message: "Usuario no encontrado",
				});
			}

			// Obtener el hash de la contraseña almacenado en la base de datos
			const hashedPassword = rows[0].password;

			// Comprobar si el hash de la antigua contraseña introducida coincide con el hash almacenado en la base de datos
			const passwordMatches = bcrypt.compareSync(oldPassword, hashedPassword);

			if (!passwordMatches) {
				return res.status(401).json({
					message: "La antigua contraseña es incorrecta",
				});
			}

			// Generar el hash de la nueva contraseña
			const newHashedPassword = bcrypt.hashSync(password, 10);

			// Actualizar la contraseña en la base de datos
			await pool.query("UPDATE users SET password = ? WHERE user_id = ? ", [
				newHashedPassword,
				userId,
			]);

			// Enviar una respuesta de éxito
			res.status(200).json({
				message: "Contraseña modificada exitosamente",
			});
		} catch (err) {
			if (err.name === "TokenExpiredError") {
				return res.status(401).json({
					message: "El token ha expirado",
				});
			}

			console.error(err);
			res.status(500).json({
				message: "Error interno del servidor",
			});
		}
	}
);

//POST -ENDPOINT INTERNO PARA HASHEAR CONTRASEÑAS DE USUARIOS DE LA BD MANUALMENTE (postman)
router.post("/change-password-manually/:user_id", async (req, res) => {
	try {
		const userId = req.params.user_id;
		const password = req.body.password;

		const hashedPassword = await bcrypt.hash(password, 10);

		const query = "UPDATE users SET password = ? WHERE user_id = ? ";
		const values = [hashedPassword, userId];

		const [result] = await pool.query(query, values);

		if (result.affectedRows === 0) {
			return res.status(404).send({
				message: `El usuario con user_id: "${userId}" no ha sido encontrado`,
			});
		}

		res
			.status(200)
			.send({ message: "La contraseña se ha hasheado correctamente" });
	} catch (error) {
		console.error(error);
		res.status(500).send({ message: "Error interno del servidor" });
	}
});

module.exports = router;
