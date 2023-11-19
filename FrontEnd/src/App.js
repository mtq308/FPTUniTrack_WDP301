import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import LoginForm from "./components/LoginPage/LoginForm/LoginForm";
import LoggedIn from "./components/LoginPage/LoggedIn/LoggedIn";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the token exists in local storage
    const token = localStorage.getItem("token");

    if (token) {
      // Token exists, set isLoggedIn to true
      setIsLoggedIn(true);
    }
  }, []); // Empty dependency array ensures this effect runs only once on mount

  const handleLogin = (userRole) => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    // Clear user authentication state by removing the token from local storage
    localStorage.removeItem("token");
    // You can also perform any additional cleanup here
  };

  return (
    <div className="app">
      {isLoggedIn ? (
        <LoggedIn setIsLoggedIn={setIsLoggedIn} logout={handleLogout} />
      ) : (
        <LoginForm setIsLoggedIn={setIsLoggedIn} handleLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;