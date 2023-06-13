import { useRoutes } from "react-router-dom";
import { useSelector } from "react-redux";
import routes from "./routes";
import ScrollToTop from "./ScrollToTop";

import "./App.css";
import "./responsive.css";


function App() {
	const user = useSelector((state) => state.auth.user);
	const token = useSelector((state) => state.auth.token);
	
	const isLoggedIn = Boolean(token) || false;
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
