import React from "react";
import { Button, Card } from "react-bootstrap";
import { BsArrowLeft } from "react-icons/bs";
import { Link, useLoaderData } from "react-router-dom";
import EditorsInsignt from "./EditorsInsignt";

const News = () => {
  const news = useLoaderData();
  const {
    title,
    details,
    image_url,
    author,
    published_date,
    rating,
    total_view,
  } = news;
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Link to="/category/0"><Button variant="danger">
            <BsArrowLeft></BsArrowLeft> All news in this category
          </Button></Link>
        </Card.Body>
      </Card>
      <EditorsInsignt></EditorsInsignt>
    </div>
  );
};

export default News;
