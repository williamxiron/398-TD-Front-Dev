import React, { useState } from "react";
import SimpleBar from 'simplebar-react';
import { useLocation } from "react-router-dom";
import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faUsers, faSquareParking, faBusSimple, faTimes, faRectangleList } from "@fortawesome/free-solid-svg-icons";
import { Nav, Badge, Image, Button, Navbar } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';

import { RoutesURI } from "../routes";
import TransDevLogo from "../assets/img/brand/light.svg";
import TransDevLogoSmall from "../assets/img/brand/light-small.svg";


export default function Sidebar() {
  const location = useLocation();
  const { pathname } = location;
  const [show, setShow] = useState(false);
  const showClass = show ? "show" : "";

  const onCollapse = () => setShow(!show);
  
  const NavItem = (props) => {
    const { title, link, external, target, icon, image, badgeText, badgeBg = "secondary", badgeColor = "primary" } = props;
    const classNames = badgeText ? "d-flex justify-content-start align-items-center justify-content-between" : "";
    const navItemClassName = link === pathname ? "active" : "";
    const linkProps = external ? { href: link } : { as: Link, to: link };

    return (
      <Nav.Item className={navItemClassName} onClick={() => setShow(false)}>
        <Nav.Link {...linkProps} target={target} className={classNames}>
          <span>
            {icon ? <span className="sidebar-icon"><FontAwesomeIcon icon={icon} /> </span> : null}
            {image ? <Image src={image} width={20} height={20} className="sidebar-icon svg-icon" /> : null}

            <span className="sidebar-text">{title}</span>
          </span>
          {badgeText ? (
            <Badge pill bg={badgeBg} text={badgeColor} className="badge-md notification-count ms-2">{badgeText}</Badge>
          ) : null}
        </Nav.Link>
      </Nav.Item>
    );
  };

  return (
    <>
      <Navbar expand={false} collapseOnSelect variant="dark" className="navbar-theme-primary px-4 d-md-none">
        <Navbar.Brand className="me-lg-5" as={Link} to={RoutesURI.DashboardOverview.path}>
          <Image src={TransDevLogoSmall} className="navbar-brand-light" />
        </Navbar.Brand>
        <Navbar.Toggle as={Button} aria-controls="main-navbar" onClick={onCollapse}>
          <span className="navbar-toggler-icon" />
        </Navbar.Toggle>
      </Navbar>
      <CSSTransition timeout={300} in={show} classNames="sidebar-transition">
        <SimpleBar className={`collapse ${showClass} sidebar d-md-block bg-primary text-white`}>
          <div className="sidebar-inner px-4 pt-3">
            <div className="user-card d-flex d-md-none align-items-center justify-content-between justify-content-md-center pb-4">
              <div className="d-flex align-items-center">
              </div>
              <Nav.Link className="collapse-close d-md-none" onClick={onCollapse}>
                <FontAwesomeIcon icon={faTimes} />
              </Nav.Link>
            </div>

            <Nav className="flex-column pt-3 pt-md-0 ">
              <Nav.Item className="mx-4 d-none d-md-inline-block mb-3">
                <Image src={TransDevLogo} className="mb-3" />
                <br></br>
                <span className="sidebar-text">Yard Management Tool</span>
              </Nav.Item>
              <NavItem title="Overview" icon={faChartLine} link={RoutesURI.DashboardOverview.path}/>
              <NavItem title="Users" icon={faUsers} link={RoutesURI.Users.path}/>
              <NavItem title="Bays" icon={faSquareParking} link={RoutesURI.Bays.path}/>
              <NavItem title="Buses" icon={faBusSimple} link={RoutesURI.Buses.path}/>
              <NavItem title="Shifts" icon={faRectangleList} link={RoutesURI.Shifts.path}/>
            </Nav>
          </div>
        </SimpleBar>
      </CSSTransition>
    </>
  );
};
