import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import authService from "../../services/auth.service";

function ProtectedRoute({ path, element: Element, ...rest }) {
	const navigate = useNavigate();
	const token = authService.getCurrentToken();

	useEffect(() => {
		if (!token) {
			navigate("/");
		}
	}, [navigate, token]);

	return token ? <Element {...rest} /> : null;
}

export default ProtectedRoute;
