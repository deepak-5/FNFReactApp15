import React, { useState } from 'react';

const Assets = () => {
  const [id, setId] = useState('');
  const [assetType, setAssetType] = useState('');
  const [assetValue, setAssetValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform submit action
    const formData = {
      id,
      assetType,
      assetValue,
    };

    fetch('https://mortgageautomationgroupa.azurewebsites.net/asset', {
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
      <h1>Asset Form</h1>
      <form onSubmit={handleSubmit}>
        <label>ID:</label>
        <input
          type="number"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />

        <label>Asset Type:</label>
        <input
          type="text"
          value={assetType}
          onChange={(e) => setAssetType(e.target.value)}
          required
        />

        <label>Asset Value:</label>
        <input
          type="number"
          step="0.01"
          value={assetValue}
          onChange={(e) => setAssetValue(e.target.value)}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Assets;
