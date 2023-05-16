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
				// Obtiene el userId que se pasa como prop o utiliza el userId del usuario logueado por defecto
				const userId = props.userId || user.user_id;
				// Realiza la petición al backend para obtener los datos del usuario
				const userData = await userService.getUserById(userId);
				console.log(userData)
				// Actualiza el estado con los datos del perfil del usuario
				setProfileData(userData);
			} catch (error) {
				// Maneja el error de la petición
				console.error(
					"Error al obtener los datos del perfil del usuario:",
					error
				);
			}
		};

		fetchData();
	}, [props.userId, user.user_id]);

	return (
		<>
			<div className="row ipad-container">
				<MainProfileCard profileData={profileData} />
				<AboutMeProfileCard profileData={profileData} />
			</div>
		</>
	);
}

export default ProfileSection;
