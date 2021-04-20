import React, { useState, useContext, useEffect } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router-dom";
import { GrFormNextLink } from "react-icons/gr";
import { AppContext } from "../App";

function Details({ appName, companyName, id }) {
  const history = useHistory();
  const [appSummation, setSummationValues] = useState({});
  const appStats = useContext(AppContext);

  useEffect(() => {
    const values = appStats.stats[id];
    if (values) {
      let addRequest = 0;
      let addResponse = 0;
      let revenue = 0;
      let impression = 0;
      for (var j = 0; j < values.length; j++) {
        addRequest += values[j].adRequest;
        addResponse += values[j].adResponse;
        revenue += values[j].revenue;
        impression += values[j].impressions;
      }
      let iStats = {
        addRequest: addRequest,
        addResponse: addResponse,
        revenue: revenue,
        impression: impression,
      };
      setSummationValues(iStats);
    }
  }, [appStats, id]);

  const handelClick = () => {
    history.push(`/app/${id}`);
  };

  return (
    <Row className="__apps-desc">
      <Col md={12}>
        <Card>
          <Card.Body>
            <Row>
              <Col xs={8}>
                <h5 className="__card-title">{appName}</h5>
                <p>{companyName}</p>
              </Col>
              <Col xs={4} style={{ textAlign: "right" }}>
                <Button onClick={handelClick} className="__btn">
                  <GrFormNextLink />
                </Button>
              </Col>
            </Row>
            <Row>
              <Col xs={3} className="__card_inner">
                <p className="__card-inner-title">Revenue</p>
                <p className="__card-inner-value">{appSummation.revenue}</p>
              </Col>
              <Col xs={3} className="__card_inner">
                <p className="__card-inner-title">Ad Request</p>
                <p className="__card-inner-value"> {appSummation.addRequest}</p>
              </Col>
              <Col xs={3} className="__card_inner">
                <p className="__card-inner-title">Ad Response</p>
                <p className="__card-inner-value">{appSummation.addResponse}</p>
              </Col>
              <Col xs={3} className="__card_inner">
                <p className="__card-inner-title">Impression</p>
                <p className="__card-inner-value"> {appSummation.impression}</p>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Details;
