var express = require("express");
var router = express.Router();
const pool = require("../db/connection");

// MIDDLEWARE - VALIDA FORMATO DEL EMAIL
const validarEmail = (req, res, next) => {
	const email = req.body.email;
	const regexEmail = /\S+@\S+\.\S+/;
	if (!regexEmail.test(email)) {
		return res
			.status(400)
			.send("El email ingresado no tiene el formato correcto.");
	}
	next();
};

// MIDDLEWARE - VALIDA SI LA EDAD ES NUMERO ENTERO
// const ageValidation = (req, res, next) => {
// 	const age = req.body.age;
// 	if (!Number.isInteger(parseInt(age))) {
// 		return res.status(400).send("La age debe ser un número entero.");
// 	}
// 	next();
// };

//MIDDLEWARE - COMPRUEBA SI USUARIO ES MAYOR DE 18 AÑOS
const ageValidation = (req, res, next) => {
	const birthdateStr = req.params.birthdate;
	const birthdate = new Date(birthdateStr);
	const ageDiffMs = Date.now() - birthdate.getTime();
	const ageDate = new Date(ageDiffMs);
	const age = Math.abs(ageDate.getUTCFullYear() - 1970);

	if (age < 18) {
		return res.status(400).send("Debes ser mayor de 18 años para registrarte.");
	}

	next();
};
// MIDDLEWARE - VALIDA SI LA CONTRASEÑA ES SEGURA
const validarPassword = (req, res, next) => {
	const password = req.body.password;
	const regexpassword =
		/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
	if (!regexpassword.test(password)) {
		return res
			.status(400)
			.send(
				"La password debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un número y un caracter especial."
			);
	}
	next();
};

//ENDPOINTS______________________________________________________

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

		try {
			// Verificar si el usuario ya existe en la base de datos
			const isAlreadyUser = await pool.query(
				"SELECT * FROM users WHERE nickname = ? OR email = ? ",
				[nickname, email]
			);
			console.log(isAlreadyUser); //el resultado es en la posicion [0]

			// Si el usuario ya existe, enviar una respuesta de error
			if (isAlreadyUser[0].length > 0) {
				return res
					.status(400)
					.json({ message: "Ya existe un usuario con ese nickname o email" });
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
					password,
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
router.post("/login", async (req, res) => {
	const { nicknameOrEmail, password } = req.body;

	try {
		const [rows, fields] = await pool.query(
			"SELECT * FROM users WHERE (nickname = ? OR email = ?) AND password = ?",
			[nicknameOrEmail, nicknameOrEmail, password]
		);

		if (rows.length === 0) {
			return res.status(401).json({
				message:
					"Nombre de usuario o correo electrónico o contraseña incorrectos",
			});
		}

		const user = rows[0];
		res.status(200).send({ redirectUrl: "./views/feed.html", user: user });
	} catch (err) {
		console.error(err);
		res.status(500).json({ message: "Error interno del servidor" });
	}
});

module.exports = router;
