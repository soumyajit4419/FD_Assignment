import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavbarContent from "./Navbar";
import Revenue from "./Revenue";
import Applications from "./Applications";
import "bootstrap/dist/css/bootstrap.min.css";
import homeImg from "../Assets/home.svg";

function Home() {
  return (
    <div>
      <Container fluid className="__home">
        <Row className="__home-inner">
          <Col md={6} className="__home-sidebar">
            <NavbarContent />
            <div className="text-center __home-img">
              <img src={homeImg} alt="main-img" className="img-fluid" />
            </div>
            <Revenue />
          </Col>
          <Col md={6}>
            <h1
              className="text-center"
              style={{ paddingBottom: "10px", paddingTop: "10px" }}
            >
              Apps
            </h1>
            <Applications />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
