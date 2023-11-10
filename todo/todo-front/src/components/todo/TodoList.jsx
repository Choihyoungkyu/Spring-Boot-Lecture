import React, { useState } from "react";
import Modal from "../modal/Modal";
import Btn from "../btn/Btn";
import "./TodoList.css";

export default function TodoList() {
  const [todoList, setTodoList] = useState(["one", "two", "three", "four"]);
  const [completeList, setCompleteList] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);

  // Create Todo
  const handleTodoCreate = (content) => {
    setTodoList((prev) => prev.concat(content));
    return;
  };

  // Complete Todo
  const handleTodoComplete = (todo) => {
    if (todoList.includes(todo)) {
      const tmp = todoList.filter((value) => value !== todo);
      setTodoList(tmp);
      setCompleteList((prev) => prev.concat(todo));
    } else {
      const tmp = completeList.filter((value) => value !== todo);
      setCompleteList(tmp);
      setTodoList((prev) => prev.concat(todo));
    }
  };

  return (
    <article>
      {isOpenModal && (
        <Modal
          isOpen={isOpenModal}
          title="Todo 생성"
          handleModalClose={() => setIsOpenModal(false)}
          handleModalConfirm={handleTodoCreate}
        />
      )}
      <section className="header">
        <div className="header">
          <h2>Todo List</h2>
          <Btn
            className="createBtn"
            type="button"
            content="Create"
            fn={() => setIsOpenModal(true)}
          />
        </div>
      </section>
      <section className="todo">
        <ul className="todoList">
          {todoList.map((todo, idx) => (
            <li key={todo}>
              <div className="idx">{idx}</div>
              <div>{todo}</div>
              <div className="subBox">
                <Btn
                  className="completeBtn"
                  type="button"
                  content="✅"
                  fn={() => handleTodoComplete(todo)}
                />
                <Btn className="deleteBtn" type="button" content="❌" />
              </div>
            </li>
          ))}
        </ul>
      </section>
      <section className="completed">
        <ul className="todoList">
          {completeList.map((todo, idx) => (
            <li key={todo}>
              <div className="idx">{idx}</div>
              <div>{todo}</div>
              <div className="subBox">
                <Btn
                  className="completeBtn"
                  type="button"
                  content="✔️"
                  fn={() => handleTodoComplete(todo)}
                />
                <Btn className="deleteBtn" type="button" content="❌" />
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
