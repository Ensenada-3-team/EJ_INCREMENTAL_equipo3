const express = require("express");
const router = express.Router();
require("dotenv").config();

const authMiddleware = require("../lib/authMiddleware");
const friendController = require("../controllers/friends");

/**ENDPOINTS http://localhost:3000/friends */

// GET - OBTENER LOS AMIGOS DE UN USUARIO
router.get(
	"/user/:user_id",
	authMiddleware,
	friendController.getFriendsByUserId
);

// GET - OBTENER TODOS LOS NO AMIGOS (no accepted) DE UN USUARIO
router.get(
	"/user/:user_id/nonfriends",
	authMiddleware,
	friendController.getNonFriendsByUserId
);

// GET - OBTENER SOLICITUDES DE AMISTAD PENDIENTES DEL USUARIO
router.get(
	"/pending-requests/:user_id",
	authMiddleware,
	friendController.getPendingRequestsByUserId
);

// GET - OBTENER EL ESTADO DE AMISTAD ENTRE DOS USUARIOS Y EL SENDER_ID DE LA AMISTAD (accepted, rejected, pending, null)
router.get(
	"/status/:user_id/:other_user_id",
	friendController.getFriendshipStatusAndSenderId
);

// POST - ENVIAR SOLICITUD DE AMISTAD
router.post(
	"/send-request",
	authMiddleware,
	friendController.sendFrienshipRequest
);

// DELETE - CANCELAR SOLICITUD DE AMISTAD
router.delete(
	"/cancel-request",
	authMiddleware,
	friendController.cancelFriendshipRequest
);

// PUT - ACEPTAR SOLICITUD DE AMISTAD
router.put(
	"/accept-request",
	authMiddleware,
	friendController.acceptFriendshipRequest
);

// PUT - RECHAZAR SOLICITUD DE AMISTAD
router.put(
	"/reject-request",
	authMiddleware,
	friendController.rejectFriendshipRequest
);

// DELETE - ELIMINAR UN AMIGO
router.delete("/delete", authMiddleware, friendController.deleteFriend);

module.exports = router;
