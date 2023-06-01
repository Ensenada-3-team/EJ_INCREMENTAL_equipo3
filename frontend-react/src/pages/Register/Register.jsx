import Layout from "../../components/Layout";
import { RegisterForm } from "../../components/RegisterForm/RegisterForm";
import { Cover } from "../../components/Cover/Cover";

const Register = () => {
	return (
		<Layout>
			{/* BIENVENIDA */}
			<Cover welcome="Qué estás esperando para ser un tecler?" />

			{/* REGISTRO */}
			<RegisterForm />
		</Layout>
	);
};

export default Register;
