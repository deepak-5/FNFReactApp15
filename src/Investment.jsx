import React, { useState } from 'react';
import "./Form.css";

const Investment = () => {
  const [id, setId] = useState('');
  const [investmentType, setInvestmentType] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform submit action
    const formData = {
      id,
      investmentType,
      amount,
    };

    fetch('https://mortgageautomationgroupa.azurewebsites.net/investment', {
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
      <h1>Investment</h1>
      <form onSubmit={handleSubmit}>
        <label>ID:</label>
        <input
          type="number"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />

        <label>Investment Type:</label>
        <input
          type="text"
          value={investmentType}
          onChange={(e) => setInvestmentType(e.target.value)}
          required
        />

        <label>Amount:</label>
        <input
          type="number"
          step="0.01"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Investment;
