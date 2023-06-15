const express = require("express");
const router = express.Router();
require("dotenv").config();

const {
	validarEmail,
	ageValidation,
	validarPassword,
} = require("../lib/middlewares");

const authMiddleware = require("../lib/authMiddleware");
const authController = require("../controllers/auth");

/**ENDPOINTS http://localhost:3000/auth*/

//POST - REGISTRO DE USUARIO EN LA BD - 1ºcomprueba si ya existe el nickname y el email.
router.post(
	"/register",
	validarEmail,
	ageValidation,
	validarPassword,
	authController.register
);

// POST- LOGUEARSE EN LA RED SOCIAL
router.post("/login", authController.login);

// PUT - MODIFICAR CONTRASEÑA
router.put(
	"/change-password",
	authMiddleware,
	validarPassword,
	authController.changePassword
);

//POST -ENDPOINT INTERNO PARA HASHEAR CONTRASEÑAS DE USUARIOS DE LA BD MANUALMENTE (postman)
router.post(
	"/change-password-manually/:user_id",
	authController.hashPasswordManually
);

module.exports = router;
