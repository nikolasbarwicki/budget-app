import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import { ModalProvider } from 'context/modalContext';
import ToggleModal from 'components/ToggleModal';

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">EXPENSER</Navbar.Brand>
        <Nav className="mr-auto">
          <LinkContainer to="/">
            <Nav.Link>Dashboard</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/budget">
            <Nav.Link>Budget planner</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/transactions">
            <Nav.Link>Transactions</Nav.Link>
          </LinkContainer>
        </Nav>
        <Nav>
          <ModalProvider>
            <ToggleModal />
          </ModalProvider>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
