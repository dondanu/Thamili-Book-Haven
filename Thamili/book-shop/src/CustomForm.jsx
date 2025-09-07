import React from "react";

function CustomForm({
  handleSubmit,
  handleChange,
  formData,
  formConfig,
  addButtonName,
}) {
  return (
    <div>
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        {formConfig.map((item, index) => {
          return (
            <input
              key={index}
              type={item.type}
              name={item.name}
              placeholder={item.placeholder}
              value={formData[item.name]}
              onChange={handleChange}
              required
              style={{
                margin: "5px",
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          );
        })}

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
          {addButtonName}
        </button>
      </form>
    </div>
  );
}

export default CustomForm;