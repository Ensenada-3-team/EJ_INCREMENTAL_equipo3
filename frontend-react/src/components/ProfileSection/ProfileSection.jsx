import { useEffect, useState } from "react";

import { MainProfileCard } from "./MainProfileCard";
import { AboutMeProfileCard } from "./AboutMeProfileCard";

import authService from "../../services/auth.service";
import UserService from "../../services/user.service";

import Swal from "sweetalert2";

function ProfileSection(props) {
	
	const [profileData, setProfileData] = useState({});
	const user = authService.getCurrentUser();
	
	useEffect(() => {
		const fetchData = async () => {
			try {
				// Obtenemos los datos del usuario logueado por defecto, o bien del usuario logueado.
				const userService = new UserService();
				const userId = props.friendId || user.user_id;
				
				const userData = await userService.getUserById(userId);
				
				
				setProfileData(userData);
			} catch (error) {
				
				Swal.fire(
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
