function AboutMeProfileCard(props){
      return (
            <>
            {/* CARD DERECHA : BIO + ICONOS REDES LINK + MAS INFO */}
				<section className="col-md-5 col-sm-1 order-sm-1 order-2 card mx-sm-0 mx-md-3 h-75 ipad-profile">
					<h4 className="card-header text-center">Acerca de mi:</h4>
					{/* bio */}
					<div className="card-body">
						<p id="acerca-de">
							Me apasiona compartir mis experiencias y conocimientos con otros,
							y me encanta por la posibilidad de inspirar a otros a explorar sus
							pasiones.
							<br />
							Para mí, la vida se trata de descubrir nuevas posibilidades y
							desafiar los límites, tanto en la naturaleza🌲🌱🍂 como en la
							tecnología.
						</p>
					</div>

					<div className=""></div>

					{/* mas info */}
					<div>
						<i className="bi bi-file-person"></i>
						<a id="link-hoja-de-vida" href="/">
							{" "}
							Más info
						</a>
					</div>
					<div>
						<i className="bi bi-envelope-at"></i>
						<a id="email" href="/">
							Email
						</a>
					</div>

					{/* links redes sociales */}
					<div className="card-footer d-flex justify-content-center mt-4">
						{/* github */}
						<button className="btn">
							<i className="bi bi-github"></i>
						</button>
						{/* linkedin */}
						<button className="btn">
							<i className="bi bi-linkedin"></i>
						</button>
						{/*  insta*/}
						<button className="btn">
							<i className="bi bi-instagram"></i>
						</button>
					</div>
				</section>
            
            </>
      )
}

export { AboutMeProfileCard }