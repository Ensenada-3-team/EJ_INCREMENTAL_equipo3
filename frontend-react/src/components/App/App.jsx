import { useRoutes } from "react-router-dom";
import authService from "../../services/auth.service";
import routes from "../routes";
import ScrollToTop from "../ScrollToTop";

import "./App.css";
import "./responsive.css";

function App() {
	const isLoggedIn = Boolean(authService.getCurrentToken());
	const routing = useRoutes(routes(isLoggedIn));

	return (
		<>
			<ScrollToTop />
			{routing}
		</>
	);
}

export default App;
