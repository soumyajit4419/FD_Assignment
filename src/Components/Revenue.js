import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import icn1 from "../Assets/icon1.svg";
import icn2 from "../Assets/icon2.svg";
import icn3 from "../Assets/icon3.svg";
import icn4 from "../Assets/icon4.svg";

function Revenue() {
  return (
    <Container fluid className="__revenue">
      <Container>
        <h1 style={{ textAlign: "center", color: "white" }}>
          Revenue Optimization
        </h1>
        <Row className="__revenue-inner">
          <Col md={6} className="__revenue-icon">
            <img src={icn1} className="img-fluid" alt="icon1" />
            <h4>Fill Rate</h4>
          </Col>
          <Col md={6} className="__revenue-icon">
            <img src={icn2} className="img-fluid" alt="icon2" />
            <h4>Improve CTR</h4>
          </Col>

          <Col md={6} className="__revenue-icon">
            <img src={icn3} className="img-fluid" alt="icon3" />
            <h4>Refresh Rate</h4>
          </Col>
          <Col md={6} className="__revenue-icon">
            <img src={icn4} className="img-fluid" alt="icon4" />
            <h4>Quick Integration</h4>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Revenue;
