import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import first from "../assets/1.png";
import second from "../assets/2.png";
import third from "../assets/3.png";
import { BsCalendar } from "react-icons/bs";
const EditorsInsignt = () => {
  return (
    <div className="mt-5">
      <Row xs={1} md={2} lg={3} className="g-4">
        <Col>
          <Card>
            <Card.Img variant="top" src={first} />
            <Card.Body>
              <Card.Title>
                21 The Most Stylish Wedding Guest Dresses For Spring
              </Card.Title>
              <Card.Text className="d-flex align-items-center">
                <BsCalendar></BsCalendar>
                <p className="ms-4">Jan 4, 2022</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={second} />
            <Card.Body>
              <Card.Title>
                21 The Most Stylish Wedding Guest Dresses For Spring
              </Card.Title>
              <Card.Text className="d-flex align-items-center">
                <BsCalendar></BsCalendar>
                <p className="ms-4">Jan 4, 2022</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={third} />
            <Card.Body>
              <Card.Title>
                21 The Most Stylish Wedding Guest Dresses For Spring
              </Card.Title>
              <Card.Text className="d-flex align-items-center">
                <BsCalendar></BsCalendar>
                <p className="ms-4">Jan 4, 2022</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default EditorsInsignt;
