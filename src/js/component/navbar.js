import React from "react";
import { Navbar, Container, Nav} from "react-bootstrap";

export const Navba = () => {
	return (
		<Navbar>
		<Container>
		<Navbar.Brand href="#home"><Nav.Link href="/">ecom</Nav.Link></Navbar.Brand>
		<Nav className="me-auto">
		  <Nav.Link href="#home">collections</Nav.Link>
		  <Nav.Link href="#features">catalog</Nav.Link>
		  <Nav.Link href="#about">about us</Nav.Link>
		  <Nav.Link href="#blog">blog</Nav.Link>
		</Nav>
		</Container>
	  </Navbar>
	);
};
