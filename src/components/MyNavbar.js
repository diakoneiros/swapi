import React from 'react';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import brand from '../containers/brand.png';
import Form from 'react-bootstrap/lib/Form';
import FormControl from 'react-bootstrap/lib/FormControl';
import './MyNavbar.css';

const MyNavbar = ({ options, onButtonClick, onSearchChange, activeTab }) => {
  return (
    <div className="MyNavbar">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">
          <img
            alt="Vader,baby"
            src={brand}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form inline>
            <FormControl
              type="text"
              onChange={onSearchChange}
              className="mr-auto" />
          </Form>
          <Nav className="ml-auto justify-content-end">
            {
              options.map((option, index) =>
                <Nav.Link
                  key={index}
                  onClick={onButtonClick}>{option}
                </Nav.Link>
              )
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )

}

export default MyNavbar;
