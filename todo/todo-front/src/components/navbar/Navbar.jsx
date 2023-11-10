import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const navList = {
    home: "/",
    todoList: "/todo-list",
  };
  return (
    <>
      <nav>
        <ul className="nav">
          {Object.keys(navList).map((navKey) => {
            // Todo : 로그인 로직 수정하기
            const username = window.sessionStorage.getItem("username");
            if (navKey === "home" && username) {
              return (
                <li key={navKey}>
                  <Link to={navList[navKey] + `welcome/${username}`}>
                    {navKey}
                  </Link>
                </li>
              );
            }

            return (
              <li key={navKey}>
                <Link to={navList[navKey]}>{navKey}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
