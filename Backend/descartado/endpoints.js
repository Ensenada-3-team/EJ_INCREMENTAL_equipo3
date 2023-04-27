//AUTH________________________________________________________________


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

//POST- LOGUEAR AL USUARIO
//http://localhost:3000/auth/login
// router.post("/login", async (req, res) => {
// 	const { nicknameOrEmail, password } = req.body;

// 	try {
// 		const user = users.find((u) => u.nickname === nicknameOrEmail || u.email === nicknameOrEmail);
// 		if (!user) {
// 			return res
// 				.status(401)
// 				.json({ message: "Nombre de usuario o correo electrónico incorrectos" });
// 		}
// 		if (user.password !== password) {
// 			return res
// 				.status(401)
// 				.json({ message: "Nombre de usuario o correo electrónico o contraseña incorrectos" });
// 		}

// 		res
// 			.status(200)
// 			.send({redirectUrl: "./feed.html",  user: user});
// 	} catch (err) {
// 		console.error(err);
// 		res.status(500).json({ message: "Error interno del servidor" });
// 	}
// });



//USERS____________________________________________________________________

// DEVUELVE UN USUARIO POR SU ID
// router.get("/user/:id", isNumber, (req, res) => {
// 	const id = parseInt(req.params.id);
// 	const persona = users.find((item) => item.id === id);
// 	console.log(persona);

// 	if (!persona) {
// 		return res.status(404).send("Persona no econtrada");
// 	}
// 	res.send(persona);
// });


// DEVUELVE UN USUARIO POR SU NOMBRE
// router.get("/user/name/:name", isChar, (req, res) => {
// 	const persona = users.find((item) => item.name === req.params.name);

// 	if (!persona) {
// 		return res.status(404).send("Persona no econtrada");
// 	}
// 	res.send(persona);
// });



//POSTS__________________________________________________________

// POST- AGREGAR NUEVA PUBLICACION
//http://localhost:3000/posts/publicaciones
// router.post("/publicaciones", async (req, res) => {
// 	console.log(req.body)

// 	const { text } = req.body;
// 	let time = moment()
// 	let postTime = moment((time), "DD/MM/YYYY hh:mm")
// 	let getTime = moment()
// 	let diffTime = moment(postTime).from(getTime)

// 	if (!text) {
// 		res.sendStatus(400).send('El campo text es requerido')
// 		return
// 	}

// 	const publicacion = {
// 		text,
// 		postId: parseInt(Math.random() * 1000),
// 		author: "Anonimus",
// 		avatar: 'https://randomuser.me/api/portraits/men/92.jpg',
// 		// date: moment().format("DD-MM-YY HH:MM:SS"),
// 		publishDate: diffTime,
// 		likes: parseInt(Math.random() * 10), // dato aleatorio parseInt(Math.random()*10)
// 		image: coolImages.one(),
// 	};

// 	Promise.resolve(publicacion)
// 	.then((pub) => res.status(200).json(pub))
// 	.catch((err) => res.status(500).json(err));
// 	// res.status(200).send(publicacion);
// })


// router.get('/minutesAgo', (req, res) => {
// 	let time = moment()
// 	let postTime = moment((time), "DD/MM/YYY hh:mm")
// 	let getTime = moment()
// 	let diffTime = moment(postTime).from(getTime)
// 	res.json({time: diffTime})
// })