import React, { useState } from 'react';
import "./Form.css";

const Loan = () => {
  const [id, setId] = useState('');
  const [loanType, setLoanType] = useState('');
  const [loanAmount, setLoanAmount] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform submit action
    const formData = {
      id,
      loanType,
      loanAmount,
    };

    fetch('https://mortgageautomationgroupa.azurewebsites.net/loan', {
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
      <h1>Loan Page</h1>
      <form onSubmit={handleSubmit}>
        <label>ID:</label>
        <input
          type="number"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />

        <label>Loan Type:</label>
        <input
          type="text"
          value={loanType}
          onChange={(e) => setLoanType(e.target.value)}
          required
        />

        <label>Loan Amount:</label>
        <input
          type="number"
          step="0.01"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Loan;
