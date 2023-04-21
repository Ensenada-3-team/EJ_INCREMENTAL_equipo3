import { users } from "../bd-usuarios";

var express = require('express');
var router = express.Router();

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

// Middleware para validar que la edad sea un entero
const validarEdad = (req, res, next) => {
    const edad = req.body.edad;
    if (!Number.isInteger(parseInt(edad))) {
        return res.status(400).send("La edad debe ser un número entero.");
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

//Endpoints de tipo POST

//Endpoint de registro
//http://localhost:3000/auth/registro
router.post(
    "/registro",
    validarEmail,
    validarEdad,
    validarpassword,
    (req, res) => {
        // Aquí se puede procesar el formulario de registro
        const { nombre, apellido, email, edad, password } = req.body;
        const nuevoUsuario = {
            nombre,
            apellido,
            email,
            edad,
            password,
        };
        res.status(200).send(nuevoUsuario);
    }
);

//Endpoint de login
//http://localhost:3000/auth/login
router.post('/login', async (req, res) => {
    const { name, password } = req.body;
    // Aquí se verificarían las credenciales del usuario.

    try {
        const user = await users.findOne({ name });
        if (!user) {
            return res.status(401).json({ message: 'Nombre de usuario o password incorrectos' });
        }
        const match = await users.findOne({ password });
        if (!match) {
            return res.status(401).json({ message: 'Nombre de usuario o password incorrectos' });
        }

        // Si las credenciales son correctas, se puede enviar una respuesta de éxito.
        res.status(200).send('Usuario logueado con éxito se redirigirá a la Home Page');

        // De lo contrario, se debe enviar una respuesta de error.
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});





module.exports = router;

