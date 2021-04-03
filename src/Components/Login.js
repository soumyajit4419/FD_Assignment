import React, { useState } from "react";
import { auth } from "../Firebase/Firebase";
import { googleProvider } from "../Firebase/Firebase";
import ForgetPassword from "./ForgetPassword";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setErrorMsg] = useState("");

  const googleSignIn = () => {
    auth
      .signInWithPopup(googleProvider)
      .then((userCredentail) => {
        console.log(userCredentail.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handelSubmit = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentail) => {
        console.log(userCredentail.user);
        console.log("Logged In");
      })
      .catch((err) => {
        console.log(err);
        setErrorMsg(err.message);
      });

    setEmail("");
    setPassword("");
  };

  return (
    <div className="form">
      <h2 style={{ textAlign: "center" }}>Sign in to your account</h2>
      <Form onSubmit={handelSubmit}>
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Form.Group>

        <div className="btn-center">
          <Button variant="primary" type="submit">
            Sign In
          </Button>
        </div>
      </Form>
      <br />
      <div>
        {message !== "" ? <Alert variant="danger">{message}</Alert> : ""}
      </div>

      <div className="btn-center">
        <ForgetPassword />
      </div>

      <br />

      <div className="btn-center">
        <Button
          variant="primary"
          onClick={googleSignIn}
          className="google-btn "
        >
          <img
            alt="g-sign-in"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
            style={{ width: "18px" }}
          />{" "}
          Sign In with google
        </Button>
      </div>
    </div>
  );
}

export default Login;
