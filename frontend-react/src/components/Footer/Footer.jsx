import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const Footer = () => {
	const [ref, inView] = useInView({
		threshold: 0, // porcentaje de visibilidad (0-1)
		rootMargin: "0px 0px -100px 0px", // margen de la vista
		// triggerOnce: true, // solo se activa una vez
		// delay: 300, // retraso en milisegundos antes de que se active el evento de entrada/salida de la vista (opcional)
	});

	return (
		<div ref={ref}>
			{inView && (
				<footer className="container-fluid fixed-bottom py-3">
					<div className="row d-flex d-block d-sm-none">
					<div className="col-4 ">
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
								rel="noreferrer"
								className="no-underline"
							>
								<strong> W3Schools</strong>
							</a>
						</div>
						<div className="d-flex justify-content-center text-center">
							<a
								href="https://stackoverflow.com/"
								target="_blank"
								rel="noreferrer"
								className="no-underline"
							>
								<strong> Stack-Overflow</strong>
							</a>
						</div>
					</div>

					<div className="col-4 d-flex flex-column align-items-center">
						<div className="">
							<a
								href="https://github.com/Ensenada-3-team/EJ_INCREMENTAL_equipo3"
								target="_blank"
								rel="noreferrer"
								className="no-underline"
							>
								<i className="bi bi-github fs-4"></i>
							</a>
						</div>
						<div className="">
							<a href="mailto:grupo3@teclers.com">
								<i className="bi bi-envelope fs-4"></i>
							</a>
						</div>
					</div>
					</div>
				</footer>
			)}
		</div>
	);
};

export { Footer };