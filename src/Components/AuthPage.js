import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Signup from "./Signup";
import Login from "./Login";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Auth() {
  return (
    <div>
      <Container className="register">
        <Row style={{ justifyContent: "center" }}>
          <Col md={8}>
            <Tabs
              defaultActiveKey="Signup"
              id="uncontrolled-tab-example"
              transition={false}
            >
              <Tab eventKey="Signup" title="Sign Up">
                <Signup />
              </Tab>
              <Tab eventKey="Signin" title="Sign In">
                <Login />
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Auth;
