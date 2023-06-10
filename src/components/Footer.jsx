
import React from "react";
import moment from "moment-timezone";

import { Row, Col, Card } from '@themesberg/react-bootstrap';
import { RoutesURI } from "../routes";

const Footer = (props) => {
  const currentYear = moment().get("year");

  return (
    <div>
      <footer className="footer section py-5">
        <Row>
          <Col s={12} xl={6} className="mb-4 mb-lg-0">
            <p className=" text-center text-xl-left">
              Copyright © 2019-{`${currentYear} `}
              <Card.Link href={RoutesURI.Departures.path} target="_blank" className="text-blue text-decoration-none fw-normal">
                TransDev
              </Card.Link>
            </p>
          </Col>
        </Row>
      </footer>
    </div>
  );
};

export default Footer;