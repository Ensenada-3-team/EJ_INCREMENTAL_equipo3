const express = require("express");
const router = express.Router();
const pool = require("../db/connection");
require("dotenv").config();

// Middlewares y funciones
const authMiddleware = require("../lib/authMiddleware");
const minutesAgo = require("../lib/minutesAgo");

// ENPOINTS /friends/

// GET - OBTENER LOS AMIGOS DE UN USUARIO CON CIERTO USER_ID
router.get("/user/:user_id", async (req, res) => {
	try {
		const [rows, fields] = await pool.query(
			`SELECT users.user_id, name, firstname, nickname, birthdate, gender, avatar, email, ocupation, location, grade, linkedin, language, hobby, last_login
			FROM users
			WHERE users.user_id IN (
			    SELECT receiver_id FROM friends WHERE sender_id = ? AND status = 'accepted'
			    UNION
			    SELECT sender_id FROM friends WHERE receiver_id = ? AND status = 'accepted' 
                      ) `,

			[req.params.user_id, req.params.user_id]
		);

		//le añado el tiempo de la última vez que se ha iniciado sesión en formato amable
		const rowsWithTimeAgo = rows.map((row) => ({
			...row,
			lastLogin: minutesAgo(row.last_login),
		}));
		res.status(200).json(rowsWithTimeAgo);
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: "Error al obtener los amigos del usuario" });
	}
});

// GET - OBTENER TODOS LOS NO AMIGOS (accepted) DE UN USUARIO
router.get("/user/:user_id/nonfriends", async (req, res) => {
	const userId = req.params.user_id;
	try {
		const [rows, fields] = await pool.query(
			`SELECT users.user_id, name, firstname, nickname, birthdate, gender, avatar, email, ocupation, location, grade, linkedin, language, hobby, last_login
                  FROM users
                  WHERE users.user_id NOT IN (
                      SELECT sender_id FROM friends WHERE receiver_id = ?
                      UNION
                      SELECT receiver_id FROM friends WHERE sender_id = ?
                  )
			    AND user_id <> ? `,

			[userId, userId, userId]
		);
		const rowsWithTimeAgo = rows.map((row) => ({
			...row,
			lastLogin: minutesAgo(row.last_login),
		}));
		res.status(200).json(rowsWithTimeAgo);
	} catch (err) {
		console.error(err);
		res.status(500).json({
			message:
				"Error al obtener los datos de los usuarios no seguidos por el usuario",
		});
	}
});

// GET - OBTENER SOLICITUDES DE AMISTAD PENDIENTES DEL USUARIO
router.get("/pending-requests/:user_id", async (req, res) => {
	try {
		const [rows, fields] = await pool.query(
			`SELECT users.user_id, name, firstname, nickname, birthdate, gender, avatar, email, ocupation, location, grade, linkedin, language, hobby, last_login
                  FROM users
                  JOIN friends ON users.user_id = friends.sender_id
                  WHERE friends.receiver_id = ? AND friends.status = 'pending'`,

			[req.params.user_id]
		);

		//le añado el tiempo de la última vez que se ha iniciado sesión en formato amable
		const rowsWithTimeAgo = rows.map((row) => ({
			...row,
			lastLogin: minutesAgo(row.last_login),
		}));
		res.status(200).json(rowsWithTimeAgo);
	} catch (err) {
		console.error(err);
		res.status(500).json({
			error:
				"Error al obtener las solicitudes de amistad pendientes del usuario",
		});
	}
});

// GET - OBTENER EL ESTADO DE AMISTAD ENTRE DOS USUARIOS (accepted, rejected, pending, null)
router.get("/status/:user_id/:other_user_id", async (req, res) => {
	try {
		const userId = req.params.user_id;
		const otherUserId = req.params.other_user_id;

		// Consultamos el estado de la amistad en la tabla de amigos
		const [rows, fields] = await pool.query(
			"SELECT status FROM friends WHERE (sender_id = ? AND receiver_id = ?) OR (sender_id = ? AND receiver_id = ?)",
			[userId, otherUserId, otherUserId, userId]
		);

		// Si se encontró una amistad, devolvemos el estado
		if (rows.length > 0) {
			res.status(200).json({ status: rows[0].status });
		} else {
			// Si no se encontró una amistad, devolvemos null
			res.status(200).json({ status: null });
		}
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: "Error al obtener el estado de la amistad" });
	}
});

// POST - ENVIAR SOLICITUD DE AMISTAD
router.post("/send-request", async (req, res) => {
	try {
		const senderId = req.body.sender_id;
		const receiverId = req.body.receiver_id;

		// Insertamos la solicitud de amistad en la tabla de amigos
		const [result, fields] = await pool.query(
			`INSERT INTO friends (sender_id, receiver_id, status) VALUES (?, ?, 'pending') `,
			[senderId, receiverId]
		);

		// Si la inserción fue exitosa, devolvemos un mensaje de éxito
		if (result.affectedRows > 0) {
			res
				.status(200)
				.json({ message: "Solicitud de amistad enviada correctamente" });
		} else {
			res
				.status(500)
				.json({ error: "Error al enviar la solicitud de amistad" });
		}
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: "Error al enviar la solicitud de amistad" });
	}
});

// PUT - ACEPTAR SOLICITUD DE AMISTAD
router.put("/accept-request", async (req, res) => {
	try {
		const senderId = req.body.sender_id;
		const receiverId = req.body.receiver_id;

		// Actualizamos el estado de la solicitud de amistad a 'accepted'
		const [result, fields] = await pool.query(
			`UPDATE friends SET status = 'accepted' 
                  WHERE sender_id = ? 
                  AND receiver_id = ? 
                  AND status = 'pending'`,
			[senderId, receiverId]
		);

		// Si la actualización fue exitosa, devolvemos un mensaje de éxito
		if (result.affectedRows > 0) {
			res
				.status(200)
				.json({ message: "Solicitud de amistad aceptada correctamente" });
		} else {
			res
				.status(500)
				.json({ error: "Error al aceptar la solicitud de amistad" });
		}
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: "Error al aceptar la solicitud de amistad" });
	}
});

// PUT - RECHAZAR SOLICITUD DE AMISTAD
router.put("/reject-request", async (req, res) => {
	try {
		const senderId = req.body.sender_id;
		const receiverId = req.body.receiver_id;

		// Actualizamos el estado de la solicitud de amistad a 'rejected'
		const [result, fields] = await pool.query(
			`UPDATE friends SET status = 'rejected' 
                        WHERE sender_id = ? 
                        AND receiver_id = ? 
                        AND status = 'pending' `,
			[senderId, receiverId]
		);

		// Si la actualización fue exitosa, devolvemos un mensaje de éxito
		if (result.affectedRows > 0) {
			res
				.status(200)
				.json({ message: "Solicitud de amistad rechazada correctamente" });
		} else {
			res
				.status(500)
				.json({ error: "Error al rechazar la solicitud de amistad" });
		}
	} catch (err) {
		console.error(err);
		res
			.status(500)
			.json({ error: "Error al rechazar la solicitud de amistad" });
	}
});

// DELETE - ELIMINAR UN AMIGO
router.delete("/delete", async (req, res) => {
	try {
		const userId = req.body.user_id;
		const friendId = req.body.friend_id;

		// Eliminamos la relación de amistad de la tabla de amigos
		const [result, fields] = await pool.query(
			`DELETE FROM friends 
                  WHERE (sender_id = ? AND receiver_id = ? AND status = 'accepted') 
                        OR (sender_id = ? AND receiver_id = ? AND status = 'accepted') `,
			[userId, friendId, friendId, userId]
		);

		// Si la eliminación fue exitosa, devolvemos un mensaje de éxito
		if (result.affectedRows > 0) {
			res.status(200).json({ message: "Amigo eliminado correctamente" });
		} else {
			res.status(500).json({ error: "Error al eliminar al amigo" });
		}
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: "Error al eliminar al amigo" });
	}
});

module.exports = router;
