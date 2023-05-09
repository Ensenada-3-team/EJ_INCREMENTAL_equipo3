import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:3000/posts/";

class PostService {
	async getAllPosts() {
		try {
			const response = await axios.get(API_URL);
			return response.data;
		} catch (error) {
			console.error(error);
			throw new Error("Error al obtener todos los posts");
		}
	}
      //Trae los posts de un usuario por su nickname
	async searchPostsByNickname(nickname) {
		try {
			const response = await axios.get(
				`${API_URL}private/search/${nickname}`, { headers: authHeader() }
			
			);
			return response.data;
		} catch (error) {
			console.error(error);
			throw new Error("Error al buscar posts del  nickname: " + nickname);
		}
	}
      // Trae los posts de un usuario y de sus amigos (además de sus datos) por su id.
	async getFriendsAndUserPostsByUserId(userId) {
		try {
			const response = await axios.get(`${API_URL}private/${userId}`, { headers: authHeader() });
			return response.data;
		} catch (error) {
			console.error(error);
			throw new Error("Error al obtener posts del  user ID : " + userId);
		}
	}

	async createPost(text, userId) {
		try {
			const response = await axios.post(
				`${API_URL}new-post/`,
				{
					text,
					user_id: userId,
				}, 
                        { headers: authHeader() }
			);
			return response.data;
		} catch (error) {
			console.error(error);
			throw new Error("Error al crear post");
		}
	}
}

const PostService = new PostService();
export default PostService;
