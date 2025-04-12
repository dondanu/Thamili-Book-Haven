import React from "react";

const Table = ({ employees, onDeleteData, onEditData }) => {
  return (
    <div>
      <table border="1" style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr style={{ backgroundColor: "#007bff", color: "white" }}>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Salary</th>
            <th>EPF</th>
            <th>Net Salary</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr
              key={emp.id}
              style={{
                textAlign: "center",
                backgroundColor:
                  emp.salary >= 50000
                    ? "#ffcccc"
                    : emp.id % 2 === 0
                    ? "#f9f9f9"
                    : "#e9e9e9",
              }}
            >
              <td>{emp.id}</td>
              <td>{emp.firstName}</td>
              <td>{emp.lastName}</td>
              <td>{emp.age}</td>
              <td>{emp.salary}</td>
              <td>{emp.epf}</td>
              <td>{emp.netSalary}</td>
              <td>
                <button
                  onClick={() => onDeleteData(emp.id)}
                  style={{ margin: "5px" }}
                >
                  Delete
                </button>
                <button
                  onClick={() => onEditData(emp)}  // Pass employee data to edit
                  style={{ margin: "5px" }}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
