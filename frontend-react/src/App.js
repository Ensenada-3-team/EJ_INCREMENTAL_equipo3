import React ,{ useEffect } from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./App.css";

import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";
import Cover from "./components/Cover";
import Footer from "./components/Footer";

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
