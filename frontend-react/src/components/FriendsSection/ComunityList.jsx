import { useState, useEffect } from "react";
import { FriendCard } from "./FriendCard";
import authService from "../../services/auth.service";
import UserService from "../../services/user.service";
import Swal from "sweetalert2";

function ComunityList(props) {
	const user = authService.getCurrentUser();
	const [friends, setFriends] = useState([]);

	useEffect(() => {
		const userService = new UserService();

		const fetchFriends = async () => {
			try {
				const userFriends = await userService.getAllUsers();
				setFriends(userFriends);
				
			} catch (error) {
				console.error(error);
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "Ha ocurrido un error al obtener a los usuarios!",
					// footer: '<a href="">Why do I have this issue?</a>',
				});
			}
		};

		fetchFriends();
	}, [user.user_id]);

      console.log(friends)

	return (
		<ul id="comunity-list">
			{friends.map((friend) => (
				<FriendCard key={friend.user_id} data={friend} />
			))}
		</ul>
	);
}

export { ComunityList };
