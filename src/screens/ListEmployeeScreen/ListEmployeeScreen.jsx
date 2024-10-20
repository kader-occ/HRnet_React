import { useSelector } from "react-redux";
import { Table, Card } from "react-bootstrap";

const ListEmployeeScreen = () => {
  const employees = useSelector((state) => state.employees.employees);

  return (
    <>
      <Card>
        <Card.Title className="text-center p-3 bg-dark text-white">
          Employee List
        </Card.Title>
        <Card.Body>
          {employees.length > 0 ? (
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Date of Birth</th>
                  <th>Start Date</th>
                  <th>Department</th>
                  <th>Street</th>
                  <th>City</th>
                  <th>State</th>
                  <th>Zip Code</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee, index) => (
                  <tr key={index}>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.dateOfBirth}</td>
                    <td>{employee.startDate}</td>
                    <td>{employee.department}</td>
                    <td>{employee.street}</td>
                    <td>{employee.city}</td>
                    <td>{employee.state}</td>
                    <td>{employee.zipCode}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <p className="text-center">No employees found.</p>
          )}
        </Card.Body>
      </Card>
    </>
  );
};

export default ListEmployeeScreen;
