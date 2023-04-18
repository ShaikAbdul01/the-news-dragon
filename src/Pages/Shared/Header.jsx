import React from "react";
import logo from "../../assets/logo.png";
import moment from "moment/moment";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";
const Header = () => {
  return (
    <Container className="mt-4">
      <div className="text-center ">
        <img src={logo} alt="" />
        <p>Journalism Without Fear or Favour</p>
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
      <div className="container mx-auto d-flex mb-4">
        <Button variant="danger">Latest</Button>
        <Marquee speed={50}>
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...Match Highlights: Germany vs Spain —
          as it happened ! Match Highlights: Germany vs Spain as...
        </Marquee>
      </div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light"  className="mb-4">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Carrer</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Pofile</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              <Button variant="secondary">Secondary</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default Header;
