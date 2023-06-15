const pool = require("../db/connection");

class QueryController {
	static getAllQuerysOrByUser = async (req, res) => {
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
	};

	static createQuery = async (req, res) => {
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
	};

	static respondQuery = async (req, res) => {
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
	};
}

module.exports = QueryController;
