import moment from "moment";
import React from "react";
import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  BsBookmark,
  BsFillEyeFill,
  BsShare,
  BsStar,
  BsStarFill,
  BsStarHalf,
} from "react-icons/bs";
import Rating from "react-rating";
const NewsCard = ({ news }) => {
  //   console.log(news);
  const { _id, title, details, image_url, author, rating, total_view } = news;
  return (
    <Card className="mb-4">
      <Card.Header>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <div className="">
              <Image
                style={{ height: "40px" }}
                src={author.img}
                roundedCircle
              />
            </div>
            <div className="ms-2">
              <p className="mb-0 ">{author?.name}</p>
              <p>{moment(author?.published_date).format("YYYY MM D")}</p>
            </div>
          </div>
          <div className="d-flex ">
            <BsBookmark></BsBookmark>
            <BsShare className="ms-2"></BsShare>
          </div>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details < 250 ? (
            { details }
          ) : (
            <>
              {details.slice(0, 250)}...
              <Link
                to={`/news/${_id}`}
                className="text-warning text-decoration-none"
              >
                {" "}
                Read More
              </Link>
            </>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex justify-content-between align-items-center">
        <div className="flex-grow-1">
          <Rating
            placeholderRating={rating.number}
            emptySymbol={<BsStar></BsStar>}
            placeholderSymbol={
              <BsStarFill className="text-warning"></BsStarFill>
            }
            fullSymbol={<BsStarFill></BsStarFill>}
          />
          {rating.number}
        </div>
        <div className="d-flex align-items-center">
          <BsFillEyeFill></BsFillEyeFill>
          {total_view}
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;
