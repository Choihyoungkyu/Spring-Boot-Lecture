import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginComponent() {
  const [username, setUsername] = useState("in28minutes");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "in28minutes" && password === "dummy") {
      window.sessionStorage.setItem("username", username);
      navigate(`/welcome/${username}`);
    } else {
      window.sessionStorage.removeItem("username");
    }
  };
  return (
    <div className="Login">
      <form className="LoginForm">
        <div>
          <label>User Name</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div>
          <button type="submit" name="button" onClick={handleSubmit}>
            login
          </button>
        </div>
      </form>
    </div>
  );
}
