import React, { useState, useEffect } from "react";
import { getFeatureKeyValue } from "./featureKeyQuery";

function NavBar() {
  // Define a state variable to store the feature flag value
  const [showcalc, setShowcalc] = useState(false);

  // Define a connection string and a feature key
  const connectionString = "Endpoint=https://myappcalcreact.azconfig.io;Id=NgAX;Secret=Z0BYRA46JSMZK/sdjWF28RgwrXNblkAD91FzUGhU2xw=";
  const featureKey = ".appconfig.featureflag/showcalc";

  // Use useEffect hook to call the getFeatureKeyValue function and update the state variable
  useEffect(() => {
    getFeatureKeyValue(connectionString, featureKey)
      .then((value) => {
        setShowcalc(value.enabled);
      })
      .catch((err) => {
        console.error("Failed to Fetch Keys:", err);
      });
  }, []); // Run the effect only once on mount

  return (
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/LoanPage">LoanPage</a></li>
        <li><a href="/Status">Status</a></li>
        {/* Conditionally render the calculator link based on the feature flag */}
        {showcalc && <li><a href="/calculator">Calculator</a></li>}
        <li><a href="/Chatbot">Chatbot</a></li>
        <li><a href="/faq">Faq</a></li>
      </ul>
    </nav>
  );
}
export default NavBar;
