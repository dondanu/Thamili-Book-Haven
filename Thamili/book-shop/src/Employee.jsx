import React, { useState } from 'react';
import AddForm from './AddForm';
import Table from './Table';

function Employee() {
  const [employees, setEmployees] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [defaultResults, setDefaultResults] = useState([]);
  const [isDescending, setIsDescending] = useState(true);
  const [editingEmployee, setEditingEmployee] = useState(null); // New state for editing

  const handleSearch = (e) => {
    const { value } = e.target;
    setSearchValue(value);
    const filteredEmployees = defaultResults.filter((employee) =>
      employee.firstName.toLowerCase().includes(value.toLowerCase())
    );
    if (value === '') {
      setEmployees(defaultResults);
    } else {
      setEmployees(filteredEmployees);
    }
  };

  const onDeleteData = (id) => {
    const updatedEmployees = employees.filter((emp) => emp.id !== id);
    setEmployees(updatedEmployees);
    setDefaultResults(updatedEmployees);
  };

  const onEditData = (employee) => {
    setEditingEmployee(employee); // Set the employee to be edited
  };

  const IsExitis = (name) => {
    return employees.some((employee) => employee.firstName === name);
  };

  const handleSubmit = (formData) => {
    if (editingEmployee) {
      // Edit existing employee
      const updatedEmployees = employees.map((emp) =>
        emp.id === editingEmployee.id
          ? { ...emp, ...formData, epf: formData.salary / 10, netSalary: formData.salary - formData.salary / 10 }
          : emp
      );
      setEmployees(updatedEmployees);
      setDefaultResults(updatedEmployees);
      setEditingEmployee(null); // Clear editing state
    } else {
      // Add new employee
      if (!IsExitis(formData.firstName)) {
        const epf = formData.salary / 10;
        const netSalary = formData.salary - epf;
        const newEmployee = {
          id: employees.length + 1,
          epf: epf,
          netSalary: netSalary,
          ...formData,
        };

        const array = [...employees];
        array.push(newEmployee);

        setEmployees(array);
        setDefaultResults(array);
      } else {
        alert('Employee already exists');
      }
    }
  };

  const onSortSalary = () => {
    const sortedEmployees = [...employees].sort((a, b) =>
      isDescending ? b.salary - a.salary : a.salary - b.salary
    );
    setEmployees(sortedEmployees);
    setDefaultResults(sortedEmployees);
    setIsDescending(!isDescending);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ marginBottom: '10px' }}>Employee Form</h2>
      <AddForm onSubmit={handleSubmit} editingEmployee={editingEmployee} />
      <h2>Employee List EPF -10% </h2>
      <div>
        <input
          type="text"
          name="searchValue"
          placeholder="Search first Name"
          value={searchValue}
          onChange={handleSearch}
          required
          style={{
            margin: '5px',
            padding: '8px',
            borderRadius: '4px',
            border: '1px solid #ccc',
          }}
        />
      </div>

      <Table
        employees={employees}
        onDeleteData={onDeleteData}
        onEditData={onEditData}
        isDescending={isDescending}
        onSortSalary={onSortSalary}
      />
    </div>
  );
}

export default Employee;
