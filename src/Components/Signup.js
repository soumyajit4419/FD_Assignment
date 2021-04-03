import React, { useState } from "react";
import { auth } from "../Firebase/Firebase";
import { googleProvider } from "../Firebase/Firebase";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import "bootstrap/dist/css/bootstrap.min.css";

function Signup() {
  const [name, setName] = useState("");
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
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentail) => {
        const user = auth.currentUser;
        user
          .updateProfile({
            displayName: name,
          })
          .then(() => {
            console.log("User Name Updated");
          })
          .catch((error) => {
            console.log(error);
          });
        console.log(userCredentail.user);
      })
      .catch((err) => {
        console.log(err);
        setErrorMsg(err.message);
      });

    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="form">
      <h2 style={{ textAlign: "center" }}>Create your account</h2>
      <Form onSubmit={handelSubmit}>
        <Form.Group>
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            required
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Form.Group>

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
            Sign Up
          </Button>
        </div>
      </Form>
      <br />
      <div>
        {message !== "" ? <Alert variant="danger">{message}</Alert> : ""}
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
          Sign Up with google
        </Button>
      </div>
    </div>
  );
}

export default Signup;
