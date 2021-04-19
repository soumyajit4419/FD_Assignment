import React from "react";
import { Container, Row, Col, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import homeImg from "../Assets/home.svg";

function Home() {
  return (
    <Container fluid className="__home">
      <Navbar className="_navbar">
        <Navbar.Brand href="/" className="__navbar-brand">
          ADSOUL
        </Navbar.Brand>
      </Navbar>
      <Row className="__home-inner">
        <Col md={6}>
          <img
            src={homeImg}
            alt="main-img"
            className="img-fluid"
            style={{ width: "100%" }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
