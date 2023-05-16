import { useNavigate } from "react-router-dom";
import authService from "../../services/auth.service";

function AboutMeProfileCard(props) {
	const { profileData } = props;
	const navigate = useNavigate();
	const user = authService.getCurrentUser();

	return (
		<>
			{/* CARD DERECHA : BIO + ICONOS REDES LINK + MAS INFO */}
			<section className="col-md-5 col-sm-1 order-sm-1 order-2 card mx-sm-0 mx-md-3 ipad-profile">
				<h4 className="card-header text-center">Acerca de {user.user_id === profileData.user_id ? " mi:" : ` ${profileData.name}:`}</h4>
				{/* bio */}
				<div className="card-body w-100">
					<p id="acerca-de">
						Para mí, la vida se trata de descubrir nuevas posibilidades y
						desafiar los límites, tanto en la naturaleza🌲🌱🍂 como en la
						tecnología.
					</p>
					<div class="d-flex w-100 justify-content-end">
						<button class="btn" aria-label="Editar Biografía">
							<i class="bi bi-pencil"></i>
						</button>
					</div>
					<h4 className="card-header text-center">Cursos</h4>
					<h4 className="card-header text-center">Habilidades</h4>
				</div>

				{/* mas info */}
				<div className="d-flex justify-content-around w-100">
					<div>
						<i className="bi bi-file-person"></i>
						<a id="link-hoja-de-vida" to="/">
							{" "}
							Más info
						</a>
					</div>
					<div>
						<i className="bi bi-envelope-at"></i>
						<a id="email" href="/">
							{" "}
							Email
						</a>
					</div>
				</div>

				{/* links redes sociales */}
				<div className="card-footer d-flex justify-content-center mt-3">
					{/* github */}
					<button className="btn">
						<i className="bi bi-github"></i>
					</button>
					{/* linkedin */}
					<button className="btn" onClick={() => navigate("/")}>
						<i className="bi bi-linkedin"></i>
					</button>
					{/*  insta*/}
					<button className="btn">
						<i className="bi bi-instagram"></i>
					</button>
				</div>
			</section>
		</>
	);
}

export { AboutMeProfileCard };
