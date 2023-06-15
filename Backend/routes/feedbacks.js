const express = require("express");
const router = express.Router();
require("dotenv").config();

const authMiddleware = require("../lib/authMiddleware");
const feedbackController = require("../controllers/feedbacks");

/**ENDPOINTS http://localhost:3000/feedbacks */

// GET - OBTENER TODOS LOS FEEDBACKS A UN USUARIO || POR DEFECTO TODOS LOS FEEDBACKS
router.get(
	"/:user_id",
	authMiddleware,
	feedbackController.getAllFeedbacksOrById
);

// POST - CREAR UN NUEVO FEEDBACK
router.post("/create", authMiddleware, feedbackController.createFeedback);

module.exports = router;
