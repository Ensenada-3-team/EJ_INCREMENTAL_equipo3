// import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import{ Navbar } from "../Navbar/Navbar";
import { LoginForm }from "../LoginForm/LoginForm";
import { Cover } from "../Cover/Cover";
import { Footer }from "../Footer/Footer";

function App() {
	return (
		<>
			<Navbar />
			<div ClassName="container-fluid">
				<div className="row justify-content-center text-center">
					<Cover welcome="Bienvenido a Tecla" title="La red social para programadores" text="Aquí podrás compartir tus proyectos, encontrar trabajo y conectarte con otros programadores." />
					<LoginForm />
				</div>
			</div>
			<Footer />
		</>
		
	);
}

export default App;
