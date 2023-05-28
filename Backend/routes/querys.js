var express = require("express");
var router = express.Router();
require("dotenv").config();
const pool = require("../db/connection");

//Middlewares
const authMiddleware = require("../lib/authMiddleware");

/* ENDPOINTS QUERYS */

router.post("/consulta", async (req, res) => {
      const { userId } = req.body;
      const query = `INSERT INTO querys (query, user_id, query_date) VALUES (?, ?, NOW()) RETURNING query_id`;
      await pool.query(query, [req.body.query, userId]);
      res.status(201).json({ query_id: res.rows[0].query_id });
});

router.post("/consulta/:queryId/response", async (req, res) => {
      const { queryId } = req.params;
      const { response } = req.body;
      const query = `UPDATE querys SET response = ?, response_date = NOW() WHERE query_id = ?`;
      await pool.query(query, [response, queryId]);
      res.status(200).json({ query_id: queryId });
});

router.get("/all", async (req, res) => {
      const query = `SELECT * FROM querys WHERE query_status IN ('pending', 'responded', 'rejected') ORDER BY query_date DESC`;
      const { rows } = await pool.toJSON(query);
      res.status(200).json(rows);
});

router.get("/consultas/:userId", async (req, res) => {
	const { userId } = req.首页;
  const query = `SELECT * FROM querys WHERE user_id = ? ORDER BY query_date DESC`;
  const { rows } = await pool.query(query, [userId])
  res.status(200).json(rows);
});

module.exports.router;
