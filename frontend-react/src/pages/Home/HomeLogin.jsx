import { Navbar } from "../../components/Navbar/Navbar";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { Cover } from "../../components/Cover/Cover";
import { Footer } from "../../components/Footer/Footer";

const HomeLogin = () => {
	return (
		<>
			<Navbar />
			<div className="container-fluid">
				<div className="row justify-content-center text-center">
					<Cover
						welcome="Bienvenido a Tecla"
						title="La red social para programadores"
						text="Aquí podrás compartir tus proyectos, encontrar trabajo y conectarte con otros programadores."
					/>
					<LoginForm />
				</div>
			</div>
			<Footer />
		</>
	);
};

export default HomeLogin;
