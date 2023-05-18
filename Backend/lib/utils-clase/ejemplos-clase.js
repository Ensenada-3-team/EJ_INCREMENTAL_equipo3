// Middleware para validar el formato del email
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

// Middleware para validar que la age sea un entero
const ageValidation = (req, res, next) => {
	const age = req.body.age;
	if (!Number.isInteger(parseInt(age))) {
		return res.status(400).send("La age debe ser un número entero.");
	}
	next();
};

// Middleware para validar que la password sea segura
const validarpassword = (req, res, next) => {
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

// Ruta para procesar el formulario de registro con los middlewares de validación
app.post(
	"/registro",
	validarEmail,
	ageValidation,
	validarpassword,
	(req, res) => {
		// Aquí se puede procesar el formulario de registro
		const { name, firstname, email, age, password } = req.body;
		const nuevoUsuario = {
			name,
			firstname,
			email,
			age,
			password,
		};
		res.status(200).send(nuevoUsuario);
	}
);

// EJEMPLOS CLASE DE MIDDLEWARES Y ENDPOINTS

//MIDDLEWARES__________________________________________

//middleware que impide acceder a ciertos endpoints si no eres admin
function isAdmin(req, res, next) {
	if (req.body.isAdmin) {
		next();
	} else {
		res
			.status(403)
			.send(`No tienes permisos de usuario para acceder la ruta ${req.url}`);
	}
}

//ejemplo manjo errores genericos express
app.use(function (err, req, res, next) {
	if (!err) return next();

	console.log("Error, algo salio mal", err);
	res.status(500).send("Error");
});

// ENDPOINTS___________________________________________
//normalmente los endpoints se separan en otras carpetas

//endpoints de prueba tipo GET
//Ruta a la cual solo deben ingresar los usuarios administradores
app.get("/dashboard", (req, res) => {
	res.send("You are an admin");
});

//ejemplo endpoint con manejo de errores

app.get("/articulo/:id", (req, res) => {
	const articulo = articulos.find((item) => item.id === req.params.id);

	if (!articulo) {
		return res.status(404).send("Artículo no econtrado");
	}
	res.send(articulo);
});

//ejemplo endpoint con manejo para si el formulario enviado por usuario está incompleto

app.use("/contacto", (req, res) => {
	const { nombre, email } = req.body;

	if (!nombre || !email) {
		res.status(400);
		res.json({ error: "Faltan datos obligatorios" });
		return;
	}

	//aqui continuaría la ejecucion del código en caso de estar completo el formulario
});

//peticion fetch desde el frontend a http://localhost:3001/
app.get("/hola", (req, res) => {
	res.send("Hola Mundo");
});

//peticion fetch desde el frontend a http://localhost:3001/fotos/1
app.get("/fotos/1", (req, res) => {
	res.json({
		id: 1,
		title: "imagen de ejemplo",
		url: "https://example.com/image/1",
	});
});

//peticion fetch desde el frontend a http://localhost:3001/error
app.get("/error", (req, res) => {
	res.statusCode = 500;
	res.json({ error: "Algo salió mal" });
});

//endpoints  de tipo POST

//peticion fetch desde el frontend a http://localhost:3001/publicaciones
//(añadir objeto a la peticion con method:POST, headers y body con el contenido pasado a JSON (JSON.stringify) de text y user)
app.post("/publicaciones", async (req, res) => {
	const { text, user } = req.body;
	const publicacion = {
		text,
		user,
		date: moment().format("DD-MM-YY HH:MM:SS"),
		likes: parseInt(Math.random() * 10),
		image: coolImages.one(), // dato aleatorio parseInt(Math.random()*10)
	};
	res.status(200).send(publicacion);
});
