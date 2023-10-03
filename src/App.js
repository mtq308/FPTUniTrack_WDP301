import { useState } from "react";
import LoggedIn from "./components/LoginPage/LoggedIn/LoggedIn";
import LoginForm from "./components/LoginPage/LoginForm/LoginForm";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
      <div className="login">
        {isLoggedIn ? (
          <LoggedIn setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <LoginForm setIsLoggedIn={setIsLoggedIn} />
        )}
      </div>
  );
}

export default App;
