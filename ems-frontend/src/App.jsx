import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";

import ListEmployeeComponents from "./components/ListEmployeeComponents";
import EmployeeComponent from "./components/EmployeeComponent";
import ListDepartmentComponents from "./components/ListDepartmentComponents";
import DepartmentComponent from "./components/DepartmentComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent></HeaderComponent>
        <Routes>
          <Route path="/" element={<ListEmployeeComponents />}></Route>
          <Route path="/employees" element={<ListEmployeeComponents />}></Route>
          <Route path="/add-employee" element={<EmployeeComponent />}></Route>

          <Route
            path="/edit-employee/:id"
            element={<EmployeeComponent />}
          ></Route>
          <Route
            path="/departments"
            element={<ListDepartmentComponents />}
          ></Route>
          <Route
            path="/add-department"
            element={<DepartmentComponent />}
          ></Route>
          <Route
            path="/edit-department/:id"
            element={<DepartmentComponent />}
          ></Route>
        </Routes>

        <FooterComponent></FooterComponent>
      </BrowserRouter>
    </>
  );
}

export default App;
