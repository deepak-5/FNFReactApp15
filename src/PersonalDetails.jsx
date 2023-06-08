import React, { useState } from 'react';
import "./Form.css";

const PersonalDetails = () => {
  const [Id , setId ] = useState('');
  const [ApplicantName , setApplicantName ] = useState('');
  const [Email, setEmail] = useState('');
  const [PhoneNumber, setPhoneNumber] = useState('');
  const [Nationality, setNationality] = useState('');
  const [Gender, setGender] = useState('');
  const [MaritalStatus, setMaritalStatus] = useState('');
  const [dependencies, setDependencies] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform submit action
    const formData = {
      Id ,
      ApplicantName ,
      Email,
      PhoneNumber,
      Nationality,
      Gender,
      MaritalStatus,
      dependencies,
    };
fetch('https://mortgageautomationgroupa.azurewebsites.net/personaldetails', {
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
        setId ('');
        setApplicantName ('');
        setEmail('');
        setPhoneNumber('');
        setNationality('');
        setGender('');
        setMaritalStatus('');
        setDependencies('');
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
      });
  };


  return (
    <div>
      <h1>Personal Details</h1>
      <form onSubmit={handleSubmit}>
        <label>Id :</label>
        <input
          type="number"
          value={Id }
          onChange={(e) => setId (e.target.value)}
          required
        />

        <label>ApplicantName :</label>
        <input
          type="text"
          value={ApplicantName }
          onChange={(e) => setApplicantName (e.target.value)}
          required
        />

        <label>Email:</label>
        <input
          type="Email"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Contact Number:</label>
        <input
          type="tel"
          value={PhoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />

        <label>Nationality:</label>
        <input
          type="text"
          value={Nationality}
          onChange={(e) => setNationality(e.target.value)}
          required
        />

        <label>Gender:</label>
        <select value={Gender} onChange={(e) => setGender(e.target.value)} required>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <label>Marital Status:</label>
        <select value={MaritalStatus} onChange={(e) => setMaritalStatus(e.target.value)} required>
          <option value="">Select marital status</option>
          <option value="single">Single</option>
          <option value="married">Married</option>
          <option value="divorced">Divorced</option>
          <option value="wId owed">WId owed</option>
        </select>


        <label>Dependencies:</label>
        <input
          type="number"
          value={dependencies}
          onChange={(e) => setDependencies(e.target.value)}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PersonalDetails;
