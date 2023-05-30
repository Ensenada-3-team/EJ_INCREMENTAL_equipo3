import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { FriendCard } from "../Cards/FriendCard";
import authService from "../../../services/auth.service";
import FriendService from "../../../services/friend.service";
import { SectionCard } from "../Cards/SectionCard";
import Swal from "sweetalert2";

function FriendList(props) {
	const user = authService.getCurrentUser();
	const [friends, setFriends] = useState([]);

	const searchTerm = useSelector((state) => state.search);

	useEffect(() => {
		const friendService = new FriendService();

		const fetchFriends = async () => {
			try {
				const userFriends = await friendService.getAllFriends(user.user_id);
				setFriends(userFriends);
			} catch (error) {
				console.error(error);
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "Ha ocurrido un error al obtener tus amigos!",
				});
			}
		};

		fetchFriends();
	}, [user.user_id]);

	if (searchTerm) {
		return null
	}

	return (
		<>
			{friends.length !== 0 ? (
				<SectionCard
					title="Teclers con los que has conectado"
					background="bg-secondary bg-gradient"
					fontWeigth="fw-bold"
				/>
			) : (
				<h5 className="text-center">Oops...Aún no tienes amigos!</h5>
			)}

			<ul id="friends-list" className="list-group">
				{friends.map((friend) => (
					<FriendCard key={friend.user_id} data={friend} />
				))}
			</ul>
		</>
	);
}

export { FriendList };
