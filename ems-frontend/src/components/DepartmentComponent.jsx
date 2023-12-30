import React, { useEffect, useState } from "react";
import {
  createDepartment,
  getDeoartmentById,
  updateDepartment,
} from "../services/DepartmentService";
import { useNavigate, useParams } from "react-router-dom";

const DepartmentComponent = () => {
  const [departmentName, setDepartmentName] = useState("");
  const [departmentDescription, setdepartmentDescription] = useState("");

  const { id } = useParams(); // by using useParam hook we are splitting one comonents on two different url

  const navigator = useNavigate();
  useEffect(() => {
    getDeoartmentById(id)
      .then((response) => {
        // dout response
        setDepartmentName(response.data.departmentName);
        setdepartmentDescription(response.data.departmentDescription);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  function saveOrUpdateDepartment(e) {
    e.preventDefault();

    const department = { departmentName, departmentDescription };
    console.log(department);

    if (id) {
      updateDepartment(id, department)
        .then((response) => {
          //dout i am passing departmentId in axis updateDepartment method here exccept id only why

          console.log(response.data);
          navigator("/departments");
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      createDepartment(department)
        .then((response) => {
          // doubt response
          console.log(response.data);
          navigator("/departments");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }

  function pageTitle() {
    if (id) {
      return <h2 className="text-center">Update Department</h2>; // what happning here
    } else {
      return <h2 className="text-center">Add Department</h2>;
    }
  }

  return (
    <div className="container">
      <br />
      <br />
      <div className="card col-md-6 offset-md-3 offset-md-3">
        {pageTitle()}

        <div className="card-body">
          <form>
            <div className="from-group mb-2">
              <label className="form-label"> Department Name:</label>
              <input
                type="text"
                name="departmentName"
                placeholder="Enter Department Name"
                value={departmentName}
                onChange={(e) => setDepartmentName(e.target.value)}
                className="form-control"
              ></input>
            </div>

            <div className="from-group mb-2">
              <label className="form-label"> Department Description:</label>
              <input
                type="text"
                name="departmentDescription"
                placeholder="Enter Department Description"
                value={departmentDescription}
                onChange={(e) => setdepartmentDescription(e.target.value)}
                className="form-control"
              ></input>
            </div>
            <button
              className="btn btn-success mb-2"
              onClick={(e) => saveOrUpdateDepartment(e)}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DepartmentComponent;
