import React, { useEffect, useContext, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Col, Row, Container, Table, Button } from "react-bootstrap";
import NavbarContent from "./Navbar";
import { AppContext } from "../App";
import { GrFormPreviousLink } from "react-icons/gr";
import "bootstrap/dist/css/bootstrap.min.css";

function TableDisplay() {
  const [details, setDetails] = useState([]);
  const [appName, setAppName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const appStats = useContext(AppContext);
  const stats = appStats.stats;
  const comp = appStats.details;
  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    if (stats) {
      setDetails(stats[params.id]);
    }
    if (comp) {
      setAppName(comp[params.id - 1].appName);
      setCompanyName(comp[params.id - 1].publisherName);
    }
  }, [params.id, stats, comp]);

  const handelClick = () => {
    history.push("/");
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
