const users = require("../bd-usuarios");
const pool = require("../db/connection");
var express = require("express");
var router = express.Router();

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
const ageValidation = (req, res, next) => {
	const age = req.body.age;
	if (!Number.isInteger(parseInt(age))) {
		return res.status(400).send("La age debe ser un número entero.");
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

//POST - REGISTRAR USUARIO EN LA BD 
//http://localhost:3000/auth/registro
// router.post(
// 	"/registro",
// 	validarEmail,
// 	ageValidation,
// 	validarPassword,
// 	(req, res) => {
// 		// Aquí se puede procesar el formulario de registro
// 		const { name, firstname, email, age, password } = req.body;
// 		const nuevoUsuario = {
// 			name,
// 			firstname,
// 			email,
// 			age,
// 			password,
// 		};
// 		res.status(200).send(nuevoUsuario);
// 	}
// );

//POST - REGISTRO DEL USUARIO EN LA BD
router.post(
	"/registro",
	validarEmail,
	ageValidation,
	validarPassword,
	async (req, res) => {
	    const { name, firstname, nickname, password, email } = req.body;
	    try {
		  const result = await pool.execute(
			'INSERT INTO users (name, firstname, nickname, password, email) VALUES (?, ?, ?, ?, ?)',
			[name, firstname, nickname, password, email]
		  );
		  res.status(200).send(result);
	    } catch (error) {
		  console.error(error);
		  res.status(500).send('Error al insertar el usuario en la base de datos');
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
			return res
				.status(401)
				.json({
					message:
						"Nombre de usuario o correo electrónico o contraseña incorrectos",
				});
		}

		const user = rows[0];
		res.status(200).send({ redirectUrl: "./feed.html", user: user });

	} catch (err) {
		console.error(err);
		res.status(500).json({ message: "Error interno del servidor" });
	}
});

module.exports = router;
