import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:3000/auth/";

class AuthService {
	// async login(userData) {
	// 	const response = await axios.post(API_URL + "login", userData);
	// 	if (response.data.token) {
	// 		localStorage.setItem("user", JSON.stringify(response.data));
	// 	}
	// 	return response.data;
	// }

	async logout() {
		localStorage.removeItem("user");
	}

	// async register(userData) {
	// 	try {
	// 		const response = await axios.post(API_URL + "register", userData);
	// 		return response.status;
	// 	} catch (error) {
	// 		throw new Error(error.response.data.message);
	// 	}
	// }

	async changePassword(userId, oldPassword, password) {
		try {
			const response = await axios.put(
				API_URL + "/change-password",
				{
					userId,
					oldPassword,
					password,
				},

				{ headers: authHeader() }
			);

			return response.status;
		} catch (error) {
			if (error.response) {
				throw new Error(error.response.data.message);
			} else {
				throw error;
			}
		}
	}

	getCurrentUser() {
		const user = JSON.parse(localStorage.getItem("user"));
		return user ? user.user : null;
	}

	getCurrentToken() {
		const user = JSON.parse(localStorage.getItem("user"));
		return user ? user.token : null;
	}
}

const authService = new AuthService();
export default authService;
