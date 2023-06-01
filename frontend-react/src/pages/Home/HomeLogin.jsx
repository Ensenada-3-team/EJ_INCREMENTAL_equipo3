import Layout from "../../components/Layout";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { Cover } from "../../components/Cover/Cover";

const HomeLogin = () => {
	return (
		<Layout>
			<Cover
				welcome="Bienvenido a Tecla"
				title="La red social para programadores"
				text="Aquí podrás compartir tus proyectos, encontrar trabajo y conectarte con otros programadores."
			/>
			<LoginForm />
		</Layout>
	);
};

export default HomeLogin;
