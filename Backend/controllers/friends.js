const pool = require("../db/connection");
const minutesAgo = require("../lib/minutesAgo");

class FriendController {
	static async getFriendsByUserId(req, res) {
		try {
			const [rows, fields] = await pool.query(
				`SELECT users.user_id, name, firstname, nickname, birthdate, gender, avatar, email, occupation, location, grade, linkedin, language, bio, last_login
                        FROM users
                        WHERE users.user_id IN (
                            SELECT receiver_id FROM friends WHERE sender_id = ? AND status = 'accepted'
                            UNION
                            SELECT sender_id FROM friends WHERE receiver_id = ? AND status = 'accepted' 
                            ) `,

				[req.params.user_id, req.params.user_id]
			);

			//le añado el tiempo de la última vez que se ha iniciado sesión en formato visualmente más amigable
			const rowsWithTimeAgo = rows.map((row) => ({
				...row,
				lastLogin: minutesAgo(row.last_login),
			}));
			res.status(200).json(rowsWithTimeAgo);
		} catch (err) {
			console.error(err);
			res
				.status(500)
				.json({ error: "Error al obtener los amigos del usuario" });
		}
	}

	static async getNonFriendsByUserId(req, res) {
		const userId = req.params.user_id;
		try {
			const [rows, fields] = await pool.query(
				`SELECT users.user_id, name, firstname, nickname, birthdate, gender, avatar, email, occupation, location, grade, linkedin, language, bio, last_login
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
				message: "Error al obtener los datos de los no amigos del usuario",
			});
		}
	}

	static async getPendingRequestsByUserId(req, res) {
		try {
			const [rows, fields] = await pool.query(
				`SELECT users.user_id, friends.friendship_id, name, firstname, nickname, birthdate, gender, avatar, email, occupation, location, grade, linkedin, language, bio, last_login
                        FROM users
                        JOIN friends ON users.user_id = friends.sender_id
                        WHERE friends.receiver_id = ? AND friends.status = 'pending'`,

				[req.params.user_id]
			);

			//le añado el tiempo de la última vez que se ha iniciado sesión en formato visualmente más amigable
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
	}

	static async getFriendshipStatusAndSenderId(req, res) {
		try {
			const userId = req.params.user_id;
			const otherUserId = req.params.other_user_id;

			const [rows, fields] = await pool.query(
				"SELECT status, sender_id FROM friends WHERE (sender_id = ? AND receiver_id = ?) OR (sender_id = ? AND receiver_id = ?)",
				[userId, otherUserId, otherUserId, userId]
			);

			if (rows.length > 0) {
				res
					.status(200)
					.json({ status: rows[0].status, sender_id: rows[0].sender_id });
			} else {
				res.status(200).json({ status: null });
			}
		} catch (err) {
			console.error(err);
			res
				.status(500)
				.json({ error: "Error al obtener el estado de la amistad" });
		}
	}

	static async sendFrienshipRequest(req, res) {
		try {
			const senderId = req.body.sender_id;
			const receiverId = req.body.receiver_id;

			const [result, fields] = await pool.query(
				`INSERT INTO friends (sender_id, receiver_id, status) VALUES (?, ?, 'pending') `,
				[senderId, receiverId]
			);

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
			res
				.status(500)
				.json({ error: "Error al enviar la solicitud de amistad" });
		}
	}

	static async cancelFriendshipRequest(req, res) {
		try {
			const senderId = req.body.sender_id;
			const receiverId = req.body.receiver_id;

			const [result, fields] = await pool.query(
				`DELETE FROM friends WHERE sender_id = ? AND receiver_id = ? AND status = 'pending'`,
				[senderId, receiverId]
			);

			if (result.affectedRows > 0) {
				res
					.status(200)
					.json({ message: "Solicitud de amistad cancelada correctamente" });
			} else {
				res
					.status(500)
					.json({ error: "Error al cancelar la solicitud de amistad" });
			}
		} catch (err) {
			console.error(err);
			res
				.status(500)
				.json({ error: "Error al cancelar la solicitud de amistad" });
		}
	}

	static async acceptFriendshipRequest(req, res) {
		try {
			const senderId = req.body.sender_id;
			const receiverId = req.body.receiver_id;

			const [result, fields] = await pool.query(
				`UPDATE friends SET status = 'accepted' 
                        WHERE sender_id = ? 
                        AND receiver_id = ? 
                        AND status = 'pending'`,
				[senderId, receiverId]
			);

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
			res
				.status(500)
				.json({ error: "Error al aceptar la solicitud de amistad" });
		}
	}

	static async rejectFriendshipRequest(req, res) {
		try {
			const senderId = req.body.sender_id;
			const receiverId = req.body.receiver_id;

			const [result, fields] = await pool.query(
				`UPDATE friends SET status = 'rejected' 
                              WHERE sender_id = ? 
                              AND receiver_id = ? 
                              AND status = 'pending' `,
				[senderId, receiverId]
			);

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
	}

	static async deleteFriend(req, res) {
		try {
			const userId = req.body.user_id;
			const friendId = req.body.friend_id;

			const [result, fields] = await pool.query(
				`DELETE FROM friends 
                        WHERE (sender_id = ? AND receiver_id = ? AND status = 'accepted') 
                              OR (sender_id = ? AND receiver_id = ? AND status = 'accepted') `,
				[userId, friendId, friendId, userId]
			);
			
			if (result.affectedRows > 0) {
				res.status(200).json({ message: "Amigo eliminado correctamente" });
			} else {
				res.status(500).json({ error: "Error al eliminar al amigo" });
			}
		} catch (err) {
			console.error(err);
			res.status(500).json({ error: "Error al eliminar al amigo" });
		}
	}
}

module.exports = FriendController;
