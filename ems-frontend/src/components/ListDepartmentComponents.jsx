import React, { useEffect, useState } from "react";
import {
  deleteDepartment,
  getAllDepartments,
} from "../services/DepartmentService";
import { Link, useNavigate } from "react-router-dom";

const ListDepartmentComponents = () => {
  const [department, setDepartment] = useState([]);

  const navigator = useNavigate();

  useEffect(() => {
    listOfDepartments();
  }, []);
  function listOfDepartments() {
    getAllDepartments()
      .then((response) => {
        console.log(response.data);
        setDepartment(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function updateDepartment(id) {
    navigator(`/edit-department/${id}`);
  }

  function removeDepartment(id) {
    deleteDepartment(id)
      .then((response) => {
        console.log(response.data);
        listOfDepartments();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="container">
      <h2 className="text-center"> List Of Department</h2>
      <Link to="/add-department" className="btn btn-primary">
        Add Department
      </Link>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th> Department Id</th>
            <th> Department Name</th>
            <th> Department Description</th>

            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {department.map((department) => (
            <tr ket={department.id}>
              <td>{department.id}</td>
              <td>{department.departmentName}</td>
              <td>{department.departmentDescription}</td>
              <td>
                <button
                  onClick={() => updateDepartment(department.id)} //why passing id
                  className="btn btn-info"
                >
                  {" "}
                  Update
                </button>{" "}
                <button
                  onClick={() => removeDepartment(department.id)} //why passing id
                  className="btn btn-danger"
                  style={{ marginLeft: "10px" }}
                >
                  {" "}
                  Delete
                </button>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListDepartmentComponents;
