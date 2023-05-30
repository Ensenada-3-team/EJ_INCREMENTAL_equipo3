import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="bd-footer mt-auto py-3">
			<div className="row">
				<div className="col-4">
					<div className="d-flex justify-content-center">
						<Link to="/" className="navbar-brand">
							<img
								className="avatar-sm"
								src="/enter-black.png"
								alt="Logo-Tecla"
							/>
						</Link>
					</div>
				</div>

				<div className="col-4">
					<div className="d-flex justify-content-center">
						<h4>Links</h4>
					</div>
					<div className="d-flex justify-content-center">
						<a
							href="https://www.w3schools.com/"
							target="_blank"
							className="no-underline"
						>
							<strong> W3Schools</strong>
						</a>
					</div>
					<div className="d-flex justify-content-center">
						<a
							href="https://stackoverflow.com/"
							target="_blank"
							className="no-underline"
						>
							<strong> Stack-Overflow</strong>
						</a>
					</div>
				</div>

				<div className="col-4">
					<div className="d-flex justify-content-center">
						<h6>Nuestro equipo</h6>
					</div>
					<div className="d-flex justify-content-center">
						<a
							href="https://github.com/Ensenada-3-team/EJ_INCREMENTAL_equipo3"
							target="_blank"
							className="no-underline"
						>
							<i className="bi bi-github fs-4"></i>
						</a>
					</div>
          <div className="d-flex justify-content-center">
              <a href="mailto:grupo3@teclers.com">
                <i
                  className="bi bi-envelope fs-4"
                ></i>
              </a>
            </div>
				</div>
			</div>
		</footer>
	);
};

export { Footer };
