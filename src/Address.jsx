import React, { useState } from 'react';
import "./Form.css";

const Address = () => {
  const [id, setId] = useState('');
  const [currentAddress, setCurrentAddress] = useState('');
  const [permanentAddress, setPermanentAddress] = useState('');
  const [documentType, setDocumentType] = useState('');
  const [documentNumber, setDocumentNumber] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform submit action
    const formData = {
      id,
      currentAddress,
      permanentAddress,
      documentType,
      documentNumber,
    };

    fetch('https://mortgageautomationgroupa.azurewebsites.net/address', {
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
      <h1>Address Form</h1>
      <form onSubmit={handleSubmit}>
        <label>ID:</label>
        <input
          type="number"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />

        <label>Current Address:</label>
        <input
          type="text"
          value={currentAddress}
          onChange={(e) => setCurrentAddress(e.target.value)}
          required
        />

        <label>Permanent Address:</label>
        <input
          type="text"
          value={permanentAddress}
          onChange={(e) => setPermanentAddress(e.target.value)}
          required
        />

        <label>Document Type:</label>
        <input
          type="text"
          value={documentType}
          onChange={(e) => setDocumentType(e.target.value)}
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

export default Address;
