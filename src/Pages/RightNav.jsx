import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import Qzone from "./Shared/Qzone";
import bg from '../assets/bg.png'

const RightNav = () => {
  return (
    <div>
      <div className="mb-4">
        <h4>Login With</h4>
        <Button className="mb-2" variant="outline-primary">
          <FaGoogle></FaGoogle> Login with Google
        </Button>
        <Button variant="outline-secondary">
          <FaGithub></FaGithub> Login with Github
        </Button>
      </div>
      <h4>Find Us On</h4>
      <ListGroup variant="flush">
        <ListGroup.Item className="px-2 py-4 fs-6">
          <FaFacebook className="text-primary me-2"></FaFacebook> facebook
        </ListGroup.Item>
        <ListGroup.Item className="px-2 py-4 fs-6">
          <FaTwitter className="text-info me-2"></FaTwitter> Twitter
        </ListGroup.Item>
        <ListGroup.Item className="px-2 py-4 fs-6">
          <FaInstagram className="text-danger me-2"></FaInstagram> Instragram
        </ListGroup.Item>
      </ListGroup>
      <Qzone></Qzone>
      <div className="mt-4 ">
        <img className="w-100 " src={bg} alt="" />
        <h2>heoo</h2>
      </div>
    </div>
  );
};

export default RightNav;
