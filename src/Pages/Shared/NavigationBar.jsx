import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";

const NavigationBar = () => {
  const { user } = useContext(AuthContext);

  return (
    <Container>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        className="mb-4"
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Link to="/categories/0">Home</Link>

            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Carrer</Nav.Link>
          </Nav>
          <Nav>
            {user && (
              <Nav.Link href="#deets">
                <FaUserCircle style={{ fontSize: "2rem" }}></FaUserCircle>
              </Nav.Link>
            )}

            {user ? (
              <Button variant="secondary">Logout</Button>
            ) : (
              <Link to="/login">
                <Button variant="secondary">Login</Button>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
