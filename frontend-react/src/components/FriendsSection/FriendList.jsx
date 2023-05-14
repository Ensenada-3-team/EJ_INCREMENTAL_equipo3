import { useState, useEffect } from "react";
import { FriendCard } from "./FriendCard";
import authService from "../../services/auth.service";
import UserService from "../../services/user.service";
import Swal from "sweetalert2";

function FriendList(props) {
	const user = authService.getCurrentUser();
	const [friends, setFriends] = useState([]);

	useEffect(() => {
		const userService = new UserService();

		const fetchFriends = async () => {
			try {
				const userFriends = await userService.getUserFriends(user.user_id);
				setFriends(userFriends);
				console.log(userFriends);
			} catch (error) {
				console.error(error);
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "Ha ocurrido un error al obtener tus amigos!",
					footer: '<a href="">Why do I have this issue?</a>',
				});
			}
		};

		fetchFriends();
	}, [user.user_id]);

      console.log(friends)

	return (
		<ul id="friends-list" style={{ marginBottom: "10%" }}>
			{friends.map((friend) => (
				<FriendCard key={friend.user_id} data={friend} />
			))}
		</ul>
	);
}

export { FriendList };
