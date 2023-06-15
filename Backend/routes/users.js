var express = require("express");
var router = express.Router();
require("dotenv").config();

const { isNumber, isChar, ageValidation } = require("../lib/middlewares");
const authMiddleware = require("../lib/authMiddleware");
const userController = require("../controllers/users");

/* ENPOINTS http://localhost:3000/users */

//GET - LISTA DE TODOS LOS USUARIOS  
router.get("/", userController.getUsers);

//GET - OBTIENE UN USUARIO POR SU ID + SU ÚLTIMO LOGIN
router.get("/user/:user_id", isNumber, userController.getUserById);

//GET - OBTIENE UN USUARIO POR SU NICKNAME
router.get(
	"/user/nickname/:nickname",
	isChar,
	userController.getUserByNickname
);

//GET - COMPRUEBA CON PARÁMETROS POR QUERY STRING SI UN NICKNAME O EMAIL EXISTEN EN LA BD, EXCLUYENDO LOS DEL USUARIO
router.get("/check/:user_id", userController.checkNicknameOrEmailExists);

//PATCH - MODIFICACIÓN DE DATOS DE USUARIO
router.patch(
	"/change-data/:user_id",
	authMiddleware,
	ageValidation,
	userController.updateUserData
);

//DELETE- ELIMINAR USUARIO DE LA BD (CERRAR CUENTA)
router.delete("/delete/:user_id", authMiddleware, userController.deleteUser);

module.exports = router;
