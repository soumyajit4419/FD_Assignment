import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import Details from "./Details";
import { AppContext } from "../App";
import "bootstrap/dist/css/bootstrap.min.css";

function Applications() {
  const appDetails = useContext(AppContext);

  return (
    <Container fluid className="__apps">
      <Container>
        <h1 className="text-center" style={{ paddingBottom: "20px" }}>
          Apps
        </h1>
        {appDetails.details.map((value) => (
          <Details
            key={value.id}
            appName={value.appName}
            id={value.id}
            companyName={value.publisherName}
          />
        ))}
      </Container>
    </Container>
  );
}

export default Applications;
