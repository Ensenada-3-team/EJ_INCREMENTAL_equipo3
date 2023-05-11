import React ,{ useEffect } from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./App.css";

import{ Navbar } from "../Navbar/Navbar";
import { LoginForm }from "../LoginForm/LoginForm";
import { Cover } from "../Cover/Cover";
import { Footer }from "../Footer/Footer";

function App() {
	return (
		<>
			<Navbar />
			<Cover />
			<LoginForm />
			<Footer />
		</>
		
	);
}

export default App;
