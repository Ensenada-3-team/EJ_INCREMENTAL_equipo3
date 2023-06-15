const express = require("express");
const router = express.Router();
require("dotenv").config();

const authMiddleware = require("../lib/authMiddleware");
const queryController = require("../controllers/querys");

/**ENDPOINTS http://localhost:3000/querys */

// GET - OBTENEMOS ONSULTAS EXISTENTES. SI USER_ID POR QUERY STRING --> LAS DEL USER
router.get("/", authMiddleware, queryController.getAllQuerysOrByUser);

// POST - CREA UNA NUEVA CONSULTA (USER)
router.post("/create/:user_id", authMiddleware, queryController.createQuery);

// POST - ADMIN RESPONDE A QUERY EXISTENTE DEL USUARIO (ADMIN)
router.put(
	"/respond/query/:queryId",
	authMiddleware,
	queryController.respondQuery
);

module.exports = router;
