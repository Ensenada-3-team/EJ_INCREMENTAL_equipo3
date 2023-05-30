import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import { RegisterForm } from "../../components/RegisterForm/RegisterForm";
import { Cover } from "../../components/Cover/Cover";

const Register = () => {
	return (
		<>
			<Navbar />
			<main className="container-fluid">
				<div className="row justify-content-around p-0">
					{/* BIENVENIDA */}
					< Cover welcome="Qué estás esperando para ser un tecler?"/>

					{/* REGISTRO */}
                              <RegisterForm />						
				</div>
			</main>

			<Footer />
		</>
	);
};

export default Register;
