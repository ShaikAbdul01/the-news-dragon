import React from "react";
import Header from "../Pages/Shared/Header";
import Footer from "../Pages/Shared/Footer";
import { Container, Col, Row } from "react-bootstrap";
import LeftNav from "../Pages/LeftNav";
import RightNav from "../Pages/RightNav";

const Main = () => {
  return (
    <div >
      <Header></Header>
      <Container>
        <Row >
          <Col lg={3}>
            <LeftNav></LeftNav>
          </Col>
          <Col lg={6}>center</Col>
          <Col lg={3}>
            <RightNav></RightNav>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;
