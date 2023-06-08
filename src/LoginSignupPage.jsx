import React, { useState } from "react";
import "./Login.css";
import emailjs from "@emailjs/browser";

const LoginSignupPage = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState({ value: "", verified: false });
  const [userpassword, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [otp, setOTP] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Verify email OTP before performing login or signup
    if (!email.verified) {
      setErrorMessage("Please verify your email before submitting.");
      return;
    }

    // Perform login or signup logic here
    if (isLogin) {
      // Perform login
      const loginData = {
        email: email.value,
        userpassword,
      };
      fetch("https://mortgageautomationgroupa.azurewebsites.net/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Login successful! ✔️", data);
          // Reset form fields
          setEmail({ value: "", verified: false });
          setPassword("");
          setIsLoggedIn(true); // Set isLoggedIn to true after successful login
        })
        .catch((error) => {
          console.error("Error logging in:", error);
          setErrorMessage("Invalid email or password ❌"); // Display error message
        });
    } else {
      // Perform signup
      const signupData = {
        id: generateRandomId(),
        email: email.value,
        username,
        userpassword,
        otp,
      };
      fetch("https://mortgageautomationgroupa.azurewebsites.net/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Signup successful! ✔️", data);
          alert(`${signupData.id} is your id. Save it for further use`);
          // Reset form fields
          setEmail({ value: "", verified: false });
          setUsername("");
          setPassword("");
          setIsLoggedIn(true); // Set isLoggedIn to true after successful signup
        })
        .catch((error) => {
          console.error("Error signing up:", error);
          setErrorMessage("Error occurred during signup"); // Display error message
        });
    }
  };

  const generateRandomId = () => {
    return Math.floor(Math.random() * 100000);
  };

  const sendOTP = () => {
    // Generate the OTP (assuming you have the logic for this)
    const otp = generateRandomId();

    // Store the OTP in localStorage with a key of “otp”
    localStorage.setItem("otp", otp);

    // Compose the email parameters
    const templateParams = {
      to_email: email.value,
      subject: "OTP Verification",
      message: `${otp}`,
    };

    // Send the email using Email.js
    emailjs
      .send(
        "service_zg0dxxi",
        "template_dqbrhfv",
        templateParams,
        "KhKgsbnuKmdioHOSV"
      )
      .then(
        function (response) {
          console.log("OTP email sent successfully ✔️:", response);
          // Handle success, e.g., show a success message or update UI
        },
        function (error) {
          console.error("Error sending OTP email ❌:", error);
          // Handle error, e.g., show an error message or perform fallback action
        }
      );

    setEmail({ ...email, verified: true });
  };

  const handleVerifyOTP = () => {
    // Get the OTP from localStorage with a key of “otp”
    const storedOtp = localStorage.getItem("otp");

    // Compare the OTP from localStorage with the user input
    if (storedOtp === otp) {
      // Perform OTP verification logic here
      // If the OTP is valid, update the state to mark OTP verification as completed
      setEmail({ ...email, verified: true });
      setSuccessMessage("Email verified ✔️!");
      // Remove the OTP from localStorage after verification
      localStorage.removeItem("otp");
    } else {
      setErrorMessage("OTP validation failed ❌");
    }
  };

  return (
    <div>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      {errorMessage && <p>{errorMessage}</p>}
      {successMessage && <p>{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          value={email.value}
          onChange={(e) =>
            setEmail({ value: e.target.value, verified: false })
          }
          required
          disabled={email.verified}
        />

        {!email.verified && (
          <button onClick={sendOTP} disabled={!email.value}>
            Send OTP
          </button>
        )}
        {email.verified && (
          <>
            <label>OTP:</label>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOTP(e.target.value)}
              required
            />
            <button onClick={handleVerifyOTP} disabled={!otp}>
              Verify
            </button>
          </>
        )}
        {!isLogin && (
          <>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </>
        )}
        <label>Password:</label>
        <input
          type="password"
          value={userpassword}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
      </form>
      <p>
        {isLogin ? "Don't have an account?" : "Already have an account?"}
        <button onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Sign Up" : "Login"}
        </button>
      </p>
    </div>
  );
};

export default LoginSignupPage;
