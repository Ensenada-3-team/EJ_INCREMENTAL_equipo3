import { FriendList } from "./Lists/FriendList";
import { ComunityList } from "./Lists/ComunityList";
import FeedRequestsSection from "../FeedRequestsSection/FeedRequestsSection";
import { RequestsList } from "./Lists/RequestsList";

function FriendsSection() {

	
	return (
		<>
			<div className="col-md-6 col-lg-7 ">
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
