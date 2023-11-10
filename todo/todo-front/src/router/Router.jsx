import { Route, Routes } from "react-router-dom";
import LoginComponent from "../components/login/Login";
import WelcomeComponent from "../components/welcome/Welcome";
import ErrorComponent from "../components/error/Error";
import TodoList from "../components/todo/TodoList";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<LoginComponent />}></Route>
      <Route path="/welcome/:username" element={<WelcomeComponent />}></Route>
      <Route path="/todo-list" element={<TodoList />}></Route>
      <Route path="*" element={<ErrorComponent />}></Route>
    </Routes>
  );
}
