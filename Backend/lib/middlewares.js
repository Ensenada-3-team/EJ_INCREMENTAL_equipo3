//VALIDA FORMATO DEL EMAIL
const validarEmail = (req, res, next) => {
	const email = req.body.email.trim();
	const regexEmail = /\S+@\S+\.\S+/;
	if (!regexEmail.test(email)) {
		return res
			.status(400)
			.send("El email ingresado no tiene el formato correcto.");
	}
	next();
};

//VALIDA SI LA EDAD ES NUMERO ENTERO
const ageNumberValidation = (req, res, next) => {
	const age = req.body.age.trim();
	if (!Number.isInteger(parseInt(age))) {
		return res.status(400).send("La age debe ser un número entero.");
	}
	next();
};

//COMPRUEBA SI USUARIO ES MAYOR DE 18 AÑOS
const ageValidation = (req, res, next) => {
	const birthdateStr = req.body.birthdate.trim();

	const birthdate = new Date(birthdateStr);
	const ageDiffMs = Date.now() - birthdate.getTime();
	const ageDate = new Date(ageDiffMs);
	const age = Math.abs(ageDate.getUTCFullYear() - 1970);

	if (age < 18) {
		return res.status(400).json({ message: "Usuario menor de 18 años" });
	}

	next();
};
//VALIDA SI LA CONTRASEÑA ES SEGURA
const validarPassword = (req, res, next) => {
	const password = req.body.password.trim();
	const regexpassword =
		/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
	if (!regexpassword.test(password)) {
		return res
			.status(400)
			.json({message: "La password debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un número y un caracter especial."});
	}
	next();
};

//COMPRUEBA SI LA ID ES UN NUMERO
function isNumber(req, res, next) {
	// Parseamos el parámetro como un número entero
	const userId = parseInt(req.params.user_id);
	if (isNaN(userId)) {
		// Si no es un número válido devolvemos el error bad request
		return res.status(400).send("El parámetro id debe ser un número entero");
	}
	// Si llegamos aquí es porque el parámetro es un número válido, entonces llamamos al siguiente middleware
	next();
}

//COMPRUEBA SI NINCNAME NO ES UN NUMERO
function isChar(req, res, next) {
	const nickname = req.params.nickname.trim();
	if (!isNaN(nickname)) {
		// Verificamos si el parámetro es un número
		return res
			.status(400)
			.send("El parámetro name debe ser una cadena de caracteres"); // Devolvemos un error
	}
	// Si llegamos aquí es porque el parámetro es una cadena de caracteres, entonces llamamos al siguiente middleware
	next();
}



module.exports = {
      validarEmail,
      ageNumberValidation,
      ageValidation,
      validarPassword,
      isNumber,
      isChar
}