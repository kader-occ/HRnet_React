import React, { useState } from "react";
import { Form, Button, Card, Row, Col } from "react-bootstrap";
import states from "../../data/states";
import { addEmployee } from "../../redux/EmployeeSlice";
import { useDispatch } from "react-redux";
import { Modal } from "@studiokad/react-modal-component";

const CreateEmployeeScreen = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [startDate, setStartDate] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [department, setDepartment] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => setIsModalOpen(false);

  const dispatch = useDispatch();

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setDateOfBirth("");
    setStartDate("");
    setStreet("");
    setCity("");
    setState("");
    setZipCode("");
    setDepartment("");
  };

  const saveEmployee = (e) => {
    e.preventDefault();
    const employee = {
      firstName,
      lastName,
      dateOfBirth: dateOfBirth,
      startDate: startDate,
      department,
      street,
      city,
      state,
      zipCode,
    };

    dispatch(addEmployee(employee));
    setIsModalOpen(true);
    resetForm();
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

  return (
    <>
      <Card>
        <Card.Title className="text-center p-3 bg-dark text-white">
          Create Employee
        </Card.Title>
        <Card.Body>
          <Form onSubmit={saveEmployee}>
            <Row>
              <Col>
                <Form.Group controlId="firstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={firstName}
                    onChange={(e) =>
                      setFirstName(capitalizeFirstLetter(e.target.value))
                    }
                    placeholder="Enter first name"
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="lastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={lastName}
                    onChange={(e) =>
                      setLastName(capitalizeFirstLetter(e.target.value))
                    }
                    placeholder="Enter last name"
                    required
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
                    required
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
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Card className="mt-3 bg-light">
              <Card.Body>
                <Card.Title>Address</Card.Title>
                <Form.Group controlId="street">
                  <Form.Label>Street</Form.Label>
                  <Form.Control
                    type="text"
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                    placeholder="Enter street"
                    required
                  />
                </Form.Group>

                <Row className="mt-3">
                  <Col>
                    <Form.Group controlId="city">
                      <Form.Label>City</Form.Label>
                      <Form.Control
                        type="text"
                        value={city}
                        onChange={(e) =>
                          setCity(capitalizeFirstLetter(e.target.value))
                        }
                        placeholder="Enter city"
                        required
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
                        multiple={false}
                        required
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
                    required
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
                multiple={false}
                required
              >
                <option>Sales</option>
                <option>Marketing</option>
                <option>Engineering</option>
                <option>Human Resources</option>
                <option>Legal</option>
              </Form.Control>
            </Form.Group>

            <div className="text-center">
              <Button className="mt-3" variant="primary" type="submit">
                Save Employee
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        type="success"
        title="Employee Added"
        children="Employee has been added successfully!"
      />
    </>
  );
};

export default CreateEmployeeScreen;
