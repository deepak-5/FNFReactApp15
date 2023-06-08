import React, { useState } from 'react';
import "./Form.css";

const Income = () => {
  const [id, setId] = useState('');
  const [primaryIncomeType, setPrimaryIncomeType] = useState('');
  const [primaryIncome, setPrimaryIncome] = useState('');
  const [secondaryIncomeType, setSecondaryIncomeType] = useState('');
  const [secondaryIncome, setSecondaryIncome] = useState('');
  const [documentNumber, setDocumentNumber] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform submit action
    const formData = {
      id,
      primaryIncomeType,
      primaryIncome,
      secondaryIncomeType,
      secondaryIncome,
      documentNumber,
    };

    fetch('https://mortgageautomationgroupa.azurewebsites.net/Income', {
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
      <h1>Income Form</h1>
      <form onSubmit={handleSubmit}>
        <label>ID:</label>
        <input
          type="number"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />

        <label>Primary Income Type:</label>
        <input
          type="text"
          value={primaryIncomeType}
          onChange={(e) => setPrimaryIncomeType(e.target.value)}
          required
        />

        <label>Primary Income:</label>
        <input
          type="number"
          step="0.01"
          value={primaryIncome}
          onChange={(e) => setPrimaryIncome(e.target.value)}
          required
        />

        <label>Secondary Income Type:</label>
        <input
          type="text"
          value={secondaryIncomeType}
          onChange={(e) => setSecondaryIncomeType(e.target.value)}
          required
        />

        <label>Secondary Income:</label>
        <input
          type="number"
          step="0.01"
          value={secondaryIncome}
          onChange={(e) => setSecondaryIncome(e.target.value)}
          required
        />

        <label>Document Number:</label>
        <input
          type="text"
          value={documentNumber}
          onChange={(e) => setDocumentNumber(e.target.value)}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Income;