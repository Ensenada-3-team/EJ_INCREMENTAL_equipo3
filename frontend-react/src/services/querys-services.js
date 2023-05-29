import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:3000/querys/";

export default class QuerysService {
	async getQuerys(userId) {
		try {
			const url = userId ? `${API_URL}?user_id=${userId}` : `${API_URL}`;
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

	async addQuery(userId, newQuery) {
		try {
			const response = await axios.post(
				`${API_URL}/create/${userId}`,
				newQuery,
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

	async addResponse(queryId, adminResponse, adminId) {
		try {
			const response = axios.put(
				`${API_URL}/respond/query/${queryId}`,
				{ adminResponse: adminResponse, adminId: adminId },
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
