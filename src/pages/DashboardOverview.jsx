import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faPlus, faUsers, faSquareParking, faRectangleList } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Button, Dropdown } from '@themesberg/react-bootstrap';

import { CounterWidget, BigWidget } from "../components/Widgets";


const DashboardOverview = () => {
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <Dropdown className="btn-toolbar">
          
          <Dropdown.Toggle as={Button} variant="primary" size="sm" className="me-2">
            <FontAwesomeIcon icon={faPlus} className="me-2" />New Task
          </Dropdown.Toggle>
          
          <Dropdown.Menu className="dashboard-dropdown dropdown-menu-left mt-2">
            
            <Dropdown.Item className="fw-bold">
              <FontAwesomeIcon icon={faSquareParking} className="me-2" /> Park Buses
            </Dropdown.Item>
            
            <Dropdown.Item className="fw-bold">
              <FontAwesomeIcon icon={faRectangleList} className="me-2" /> Assign Buses
            </Dropdown.Item>
            
            <Dropdown.Item className="fw-bold">
              <FontAwesomeIcon icon={faUsers} className="me-2" /> Manage Drivers
            </Dropdown.Item>
          
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <Row className="justify-content-md-center">
        
        <Col xs={12} sm={6} xl={4} className="mb-4">
          <CounterWidget
            category="Drivers"
            title="231"
            percentage={18.2}
            icon={faChartLine}
            iconColor="shape-secondary"
          />
        </Col>

        <Col xs={12} sm={6} xl={4} className="mb-4">
          <CounterWidget
            category="Buses"
            title="155"
            percentage={18.2}
            icon={faChartLine}
            iconColor="shape-secondary"
          />
        </Col>

        <Col xs={12} sm={12} xl={4} className="mb-4">
          <CounterWidget
            category="Completed Shifts"
            title="102"
            percentage={18.2}
            icon={faChartLine}
            iconColor="shape-secondary"
          />
        </Col>

      </Row>

      <Row className="justify-content-md-center">
        <Col xs={12} xl={12}>
          <BigWidget/>
        </Col>
      </Row>
    </>
  );
};

export default DashboardOverview;
