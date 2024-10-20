import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import CreateEmployeeScreen from "./screens/CreateEmployeeScreen/CreateEmployeeScreen";
import ListEmployeeScreen from "./screens/ListEmployeeScreen/ListEmployeeScreen";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreateEmployeeScreen />} />
        <Route path="/list-employee" element={<ListEmployeeScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
