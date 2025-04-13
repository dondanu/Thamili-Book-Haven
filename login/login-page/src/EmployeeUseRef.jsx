import React, { useState, useRef } from "react";

function EmployeeUseRef() {
  const [employees, setEmployees] = useState([]);
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const firstName = formRef.current.elements.firstName.value;
    const lastName = formRef.current.elements.lastName.value;
    const age = formRef.current.elements.age.value;
    const salary = formRef.current.elements.salary.value;

    const newEmployee = {
      id: employees.length + 1,
      firstName,
      lastName,
      age,
      salary,
    };

    setEmployees([...employees, newEmployee]);
    formRef.current.reset();
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ marginBottom: "10px" }}>Employee Form (useRef)</h2>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        style={{ marginBottom: "20px" }}
      >
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          required
          style={{
            margin: "5px",
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          required
          style={{
            margin: "5px",
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          required
          style={{
            margin: "5px",
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
        <input
          type="number"
          name="salary"
          placeholder="Salary"
          required
          style={{
            margin: "5px",
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
        <button
          type="submit"
          style={{
            margin: "5px",
            padding: "8px 12px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Add Employee
        </button>
      </form>

      <h2>Employee List</h2>
      <table border="1" style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr style={{ backgroundColor: "#007bff", color: "white" }}>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr
              key={emp.id}
              style={{
                textAlign: "center",
                backgroundColor: emp.id % 2 === 0 ? "#f9f9f9" : "#e9e9e9",
              }}
            >
              <td>{emp.id}</td>
              <td>{emp.firstName}</td>
              <td>{emp.lastName}</td>
              <td>{emp.age}</td>
              <td>{emp.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeUseRef;