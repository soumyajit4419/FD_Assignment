import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Col, Row, Container, Table, Button } from "react-bootstrap";
import NavbarContent from "./Navbar";
import axios from "axios";
import { GrFormPreviousLink } from "react-icons/gr";
import "bootstrap/dist/css/bootstrap.min.css";

function TableDisplay() {
  const [details, setDetails] = useState([]);
  const [appDetails, setAppDetails] = useState([]);
  const [appName, setAppName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    let mounted = true;
    const id = params.id;

    axios
      .get(`https://api.npoint.io/baf8dba5974d29aa094b/${id}`)
      .then((res) => {
        if (mounted) {
          setDetails(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("https://api.npoint.io/adf6676a313fa01f787d")
      .then((res) => {
        if (mounted) {
          setAppDetails(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    if (appDetails) {
      for (var i = 0; i < appDetails.length; i++) {
        if (appDetails[i].id === id) {
          setAppName(appDetails[i].appName);
          setCompanyName(appDetails[i].publisherName);
        }
      }
    }

    return () => (mounted = false);
  }, [params.id, appDetails]);

  const handelClick = () => {
    history.goBack();
  };

  return (
    <div>
      <NavbarContent />
      <Container className="__table">
        <Row>
          <Col xs={1}>
            <Button className="__btn" onClick={handelClick}>
              <GrFormPreviousLink />
            </Button>
          </Col>
          <Col xs={11}>
            <h3>{appName}</h3>
            <p>{companyName}</p>
          </Col>
        </Row>
        <Table bordered hover size="lg" responsive>
          <thead>
            <tr>
              <th>Date</th>
              <th>Revenue</th>
              <th>Ad Request</th>
              <th>Ad Response</th>
              <th>Impressions</th>
              <th>Clicks</th>
              <th>Render Rate</th>
            </tr>
          </thead>
          <tbody>
            {details &&
              details.map((val, idx) => (
                <tr key={idx}>
                  <td>{val.date}</td>
                  <td>${val.revenue}</td>
                  <td>{val.adRequest}</td>
                  <td>{val.adResponse}</td>
                  <td>{val.impressions}</td>
                  <td>{val.clicks}</td>
                  <td>
                    {((val.impressions / val.adResponse) * 100).toFixed(2)}%
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default TableDisplay;
