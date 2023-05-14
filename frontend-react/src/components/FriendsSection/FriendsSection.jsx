import { SectionCard } from "./SectionCard";
import { FriendList } from "./FriendList";
import { ComunityList } from "./ComunityList";

function FriendsSection() {
	return (
		<div className="col-md-8 col-lg-9 flex-grow-1">
			{/* CONTENEDOR CENTRO CON DOS ROWS */}
			<div className="container">
				{/* ROW 1: ENCABEZADO Y BUSQUEDA DE TECLERS */}
				<SectionCard title="Esta es tu comunidad de Teclers" />
				
				{/* ROW 2: AMIGOS */}
				<div className="container-fluid">
					<FriendList />
				</div>
				{/* ROW 3: COMUNIDAD COMPLETA */}
				<SectionCard title="Explora a todos los miembros de la comunidad" />
				<div className="container-fluid">
					< ComunityList />
				</div>
			</div>
		</div>
	);
}

export default FriendsSection;