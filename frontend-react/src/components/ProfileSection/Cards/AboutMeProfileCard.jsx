import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import authService from "../../../services/auth.service";
import UserService from "../../../services/user.service";

import { CoursesList } from "../Lists/CoursesList";

import Modal from "bootstrap/js/dist/modal";
import Swal from "sweetalert2";

function AboutMeProfileCard(props) {
	const { profileData } = props;
	const [bio, setBio] = useState(profileData.bio);
	const [modalInstance, setModalInstance] = useState(null);
	const modalRef = useRef(null);
	const user = authService.getCurrentUser();

	useEffect(() => {
		if (modalRef.current) {
			const modal = new Modal(modalRef.current);
			setModalInstance(modal);
		}
	}, []);

	const handleSaveBio = async () => {
		try {
			const userService = new UserService();
			const userId = user.user_id;
			const updatedBio = { bio: bio };
			await userService.updateUser(userId, updatedBio);
			setBio(bio);
			if (modalInstance) {
				modalInstance.hide();
			}
		} catch (error) {
			Swal.fire(error.message);
		}
	};

	const handleOpenModal = () => {
		if (modalInstance) {
			modalInstance.show();
		}
	};

	return (
		<>
			{/* CARD DERECHA : BIO + ICONOS REDES LINK + MAS INFO */}
			<section className="col-md-5 col-sm-1 order-sm-1 order-2 card mx-sm-0 mx-md-3 ipad-profile">
				<h4 className="card-header text-center">
					Acerca de{" "}
					{user.user_id === profileData.user_id
						? " mi:"
						: ` ${profileData.name}:`}
				</h4>
				{/* bio */}
				<div className="card-body w-100">
					<p id="acerca-de">{bio || profileData.bio}</p>
					<div className="d-flex w-100 justify-content-end">
						{user.user_id === profileData.user_id && (
							<button
								className="btn"
								aria-label="Editar Biografía"
								title="Edita tu biografía"
								onClick={handleOpenModal}
							>
								<i className="bi bi-pencil"></i>
							</button>
						)}
					</div>
					
					<CoursesList userId={profileData.user_id || user.user_id} />

					<h4 className="card-header text-center">Habilidades</h4>
				</div>

				{/* mas info */}
				<div className="d-flex justify-content-around w-100">
					{/* <div>
						<i className="bi bi-file-person"></i>
						<a id="link-hoja-de-vida" to="/" href="/">
							{" "}
							Más info
						</a>
					</div> */}
					<div>
						<i className="bi bi-envelope-at"></i>
						<a
							id="email"
							href={`mailto:${profileData.email}?subject=Asunto&body=Cuerpo del mensaje`}
						>
						</a>
					</div>
				</div>

				{/* links redes sociales */}
				<div className="card-footer d-flex justify-content-center mt-3">
					{/* github */}
					{profileData.github && (
						<button className="btn">
							<i className="bi bi-github"></i>
						</button>
					)}
					{/* linkedin */}
					{profileData.linkedin && (
						<Link className="btn" to={profileData.linkedin} target="_blank">
							<i className="bi bi-linkedin"></i>
						</Link>
					)}
					{/*  instagram */}
					{profileData.instagram && (
						<button className="btn">
							<i className="bi bi-instagram"></i>
						</button>
					)}
				</div>
			</section>
			{/* Modal para editar la biografía */}
			<div className="modal" tabIndex="-1" ref={modalRef}>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">Editar biografía</h5>
							<button
								type="button"
								className="btn-close"
								onClick={() => modalInstance.hide()}
							></button>
						</div>
						<div className="modal-body">
							<form>
								<div className="form-group">
									<label htmlFor="bioTextarea">Biografía</label>
									<textarea
										className="form-control"
										id="bioTextarea"
										rows={4}
										value={bio}
										onChange={(e) => setBio(e.target.value)}
									></textarea>
								</div>
							</form>
						</div>
						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-secondary"
								onClick={() => modalInstance.hide()}
							>
								Cancelar
							</button>
							<button
								type="button"
								className="btn btn-primary"
								onClick={handleSaveBio}
							>
								Guardar cambios
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export { AboutMeProfileCard };
