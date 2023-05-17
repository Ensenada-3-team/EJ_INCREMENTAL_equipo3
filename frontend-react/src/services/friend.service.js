import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:3000/friends/";

export default class FriendService {
	async getAllFriends(userId) {
		try {
			const response = await axios.get(`${API_URL}/user/${userId}`, {
				headers: authHeader(),
			});
			return response.data;
		} catch (error) {
			console.error(error);
			throw new Error("Error al obtener los amigos del usuario");
		}
	}

	async getAllNonFriends(userId) {
		try {
			const response = await axios.get(`${API_URL}/user/${userId}/nonfriends`, {
				headers: authHeader(),
			});
			return response.data;
		} catch (error) {
			console.error(error);
			throw new Error("Error al obtener los no amigos del usuario");
		}
	}

	async getFriendshipRequests(userId) {
		try {
			const response = await axios.get(
				`${API_URL}/pending-requests/${userId}`,
				{
					headers: authHeader(),
				}
			);

			return response.data;
		} catch (error) {
			console.error(error);
			throw new Error(
				"Error al obtener las solicitudes de amistad del usuario"
			);
		}
	}

	async getFriendshipStatus(userId, otherUserId) {
		try {
			const response = await axios.get(
				`${API_URL}/status/${userId}/${otherUserId}`,
				{
					headers: authHeader(),
				}
			);

			return response.data;
		} catch (error) {
			console.error(error);
			throw new Error(
				"Error al obtener el estado de amistad de los usuarios"
			);
		}
	}

	async sendFriendshipRequest(senderId, receiverId) {
		try {
			const response = await axios.post(
				`${API_URL}/send-request`,
				{
					sender_id: senderId,
					receiver_id: receiverId,
				},
				{ headers: authHeader() }
			);
			return response.data;
		} catch (error) {
			console.error(error);
			throw new Error("Error al crear la solicitud de amistad");
		}
	}

	async acceptFriendshipRequest(senderId, receiverId) {
		try {
			const response = await axios.put(
				`${API_URL}/accept-request`,
				{
					sender_id: senderId,
					receiver_id: receiverId,
				},
				{ headers: authHeader() }
			);
			return response.data;
		} catch (error) {
			console.error(error);
			throw new Error("Error al aceptar la solicitud de amistad");
		}
	}

      async rejectFriendshipRequest(senderId, receiverId) {
		try {
			const response = await axios.put(
				`${API_URL}/reject-request`,
				{
					sender_id: senderId,
					receiver_id: receiverId,
				},
				{ headers: authHeader() }
			);
			return response.data;
		} catch (error) {
			console.error(error);
			throw new Error("Error al rechazar la solicitud de amistad");
		}
	}

      async deleteFriendship(userId, friendId) {
		try {
			const response = await axios.put(
				`${API_URL}/reject-request`,
				{
					user_id: userId,
					friend_id: friendId,
				},
				{ headers: authHeader() }
			);
			return response.data;
		} catch (error) {
			console.error(error);
			throw new Error("Error al eliminar la amistad");
		}
	}


}
