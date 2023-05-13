function FriendsSection() {
	return (
		<div className="col-md-8 col-lg-9 flex-grow-1">
			{/* CONTENEDOR CENTRO CON DOS ROWS */}
			<div className="container">
				{/* ROW 1: ENCABEZADO Y BUSQUEDA DE TECLERS */}
				<div className="row">
					<div className="col card post-card">
						<div>
							<h2>Esta es tu comunidad de Teclers</h2>
						</div>

						<div className="search-box">
							<button className="btn-search">
								<img
									className="search-icon"
									src="../img/icons/search-icon2.png"
									alt=""
								/>
							</button>
							<input
								type="text"
								className="input-search"
								placeholder="Busca los posts de un tecler..."
							/>
						</div>
					</div>
				</div>

				{/* ROW 2: GRID DE TECLERS */}
				<div className="container-fluid">
					<ul id="friends-list" style={{ marginBottom: "10%" }}></ul>
				</div>
			</div>
		</div>
	);
}

export { FriendsSection };