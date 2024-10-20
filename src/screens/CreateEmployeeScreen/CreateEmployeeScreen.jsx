import { Card } from "react-bootstrap";

const CreateEmployeeScreen = () => {
  return (
    <div className="container">
      <Card>
        <Card.Body>HRnet</Card.Body>
      </Card>
      <a href="/list-employee">View Current Employees</a>
    </div>
  );
};

export default CreateEmployeeScreen;
