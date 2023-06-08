import React, { useState } from 'react';
import "./Form.css";

const Employee = () => {
  const [id, setId] = useState('');
  const [employeerName, setEmployerName] = useState('');
  const [payslip, setPayslip] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform submit action
    const formData = {
      id,
      employeerName,
      payslip,
    };

    fetch('https://mortgageautomationgroupa.azurewebsites.net/employee', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Form submitted successfully!', data);
        // Regenerate the page or perform any necessary actions
        window.location.reload();
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
      });
  };

  return (
    <div>
      <h1>Employee Form</h1>
      <form onSubmit={handleSubmit}>
        <label>ID:</label>
        <input
          type="number"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />

        <label>Employer Name:</label>
        <input
          type="text"
          value={employeerName}
          onChange={(e) => setEmployerName(e.target.value)}
          required
        />

        <label>Payslip:</label>
        <textarea
          value={payslip}
          onChange={(e) => setPayslip(e.target.value)}
          required
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Employee;
