import axios from "axios";
import authHeader from "./auth-header";


const API_URL = "http://localhost:3000/auth/";

class AuthService {
	async login(nicknameOrEmail, password) {
		const response = await axios.post(API_URL + "login", {
			nicknameOrEmail,
			password,
		});
		if (response.data.token) {
			localStorage.setItem("user", JSON.stringify(response.data));
		}
		return response.data;
	}

	logout() {
		localStorage.removeItem("user");
	}

	async register(
		name,
		firstname,
		nickname,
		birthdate,
		gender,
		avatar,
		password,
		email,
		ocupation,
		location,
		grade,
		linkedin,
		language,
		hobby
	) {
		try {
			const response = await axios.post(API_URL + "register", {
				name,
				firstname,
				nickname,
				birthdate,
				gender,
				avatar,
				password,
				email,
				ocupation,
				location,
				grade,
				linkedin,
				language,
				hobby,
			});
			return response;
		} catch (error) {
			console.log(error);
		}
	}

	async changePassword(userId, oldPassword, password) {
		try {
		  const response = await axios.put(
		    "/change-password",
		    {
			userId,
			oldPassword,
			password,
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



	getCurrentUser() {
		return JSON.parse(localStorage.getItem("user"));
	}
}

const authService = new AuthService();
export default authService;
