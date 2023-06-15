const pool = require("../db/connection");

class FeedbackController {
	static async getAllFeedbacksOrById(req, res) {
		const userId = req.params.user_id;
		try {
			if (userId) {
				const feedbacks = await pool.query(
					`SELECT feedback.*, users.nickname, users.avatar, users.occupation, users.name, users.firstname 
                              FROM feedback 
                              INNER JOIN users ON feedback.feedback_sender = users.user_id
                              WHERE feedback.feedback_receiver = ?`,
					[userId]
				);

				res.status(200).json(feedbacks[0]);
			} else {
				const feedbacks = await pool.query(
					`SELECT feedback.*, users.nickname, users.avatar, users.occupation, users.name, users.firstname 
                        FROM feedback 
                        INNER JOIN users ON feedback.feedback_sender = users.user_id`
				);
				res.status(200).json(feedbacks[0]);
			}
		} catch (error) {
			console.error(error);
			res.status(500).json({
				message: "Internal Server Error",
			});
		}
	}

	static async createFeedback(req, res) {
		const { feedback_sender, feedback_receiver, content } = req.body;

		try {
			const newFeedback = await pool.query(
				`INSERT INTO feedback (feedback_sender, feedback_receiver, content) VALUES (?, ?, ?)`,
				[feedback_sender, feedback_receiver, content]
			);

			res.status(201).json({ feedback_id: newFeedback[0].insertId });
		} catch (error) {
			console.error(error);
			res.status(500).json({
				message: `Internal Server Error: ${error}`,
			});
		}
	}
}

module.exports = FeedbackController;