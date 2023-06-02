import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:3000/feedbacks/";

export default class FeedbackService {
	async getFeedbacks(userId) {
		try {
			const url = userId ? `${API_URL}${userId}` : `${API_URL}`;
			const response = await axios.get(url, { headers: authHeader() });
			return response.data;
		} catch (error) {
			if (error.response) {
				throw new Error(error.response.data.message);
			} else {
				throw error;
			}
		}
	}

	async createFeedback(sender, receiver, content) {
		try {
			const response = await axios.post(
				`${API_URL}/create`,
				{
					feedback_sender: sender,
					feedback_receiver: receiver,
					content: content,
				},
				{ headers: authHeader() }
			);
			return response.data;
		} catch (error) {
			if (error.response) {
				throw new Error(error.response.data.message);
			} else {
				throw error;
			}
		}
	}
}
