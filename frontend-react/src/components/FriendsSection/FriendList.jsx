import { useState, useEffect } from "react";
import { FriendCard } from "./FriendCard";
import authService from "../../services/auth.service";
import FriendService from "../../services/friend.service";
import { SectionCard } from "./SectionCard";
import Swal from "sweetalert2";

function FriendList(props) {
	const user = authService.getCurrentUser();
	const [friends, setFriends] = useState([]);

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
					// footer: '<a href="">Why do I have this issue?</a>',
				});
			}
		};

		fetchFriends();
	}, [user.user_id]);

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
