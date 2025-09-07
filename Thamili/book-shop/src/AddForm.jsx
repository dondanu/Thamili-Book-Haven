import React, { useState, useEffect } from "react";
import CustomForm from "./CustomForm";

const projectFormConfig = [
  {
    type: "text",
    name: "projectName",
    placeholder: "Project Name",
    required: true,
  },
  {
    type: "text",
    name: "duration",
    placeholder: "Duration",
    required: true,
  },
];

const formConfig = [
  {
    type: "text",
    name: "firstName",
    placeholder: "First Name",
    required: true,
  },
  {
    type: "text",
    name: "lastName",
    placeholder: "Last Name",
    required: true,
  },
  {
    type: "number",
    name: "age",
    placeholder: "Age",
    required: true,
  },
  {
    type: "number",
    name: "salary",
    placeholder: "Salary",
    required: true,
  },
];

function AddForm({ onSubmit, editingEmployee }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    salary: "",
  });

  // Set form data if we are editing
  useEffect(() => {
    if (editingEmployee) {
      setFormData({
        firstName: editingEmployee.firstName,
        lastName: editingEmployee.lastName,
        age: editingEmployee.age,
        salary: editingEmployee.salary,
      });
    }
  }, [editingEmployee]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);

    setFormData({ firstName: "", lastName: "", age: "", salary: "" });
  };

  return (
    <div>
      <CustomForm
        addButtonName={editingEmployee ? "Update Employee" : "Add Employee"}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        formData={formData}
        formConfig={formConfig}
      />

      <div>
        <h3>Project List</h3>
        <CustomForm
          addButtonName="Add Project"
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          formData={formData}
          formConfig={projectFormConfig}
        />
      </div>
    </div>
  );
}

export default AddForm;
