import React from 'react';
import BootstrapNavbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

const Navbar = (): JSX.Element => (
  <BootstrapNavbar variant="dark" fixed="top">
    <Container>
      <BootstrapNavbar.Brand>Anna Davies</BootstrapNavbar.Brand>
      <Nav>
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/#about">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/#resume">Resume</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/#projects">Projects</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/#contact">Contact</Nav.Link>
        </Nav.Item>
      </Nav>
    </Container>
  </BootstrapNavbar>
);

export default Navbar;
