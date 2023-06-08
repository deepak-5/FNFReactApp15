import React, { useState, useEffect } from "react";
import "./App.css";
import HomePages from "./HomePages";
import LoanPage from "./LoanPage";
import Calculator from "./Calculator";
import Chatbot from "./Chatbot";
import FAQ from "./FAQ";
import Status from "./Status";
import Header from "./Header";
import PersonalDetails from "./PersonalDetails";
import PropertyDetails from "./PropertyDetails";
import Identity from "./Identity";
import CreditCard from "./CreditCard";
import Assets from "./Assets";
import Income from "./Income";
import Address from "./Address";
import Employee from "./Employee";
import Investment from "./Investment";
import Loan from "./Loan";
import LoginSignupPage from "./LoginSignupPage"; 
import BrokersPages from './BrokersPages';
import LendersPages from './LendersPages';
import AboutPages from './AboutPages';
import BorrowersPage from './BorrowersPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function LogoutButton({ handleLogout }) {
  const handleClick = () => {
    handleLogout(false);
    window.location.href = "/";
  };

  return <button onClick={handleClick}>Logout</button>;
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedLoginStatus = localStorage.getItem("isLoggedIn");
    if (storedLoginStatus) {
      setIsLoggedIn(JSON.parse(storedLoginStatus));
    }
  }, []);

  const handleLogin = (value) => {
    setIsLoggedIn(value);
    localStorage.setItem("isLoggedIn", JSON.stringify(value));
  };

  return (
    <div>
      <Header />
      <LogoutButton handleLogout={handleLogin} />
      <div className="main">
        <Router>
          <Routes>
            {isLoggedIn ? (
              <>
                <Route path="/" element={<HomePages />} />
                <Route path="/LoanPage" element={<LoanPage />} />
                <Route path="/Calculator" element={<Calculator />} />
                <Route path="/Chatbot" element={<Chatbot />} />
                <Route path="/FAQ" element={<FAQ />} />
                <Route path="/Status" element={<Status />} />
                <Route path="/PersonalDetails" element={<PersonalDetails />} />
                <Route path="/PropertyDetails" element={<PropertyDetails />} />
                <Route path="/Identity" element={<Identity />} />
                <Route path="/CreditCard" element={<CreditCard />} />
                <Route path="/Assets" element={<Assets />} />
                <Route path="/Income" element={<Income />} />
                <Route path="/Address" element={<Address />} />
                <Route path="/Employee" element={<Employee />} />
                <Route path="/Investment" element={<Investment />} />
                <Route path="/Loan" element={<Loan />} />
                <Route path="/brokers" element={<BrokersPages />} />
                <Route path="/lenders" element={<LendersPages />} />
                <Route path="/about" element={<AboutPages />} />
                <Route path="/borrowers" element={<BorrowersPage />} />

              </>
            ) : (
              <Route
                path="/*"
                element={
                  <LoginSignupPage setIsLoggedIn={handleLogin} /> 
                }
              />
            )}
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
