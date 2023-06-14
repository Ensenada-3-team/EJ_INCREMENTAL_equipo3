import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import UserService from "../../../services/user.service";

import { FriendCard } from "../Cards/FriendCard";
import { SectionCard } from "../Cards/SectionCard";

import Swal from "sweetalert2";

function ComunityList() {
	const [friends, setFriends] = useState([]);
	const user = useSelector((state) => state.auth.user);
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
				});
			}
		};

		fetchFriends();
	}, [user.user_id]);

	const filteredFriends = friends.filter((friend) => {
		const searchTermLower = searchTerm.toLowerCase();
		const nicknameLower = friend.nickname.toLowerCase();
		const nameLower = friend.name.toLowerCase();
		const firstnameLower = friend.firstname.toLowerCase();
		const emailLower = friend.email.toLowerCase();

		// Retorna verdadero si el término de búsqueda está presente en el nickname o en el name
		return (
			nicknameLower.includes(searchTermLower) ||
			nameLower.includes(searchTermLower) ||
			firstnameLower.includes(searchTermLower) ||
			emailLower.includes(searchTermLower)
		);
	});

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
