import React, { useState } from 'react';
import "./Form.css";

const PropertyDetails = () => {
  const [appId, setAppId] = useState('');
  const [propertyValue, setPropertyValue] = useState('');
  const [expectedLoan, setExpectedLoan] = useState('');
  const [propertyAddress, setPropertyAddress] = useState('');
  const [cibilScore, setCibilScore] = useState('');
  const [lawyerStatus, setLawyerStatus] = useState('');
  const [dateApplied, setDateApplied] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform submit action
    const formData = {
      appId,
      propertyValue,
      expectedLoan,
      propertyAddress,
      cibilScore,
      lawyerStatus,
      dateApplied,
    };

    fetch('https://mortgageautomationgroupa.azurewebsites.net/property', {
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
      <h1>Property Details Form</h1>
      <form onSubmit={handleSubmit}>
        <label>App ID:</label>
        <input
          type="number"
          value={appId}
          onChange={(e) => setAppId(e.target.value)}
          required
        />

        <label>Property Value:</label>
        <input
          type="number"
          step="0.01"
          value={propertyValue}
          onChange={(e) => setPropertyValue(e.target.value)}
          required
        />

        <label>Expected Loan:</label>
        <input
          type="number"
          step="0.01"
          value={expectedLoan}
          onChange={(e) => setExpectedLoan(e.target.value)}
          required
        />

        <label>Property Address:</label>
        <input
          type="text"
          value={propertyAddress}
          onChange={(e) => setPropertyAddress(e.target.value)}
          required
        />

        <label>Cibil Score:</label>
        <input
          type="number"
          value={cibilScore}
          onChange={(e) => setCibilScore(e.target.value)}
          required
        />

        <label>Lawyer Status:</label>
        <input
          type="text"
          value={lawyerStatus}
          onChange={(e) => setLawyerStatus(e.target.value)}
          required
        />

        <label>Date Applied:</label>
        <input
          type="text"
          value={dateApplied}
          onChange={(e) => setDateApplied(e.target.value)}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PropertyDetails;
