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
			console.log(response.data);
			return response.data;
		} catch (error) {
			console.error(error);
			throw new Error("Error al obtener el estado de amistad de los usuarios");
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

	async cancelFriendshipRequest(userId, friendId) {
		try {
			const response = await axios.delete(`${API_URL}/cancel-request`, {
				data: {
					sender_id: userId,
					receiver_id: friendId,
				},
				headers: authHeader(),
			});
			return response.data;
		} catch (error) {
			console.error(error);
			throw new Error("Error al cancelar la solicitud de amistad");
		}
	}

	async acceptFriendshipRequest(senderId, receiverId) {
		// el sender es el amigo que ha enviado la solicitud (el usuario que no está logueado) data.user_id
		// el receiver es el que ha recibido la solicitud (el usuario que está logueado) user.user_id
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
		// el sender es el amigo que ha enviado la solicitud (el usuario que no está logueado) data.user_id
		// el receiver es el que ha recibido la solicitud (el usuario que está logueado) user.user_id
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

	/*
	Peculiaridad específica de las solicitudes DELETE en Axios. 
	En las solicitudes DELETE, los datos deben ser enviados como parte 
	de la configuración en el atributo data. En otras peticiones, van
	en el segundo argumento.
	*/ 
	async deleteFriendship(userId, friendId) {
		try {
			const response = await axios.delete(`${API_URL}/delete`, {
				data: {
					user_id: userId,
					friend_id: friendId,
				},
				headers: authHeader(),
			});
			return response.data;
		} catch (error) {
			console.error(error);
			throw new Error("Error al eliminar la amistad");
		}
	}
}
