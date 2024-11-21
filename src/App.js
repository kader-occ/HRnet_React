import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import CreateEmployeeScreen from "./screens/CreateEmployeeScreen/CreateEmployeeScreen";
import ListEmployeeScreen from "./screens/ListEmployeeScreen/ListEmployeeScreen";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand as={Link} to="/">
              HRnet
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">
                  Create Employee
                </Nav.Link>
                <Nav.Link as={Link} to="/list-employee">
                  Employee List
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container className="mt-5">
          <Routes>
            <Route path="/" element={<CreateEmployeeScreen />} />
            <Route path="/list-employee" element={<ListEmployeeScreen />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
};

export default App;
