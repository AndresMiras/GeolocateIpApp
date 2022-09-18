import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import styles from './navbarreactbootstrap.module.scss'

export const NavbarReactBootstrap = () => {

  const navigate = useNavigate(); 

  return (
    <>
      <Navbar bg="dark" variant="dark" className={styles.container_bar}>
        <Container>
          <Navbar.Brand as={ Link } to="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={ Link } to="/locatedevice">Locate Device</Nav.Link>
            <Nav.Link as={ Link } to="/devices">Devices</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}
