import React, { useState } from 'react';
import './Form.css';

const Identity = () => {
  const [id, setId] = useState('');
  const [identityType, setIdentityType] = useState('');
  const [identityNumber, setIdentityNumber] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationError = validateIdentityNumber();
    if (validationError) {
      setError(validationError);
      return;
    }

    const formData = {
      id,
      identityType,
      identityNumber,
    };

    fetch('https://mortgageautomationgroupa.azurewebsites.net/Identity', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data as desired
        console.log(data);
      })
      .catch((error) => {
        // Handle any error that occurs during the request
        console.error('Error:', error);
      });
  };

  const validateIdentityNumber = () => {
    if (identityType === 'Aadhaar' && identityNumber.length !== 12) {
      return 'Identity Number must be a 12-digit number for Aadhaar.';
    }
    if (identityType === 'Pancard' && identityNumber.length !== 10) {
      return 'Identity Number must be a 10-character string for Pancard.';
    }
    if (identityType === 'Drivinglicence' && identityNumber.length !== 10) {
      return 'Identity Number must be a 10-character string for Driving Licence.';
    }
    return '';
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Id</label>
        <input
          type="number"
          value={id}
          onChange={(e) => {
            setId(e.target.value);
            setError('');
          }}
          required
        />
        <label>Identity Type</label>
        <select
          value={identityType}
          onChange={(e) => {
            setIdentityType(e.target.value);
            setError('');
          }}
          required
        >
          <option value="">Select an option</option>
          <option value="Aadhaar">Aadhaar</option>
          <option value="Pancard">Pancard</option>
          <option value="Drivinglicence">Driving Licence</option>
        </select>
        <label>Identity Number</label>
        <input
          type="text"
          value={identityNumber}
          onChange={(e) => {
            setIdentityNumber(e.target.value);
            setError('');
          }}
          required
        />
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Identity;
