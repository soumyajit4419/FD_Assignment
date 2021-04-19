import React from "react";
import { Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function NavbarContent() {
  return (
    <Navbar className="__navbar">
      <Navbar.Brand href="/" className="__navbar-brand">
        ADSOUL
      </Navbar.Brand>
    </Navbar>
  );
}

export default NavbarContent;
