import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";
import Cover from "./components/Cover";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			< Navbar />
			< Cover />
			< LoginForm />
			< Footer />
		</>
	)
}

export default App;

