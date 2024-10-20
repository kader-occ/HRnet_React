import React, { useState } from "react";
import { Form, Button, Card, Modal, Row, Col } from "react-bootstrap";
import states from "../../data/states";

const CreateEmployeeScreen = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [startDate, setStartDate] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState(states);
  const [zipCode, setZipCode] = useState("");
  const [department, setDepartment] = useState("Sales");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  return (
    <>
      <Card>
        <Card.Title className="text-center p-3 bg-dark text-white">
          Create Employee
        </Card.Title>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col>
                <Form.Group controlId="firstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Enter first name"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="lastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Enter last name"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mt-3">
              <Col>
                <Form.Group controlId="dateOfBirth">
                  <Form.Label>Date of Birth</Form.Label>
                  <Form.Control
                    type="date"
                    value={dateOfBirth}
                    onChange={(e) => setDateOfBirth(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="startDate">
                  <Form.Label>Start Date</Form.Label>
                  <Form.Control
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Card className="mt-3">
              <Card.Body>
                <Card.Title>Address</Card.Title>
                <Form.Group controlId="street">
                  <Form.Label>Street</Form.Label>
                  <Form.Control
                    type="text"
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                    placeholder="Enter street"
                  />
                </Form.Group>

                <Row className="mt-3">
                  <Col>
                    <Form.Group controlId="city">
                      <Form.Label>City</Form.Label>
                      <Form.Control
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="Enter city"
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="state">
                      <Form.Label>State</Form.Label>
                      <Form.Control
                        as="select"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                      >
                        {states.map((state) => (
                          <option key={state.name} value={state.name}>
                            {state.name}
                          </option>
                        ))}
                      </Form.Control>
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mt-3" controlId="zipCode">
                  <Form.Label>Zip Code</Form.Label>
                  <Form.Control
                    type="text"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                    placeholder="Enter zip code"
                  />
                </Form.Group>
              </Card.Body>
            </Card>

            <Form.Group className="mt-3" controlId="department">
              <Form.Label>Department</Form.Label>
              <Form.Control
                as="select"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              >
                <option>Sales</option>
                <option>Marketing</option>
                <option>Engineering</option>
                <option>Human Resources</option>
                <option>Legal</option>
              </Form.Control>
            </Form.Group>

            <Button className="mt-3" variant="primary" type="submit" block>
              Save
            </Button>
          </Form>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header
          closeButton
          style={{ backgroundColor: "#343a40", color: "white" }}
        >
          <Modal.Title className="text-center w-100">Success!</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center" style={{ fontSize: "1.2rem" }}>
          Employee Created Successfully!
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <Button variant="success" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CreateEmployeeScreen;
