import { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter} from "react-router-dom";

import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./index.css";

import App from "./components/App/App";

// import { Provider } from "react-redux";
// import store from "./store/store.js";
//const <Provider store={store}> </Provider>

const container = document.getElementById("root");
const root = createRoot(container);
//

root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
