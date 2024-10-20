import { configureStore } from "@reduxjs/toolkit";
import employeesReducer from "./EmployeeSlice";

export const Store = configureStore({
  reducer: {
    employees: employeesReducer,
  },
});
