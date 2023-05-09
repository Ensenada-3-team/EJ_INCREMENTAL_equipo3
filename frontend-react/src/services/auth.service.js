import axios from "axios";

const API_URL = "http://localhost:3000/auth/";

class AuthService {
	async login(nicknameOrEmail, password) {
		const response = await axios
			.post(API_URL + "login", {
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

	getCurrentUser() {
		return JSON.parse(localStorage.getItem("user"));
	}
}

const authService = new AuthService();
export default authService;
