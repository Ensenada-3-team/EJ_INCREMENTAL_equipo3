function CreatePostElement() {
	return (
		<div className="row">
			<div className="col card post-card">
				<div className="d-flex w-100 card-header rounded mb-2 p-0">
					<img
						id="logged-user-image"
						className="avatar rounded rounded-circle border border-dark"
						alt="imagen usuario logueado"
					/>
					<div className="d-column m-1">
						<h4 id="username" className="mt-1"></h4>
						<p id="ocupation"></p>
					</div>
				</div>
				<h4 className="align-self-start">
					<i className="bi bi-send"></i> Comparte algo con tu comunidad:
				</h4>
				<form id="form-publicacion" className="w-100" noValidate>
					<textarea
						id="mensaje-post"
						className="form-control sombra rounded"
						placeholder="Cuéntanos algo interesante en menos de 256 caracteres :D"
						maxLength="256"
						rows="3"
					></textarea>
					<div className="d-flex flex-row-reverse">
						<button
							type="submit"
							className="btn btn-sm btn-dark sombra"
							id="crear-publicacion"
						>
							Post
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export { CreatePostElement };
