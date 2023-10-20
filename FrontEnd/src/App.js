import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoggedIn from "./components/LoginPage/LoggedIn/LoggedIn";
import LoginForm from "./components/LoginPage/LoginForm/LoginForm";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const logout = () => {
    setIsLoggedIn(false);
    navigate("/login");
  }

  return (
    <div className="login {!isLoggedIn && 'login'}">
      {isLoggedIn ? (
        <LoggedIn logout={logout} />
        // <LoggedIn setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <LoginForm setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
}

export default App;
