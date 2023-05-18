import { useEffect, useState } from "react";

import { MainProfileCard } from "./MainProfileCard";
import { AboutMeProfileCard } from "./AboutMeProfileCard";
import authService from "../../services/auth.service";
import UserService from "../../services/user.service";

function ProfileSection(props) {
	const userService = new UserService();
	const user = authService.getCurrentUser();
	console.log(user.user_id)

	const [profileData, setProfileData] = useState({});

	useEffect(() => {
		const fetchData = async () => {
			try {
				// Obtenemos los datos del usuario logueado por defecto, o bien del usuario logueado.
				const userId = props.friendId || user.user_id;
				
				const userData = await userService.getUserById(userId);
				
				
				setProfileData(userData);
			} catch (error) {
				
				console.error(
					"Error al obtener los datos del perfil del usuario:",
					error
				);
			}
		};

		fetchData();
	}, [props.friendId, user.user_id]);

	return (
		<>
			<div className="row ipad-container d-flex justify-content-center">
				<MainProfileCard profileData={profileData} />
				<AboutMeProfileCard profileData={profileData} />
			</div>
		</>
	);
}

export default ProfileSection;
