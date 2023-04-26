//AUTH________________________________________________________________


//Endpoint de login
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
