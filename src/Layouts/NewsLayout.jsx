import React from "react";
import Header from "../Pages/Shared/Header";
import Footer from "../Pages/Shared/Footer";
import { Container, Col, Row } from "react-bootstrap";
import LeftNav from "../Pages/LeftNav";
import RightNav from "../Pages/RightNav";
import { Outlet } from "react-router-dom";

const NewsLayout = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col lg={9}>
            <Outlet></Outlet>
          </Col>
          <Col lg={3}>
            <RightNav></RightNav>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default NewsLayout;
