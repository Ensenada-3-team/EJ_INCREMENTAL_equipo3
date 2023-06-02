var express = require("express");
var router = express.Router();
require("dotenv").config();
const pool = require("../db/connection");

//Middlewares
const authMiddleware = require("../lib/authMiddleware");

/**ENDPOINTS /querys */

// GET - OBTENEMOS ONSULTAS EXISTENTES. SI USER_ID POR QUERY STRING --> LAS DEL USER
router.get("/", authMiddleware, async (req, res) => {
	const userId = req.query.user_id;
	try {
		if (userId) {
			const query = `
			SELECT querys.*, users.avatar, users.nickname
			FROM querys
			INNER JOIN users ON querys.user_id = users.user_id
			WHERE querys.user_id = ?
			ORDER BY query_date DESC
			`;
			const rows = await pool.query(query, [userId]);
			if (rows[0].length === 0) {
				return res
					.status(404)
					.json({ message: "El usuario no tiene consultas" });
			} else {
				res.status(200).json(rows[0]);
			}
		} else {
			const query = `
			SELECT querys.*, users.avatar, users.nickname 
			FROM querys 
			INNER JOIN users ON querys.user_id = users.user_id
			ORDER BY query_date DESC
			`;
			const rows = await pool.query(query);

			res.status(200).json(rows[0]);
		}
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Error al buscar consultas" });
	}
});

// POST - CREA UNA NUEVA CONSULTA (USER)
router.post("/create/:user_id", authMiddleware, async (req, res) => {
	const userId = req.params.user_id;
	const query_body = req.body.newQuery;
	try {
		const insertQuery = await pool.query(
			`INSERT INTO querys (query, user_id, query_date) VALUES (?, ?, NOW())`,
			[query_body, userId]
		);

		const insertedQueryId = insertQuery[0].insertId;

		const lastQueryResults = await pool.query(
			`SELECT * FROM querys WHERE query_id = ?`,
			[insertedQueryId]
		);

		const newQuery = lastQueryResults[0][0];

		res.status(201).json(newQuery);
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: error.message });
	}
});

// POST - ADMIN RESPONDE A QUERY EXISTENTE DEL USUARIO (ADMIN)
router.put("/respond/query/:queryId", authMiddleware, async (req, res) => {
	const { queryId } = req.params;
	const { adminResponse, adminId } = req.body;

	try {
		const query = `UPDATE querys SET response = ?, response_date = NOW(), admin_id = ?, query_status = 'responded' WHERE query_id = ?`;
		await pool.query(query, [adminResponse, adminId, queryId]);

		const lastQueryResults = await pool.query(
			`SELECT * FROM querys WHERE query_id = ?`,
			[queryId]
		);
		
		res.status(200).json(lastQueryResults[0][0]);
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: error.message });
	}
});

module.exports = router;
