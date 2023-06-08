
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Image } from '@themesberg/react-bootstrap';


import map from "../assets/img/brand/yard.svg"

export const CounterWidget = (props) => {
  const { icon, iconColor, category, title, period, percentage } = props;
  const percentageIcon = percentage < 0 ? faAngleDown : faAngleUp;
  const percentageColor = percentage < 0 ? "text-danger" : "text-success";

  return (
    <Card border="light" className="shadow-sm">
      <Card.Body>
        <Row className="d-block d-xl-flex align-items-center">
          <Col xl={5} className="text-xl-center d-flex align-items-center justify-content-xl-center mb-3 mb-xl-0">
            <div className={`icon icon-shape icon-md icon-${iconColor} rounded me-4 me-sm-0`}>
              <FontAwesomeIcon icon={icon} />
            </div>
            <div className="d-sm-none">
              <h5>{category}</h5>
              <h3 className="mb-1">{title}</h3>
            </div>
          </Col>
          <Col xs={12} xl={7} className="px-xl-0">
            <div className="d-none d-sm-block">
              <h5>{category}</h5>
              <h3 className="mb-1">{title}</h3>
            </div>
            <small>{period}</small>
            <div className="small mt-2">
              <FontAwesomeIcon icon={percentageIcon} className={`${percentageColor} me-1`} />
              <span className={`${percentageColor} fw-bold`}>
                {percentage}%
              </span> Since last month
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export const BigWidget = (props) => {
  return (
    <Card border="light" className="shadow-sm">
      <Card.Body className="d-flex flex-row align-items-center flex-0 border-bottom">
        <div style={{height: 500}}>
          <p>Big Chart goes here</p>
        </div>
      </Card.Body>
    </Card>
  );
}

export const YardMap = (props) => {
  return (
    <Card border="light" className="shadow-sm">
      <Card.Body className="d-flex flex-row align-items-center flex-0 border-bottom">
        <Image src={map} className="d-flex flex-row align-items-center flex-0"/>
      </Card.Body>
    </Card>
  )
}