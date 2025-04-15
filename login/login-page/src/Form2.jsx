import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    gender: '',
    nic: '',
    address: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    setSubmittedData(formData); 
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        height: '1500px',
        background: 'linear-gradient(to right, rgb(122, 255, 95), #feb47b)',
        textAlign: 'center',
        paddingRight: "300px",
        margin: "25px",
        borderRadius: "20px",
        marginTop: "120px",
        border: '4px solid rgb(124, 95, 255)',
      }}
    >
      <div
        style={{
          width: '490px',
          marginTop: "0px",
          height: '1300px',
          background: 'linear-gradient(to right, rgb(122, 255, 95),rgb(123, 254, 232))',
          paddingTop: "10px",
          borderRadius: '20px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          border: '4px solid rgb(38, 8, 207)',
          padding: '50px',
          paddingRight: "50px",
          paddingLeft: "50px",
          marginLeft: '400px',
          alignItems: "center",
        }}
      >
        <h2 style={{ color: 'green', fontSize: "30px" }}>Thamili - BookShop</h2>
        <form onSubmit={handleSubmit}>
          {['fullName', 'age', 'gender', 'NIC', 'address', 'email', 'password', 'confirmPassword'].map((field, index) => (
            <div key={index}>
              <label style={{ fontWeight: 'bold', color: '#333' }}>
                {field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}
              </label>
              <input
                type={field.includes('password') ? 'password' : field === 'email' ? 'email' : 'text'}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '12px',
                  margin: '10px 0',
                  border: '2px solid #ff7e5f',
                  borderRadius: '5px',
                  fontSize: '14px',
                  outline: 'none',
                  transition: 'all 0.3s ease',
                }}
                placeholder={`Enter your ${field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}`}
              />
            </div>
          ))}

          <button
            type="submit"
            style={{
              padding: '12px',
              width: '100%',
              backgroundColor: '#ff7e5f',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              fontSize: '20px',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
            }}
          >
            Submit
          </button>
        </form>

        {submittedData && (
          <div style={{ marginTop: '20px', background: '#f7f7f7', padding: '20px', borderRadius: '8px' }}>
            <h3>Submitted Data:</h3>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Field</th>
                  <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Value</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(submittedData).map(([key, value]) => (
                  <tr key={key}>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                      {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                    </td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Form;
