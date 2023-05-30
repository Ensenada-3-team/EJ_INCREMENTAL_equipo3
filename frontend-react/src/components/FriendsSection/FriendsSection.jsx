import { FriendList } from "./Lists/FriendList";
import { ComunityList } from "./Lists/ComunityList";
import { RequestsList } from "./Lists/RequestsList";
import FeedRequestsSection from "../FeedRequestsSection/FeedRequestsSection";

function FriendsSection() {

	
	return (
		<>
			<div className="col-md-6 col-lg-7 ipad-friends-section">
				{/* CONTENEDOR CENTRO CON DOS ROWS */}
				<div className="container">
					{/* ROW 2: AMIGOS */}
					<div className="container-fluid">
						<FriendList />
					</div>

					{/* ROW 2: SOLICITUDES DE AMISTAD MOBILE */}
					<div className="container-fluid d-block d-md-none">
						<RequestsList />
					</div>

					{/* ROW 3: COMUNIDAD COMPLETA */}
					<div className="container-fluid">
						<ComunityList />
					</div>
					
				</div>
			</div>

			<FeedRequestsSection />
		</>
	);
}

export default FriendsSection;
