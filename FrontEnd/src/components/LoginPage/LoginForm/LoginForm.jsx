import React, { useState } from "react";
import "./LoginForm.css";
import Card from "../Card/Card";
import GoogleIcon from "@mui/icons-material/Google";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const LoginForm = ({ setIsLoggedIn, handleLogin }) => {
  const [userRole, setUserRole] = useState("student");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState({});

  const navigate = useNavigate();

  const errors = {
    username: "* Invalid email",
    password: "* Invalid password",
    noUsername: "* Please enter your username",
    noPassword: "* Please enter your password",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      // Handle form validation here
      if (!username) {
        setErrorMessages({ username: errors.noUsername });
      }
      if (!password) {
        setErrorMessages({ password: errors.noPassword });
      }
      return;
    }

    console.log("Selected userRole:", userRole);

    try {
      const response = await axios.post(
        `http://localhost:3456/auth/login`,
        {
          id: username,
          password: password,
        }
      );
      const token = response.data.token;
      // Save the token in local storage or as needed for authentication
      localStorage.setItem("token", token);
      // Determine the appropriate route based on the selected userRole
      let route = "";

      if (userRole === "student") {
        route = "/student";
      } else if (userRole === "lecturer") {
        route = "/lecturer";
      } else if (userRole === "admin") {
        route = "/admin";
      }

      // Use the navigate function to go to the determined route after successful login
      navigate(route);

      setIsLoggedIn(true); // Set the login state as successful
    } catch (error) {
      console.log(error);
      // Handle login errors
      // ...
    }
  };

  // Render error messages
  const renderErrorMsg = (name) =>
    name === errorMessages.name && (
      <p className="error_msg">{errorMessages.message}</p>
    );

  return (
    <div className="login-bg">
      <Card>
        <h1 className="title">Sign In</h1>
        <p className="subtitle">Please log in using your mail and password!</p>
        <form action="POST" onSubmit={handleSubmit}>
          <div className="inputs_container">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {renderErrorMsg("username")}
            {renderErrorMsg("noUsername")}
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {renderErrorMsg("password")}
            {renderErrorMsg("noPassword")}
          </div>

          {/* <div className="radio_group">
            <p>Select User Role:</p>
            <label>
              <input
                type="radio"
                value="student"
                checked={userRole === "student"}
                onChange={() => setUserRole("student")}
              />
              Student
            </label>
            <label>
              <input
                type="radio"
                value="lecturer"
                checked={userRole === "lecturer"}
                onChange={() => setUserRole("lecturer")}
              />
              Lecturer
            </label>
            <label>
              <input
                type="radio"
                value="admin"
                checked={userRole === "admin"}
                onChange={() => setUserRole("admin")}
              />
              Admin
            </label>
          </div> */}

          <input type="submit" value="Log In" className="login_button" />
        </form>
        <div className="link_container">
          <a href="/loginpage" className="small">
            Forgot Password?
          </a>
        </div>
        <div className="icons">
          <GoogleIcon className="icon" />
        </div>
      </Card>
    </div>
  );
};

export default LoginForm;
