import React, { useState } from 'react';
import "./Form.css";

const CreditCard = () => {
  const [Id, setId] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [ExpireyDate, setExpireyDate] = useState('');
  //const [cardName, setCardName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform submit action
    const formData = {
      Id,
      cardNumber,
      ExpireyDate,
      
    };

    fetch('https://mortgageautomationgroupa.azurewebsites.net/card', {
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
      <h1>Credit Card Form</h1>
      <form onSubmit={handleSubmit}>
        <label>ID Number:</label>
        <input
          type="number"
          value={Id}
          onChange={(e) => setId(e.target.value)}
          required
        />

        <label>Credit Card Number:</label>
        <input
          type="text"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          required
        />

        <label>Expiry Date:</label>
        <input
          type="text"
          value={ExpireyDate}
          onChange={(e) => setExpireyDate(e.target.value)}
          required
        />

        

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreditCard;
