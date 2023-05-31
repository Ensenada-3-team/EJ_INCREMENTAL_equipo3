import { FriendList } from "./Lists/FriendList";
import { ComunityList } from "./Lists/ComunityList";
import { RequestsList } from "./Lists/RequestsList";

function FriendsSection() {

	
	return (
		<>
			<div className="col-md-6 col-lg-7 ipad-friends-section p-0 ">
				{/* CONTENEDOR CENTRO CON DOS ROWS */}
				<div className="container-fluid">
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

			
		</>
	);
}

export default FriendsSection;
