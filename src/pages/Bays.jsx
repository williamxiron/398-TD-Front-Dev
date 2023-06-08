import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Breadcrumb } from '@themesberg/react-bootstrap';

import { BayBusesTable } from "../components/Tables";
import { EditBay } from "../components/Forms";
import { DropArea } from "../components/DropArea"

export default () => {
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-md-0">
          <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-primary breadcrumb-transparent" }}>
            <Breadcrumb.Item active><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Bays</Breadcrumb.Item>
          </Breadcrumb>
          <h4>Bay assignment</h4>
          <p className="mb-0">Assign buses to bays, highlight bus types and hide parked bays</p>
        </div>
      </div>

      <div className="table-settings mb-4">
        <Row className="justify-content-between align-items-center">
          
          <Col className="mb-3" xl={6} lg={12}>
            <DropArea/>
          </Col>

          <Col className="d-xl-none d-inline-block" xl={6}>
            <EditBay/>
          </Col>
          
          <Col className="d-none d-xl-inline-block" xl={6}>
            <BayBusesTable/>
          </Col>
        
        </Row>
      </div>
    </>
  );
};
