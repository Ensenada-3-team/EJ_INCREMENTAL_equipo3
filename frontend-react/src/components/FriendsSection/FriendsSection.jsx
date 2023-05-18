import { SectionCard } from "./SectionCard";
import { FriendList } from "./FriendList";
import { ComunityList } from "./ComunityList";
import FeedRequestsSection from "../FeedRequestsSection/FeedRequestsSection";

function FriendsSection() {
	return (
		<>
			<div className="col-md-6 col-lg-7">
				{/* CONTENEDOR CENTRO CON DOS ROWS */}
				<div className="container">
					{/* ROW 1: ENCABEZADO */}
					<SectionCard
						title="Esta es tu comunidad de Teclers"
						background="bg-dark"
						textColor="text-light"
						fontWeigth="fw-normal"
					/>
					{/* ROW 2: AMIGOS */}
					<div className="container-fluid">
						<FriendList />
					</div>

					<SectionCard title="Solicitudes de amistad" background="post-card" display="d-block d-md-none"/>
					<div className="container-fluid d-block d-md-none">
						
					</div>

					{/* ROW 3: COMUNIDAD COMPLETA */}
					<SectionCard title="Explora a todos los miembros de la comunidad" background="post-card" />
					<div className="container-fluid">
						<ComunityList />
					</div>
					<div className="col-md-5">hola</div>
				</div>
			</div>

			<FeedRequestsSection />
		</>
	);
}

export default FriendsSection;
