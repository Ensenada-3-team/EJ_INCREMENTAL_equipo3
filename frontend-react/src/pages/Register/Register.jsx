import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import { RegisterForm } from "../../components/RegisterForm/RegisterForm";
import { Cover } from "../../components/Cover/Cover";

const Register = () => {
	return (
		<>
			<Navbar />
			<div className="container-fluid">
				<div className="row justify-content-center m-2">
					{/* BIENVENIDA */}
					< Cover welcome="Qué estás esperando para ser un tecler?"/>

					{/* REGISTRO */}
                              <RegisterForm />						
				</div>
			</div>

			<Footer />
		</>
	);
};

export default Register;
