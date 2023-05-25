import { useRoutes } from "react-router-dom";
import authService from "../../services/auth.service";
import routes from "./routes";
import ScrollToTop from "../ScrollToTop";

import "./App.css";
import "./responsive.css";
import "../../styles/responsive.css"

function App() {
	const user = authService.getCurrentUser();
	const isLoggedIn = Boolean(authService.getCurrentToken()) || false;
	const isAdmin = user ? user.role === "admin" : false;
	
	
	const routing = useRoutes(routes(isLoggedIn, isAdmin));

	return (
		<>
			<ScrollToTop />
			{routing}
		</>
	);
}

export default App;
