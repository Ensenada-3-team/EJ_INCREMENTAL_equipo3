/** PROFILE:
 * UseLocation permite obtener la información del id del usuario pasado por parámetro desde la URL
 * Si no existe ese valor, se renderiza el perfi del usuario que está logueado por defecto.
 */

import { useLocation } from "react-router-dom";

import Layout from "../../components/Layout";
import InterestsSection from "../../components/InterestsSection/InterestsSection";
import ProfileSection from "../../components/ProfileSection/ProfileSection";

function Profile() {
	const location = useLocation();
	const params = new URLSearchParams(location.search);
	const friendId = parseInt(params.get("user_id")) || null;

	return (
		<Layout>
			<InterestsSection />
			<div className="col-md-10 col-lg-10">
				<div className="container">
					<ProfileSection friendId={friendId} />
				</div>
			</div>
		</Layout>
	);
}

export default Profile;
