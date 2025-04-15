import React, { useState } from "react";

function Employee() {
  const [employees, setEmployees] = useState([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    salary: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editEmployeeId, setEditEmployeeId] = useState(null); 
  const [sortOrder, setSortOrder] = useState("ascending");
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
if (isEditing) {
      const updatedEmployees = employees.map((emp) =>
        emp.id === editEmployeeId ? { ...emp, ...formData } : emp
      );
      setEmployees(updatedEmployees);
      setIsEditing(false);
      setEditEmployeeId(null);
    } else {
 
      const newEmployee = { id: employees.length + 1, ...formData };
      setEmployees([...employees, newEmployee]);
    }
    setFormData({ firstName: "", lastName: "", age: "", salary: "" });
    setSearchResults([]); 
  };

  const handleSortChange = () => {
    const sortedEmployees = [...employees];
    if (sortOrder === "ascending") {
      sortedEmployees.sort((a, b) => a.salary - b.salary);
      setSortOrder("descending");
    } else {
      sortedEmployees.sort((a, b) => b.salary - a.salary);
      setSortOrder("ascending");
    }
    setEmployees(sortedEmployees);
  };


  const handleSearch = () => {
    const term = searchInput.toLowerCase();
    const results = [];

    for (let i = 0; i < employees.length; i++) {
      const emp = employees[i];
      if (
        emp.firstName.toLowerCase().includes(term) ||
        emp.lastName.toLowerCase().includes(term) ||
        emp.salary.toString().includes(term)
      ) {
        results.push(emp);
      }
    }

    setSearchResults(results);
  };

  const handleDelete = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
  };

  const handleEdit = (id) => {
    const employeeToEdit = employees.find((emp) => emp.id === id);
    setFormData({
      firstName: employeeToEdit.firstName,
      lastName: employeeToEdit.lastName,
      age: employeeToEdit.age,
      salary: employeeToEdit.salary,
    });
    setIsEditing(true);
    setEditEmployeeId(id);
  };

  const styles = {
    container: {
      padding: "20px",
      fontFamily: "Arial, sans-serif",
    },
    input: {
      margin: "5px",
      padding: "8px",
      borderRadius: "4px",
      border: "1px solid #ccc",
    },
    button: {
      margin: "5px",
      padding: "8px 12px",
      borderRadius: "4px",
      border: "none",
      cursor: "pointer",
    },
    addBtn: {
      backgroundColor: "#007bff",
      color: "white",
    },
    sortBtn: {
      backgroundColor: "#28a745",
      color: "white",
    },
    searchBtn: {
      backgroundColor: "#17a2b8",
      color: "white",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      marginTop: "10px",
    },
    th: {
      backgroundColor: "#007bff",
      color: "white",
      padding: "8px",
    },
    td: {
      textAlign: "center",
      padding: "6px",
    },
    actionBtn: {
      margin: "5px",
      padding: "8px 12px",
      borderRadius: "4px",
      border: "none",
      cursor: "pointer",
    },
    deleteBtn: {
      backgroundColor: "#dc3545",
      color: "white",
    },
    editBtn: {
      backgroundColor: "#ffc107",
      color: "black",
    },
  };

  const displayedEmployees = searchInput ? searchResults : employees;

  return (
    <div style={styles.container}>
      <h2>Employee Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="number"
          name="salary"
          placeholder="Salary"
          value={formData.salary}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <button type="submit" style={{ ...styles.button, ...styles.addBtn }}>
          {isEditing ? "Update Employee" : "Add Employee"}
        </button>
      </form>

      <h2>Employee List</h2>

      <input
        type="text"
        placeholder="Search name/salary"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        style={styles.input}
      />
      <button onClick={handleSearch} style={{ ...styles.button, ...styles.searchBtn }}>
        Search
      </button>

      <button onClick={handleSortChange} style={{ ...styles.button, ...styles.sortBtn }}>
        Sort Salary ({sortOrder === "ascending" ? "Ascending" : "Descending"})
      </button>

      <table border="1" style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>ID</th>
            <th style={styles.th}>First Name</th>
            <th style={styles.th}>Last Name</th>
            <th style={styles.th}>Age</th>
            <th style={styles.th}>Salary</th>
            <th style={styles.th}>EPF</th>
            <th style={styles.th}>Net Salary</th>
            <th style={styles.th}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {displayedEmployees.map((emp) => (
            <tr
              key={emp.id}
              style={{
                backgroundColor:
                  emp.salary >= 50000
                    ? "pink"
                    : emp.id % 2 === 0
                    ? "#f9f9f9"
                    : "#e9e9e9",
              }}
            >
              <td style={styles.td}>{emp.id}</td>
              <td style={styles.td}>{emp.firstName}</td>
              <td style={styles.td}>{emp.lastName}</td>
              <td style={styles.td}>{emp.age}</td>
              <td style={styles.td}>{emp.salary}</td>
              <td style={styles.td}>{(emp.salary / 100) * 10}</td>
              <td style={styles.td}>{emp.salary - (emp.salary / 100) * 10}</td>
              <td style={styles.td}>
                <button
                  onClick={() => handleEdit(emp.id)}
                  style={{ ...styles.actionBtn, ...styles.editBtn }}
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(emp.id)}
                  style={{ ...styles.actionBtn, ...styles.deleteBtn }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Employee;
