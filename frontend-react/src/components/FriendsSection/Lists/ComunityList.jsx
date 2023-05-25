import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { FriendCard } from "../Cards/FriendCard";
import { SectionCard } from "../Cards/SectionCard";
import authService from "../../../services/auth.service";
import UserService from "../../../services/user.service";
import Swal from "sweetalert2";

function ComunityList() {
	const user = authService.getCurrentUser();
	const [friends, setFriends] = useState([]);
	const searchTerm = useSelector((state) => state.search);

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

	const filteredFriends = friends.filter((friend) =>
		friend.nickname.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<>
			<SectionCard
				title="Explora a todos los Teclers"
				background="bg-secondary bg-gradient"
			/>
			{/* <ul id="comunity-list" className="list-group">
				{friends.map((friend) => (
					<FriendCard key={friend.user_id} data={friend} />
				))}
			</ul> */}
			<ul id="comunity-list" className="list-group">
				{filteredFriends.map((friend) => (
					<FriendCard key={friend.user_id} data={friend} />
				))}
			</ul>
		</>
	);
}

export { ComunityList };
