import { useState } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useNavigate,
  useParams,
} from "react-router-dom";
import "./TodoApp.css";

export default function TodoApp() {
  return (
    <>
      <div className="TodoApp">
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginComponent />}></Route>
            <Route
              path="/welcome/:username"
              element={<WelcomeComponent />}
            ></Route>
            <Route path="*" element={<ErrorComponent />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

function LoginComponent() {
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
    console.log(username, password);
    if (username === "in28minutes" && password === "dummy") {
      console.log("Succcess");
      navigate(`/welcome/${username}`);
    } else {
      console.log("Fail");
    }
  };

  return (
    <div className="Login">
      <div className="successMessage">Authenticated Successfully</div>
      <div className="errorMessage">
        Authenticated Failed. Please check your credentials
      </div>
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

function WelcomeComponent() {
  const { username } = useParams();

  return (
    <>
      <div className="Welcome">
        <h1>Welcome {username}!</h1>
        <div>Component</div>
      </div>
    </>
  );
}

function ErrorComponent() {
  return (
    <>
      <div className="ErrorComponent">
        <h1>We are working really hard!</h1>
        <div>Apologies for the 404. Reach out to our team at ABC-DEF-GHI.</div>
      </div>
    </>
  );
}
