import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import injectContext from "./store/appContext";
import { App } from "./component/App";
import { Home } from "./component/Home.jsx";
import { Book } from "./component/book.jsx";
import { Login } from "./component/login.jsx";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";
	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Routes>
					<Route path="/" element={<App />}>Register</Route>
					<Route path="/login" element={<Login />}>Login</Route>
					<Route path="/home" element={<Home />}>Home</Route>
					<Route path="/books" element={<Book />}>Books</Route>
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
