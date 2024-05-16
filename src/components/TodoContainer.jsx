import React from "react";
import TodoList from "./TodoList";

const WorkingTodo = ({ todo, deleteHandler, cancelClickHandler }) => {
  return (
    <>
      <h1>Working.. 🔥</h1>
      <div className="list_inner_box">
        {todo.map((list) => {
          return list.isDone === false ? (
            <TodoList
              key={list.id}
              list={list}
              deleteHandler={deleteHandler}
              cancelClickHandler={cancelClickHandler}
            />
          ) : null;
        })}
      </div>
      <h1>Done..! 👍</h1>
      <div className="list_inner_box">
        {todo.map((list) => {
          return list.isDone === true ? (
            <TodoList
              key={list.id}
              list={list}
              deleteHandler={deleteHandler}
              cancelClickHandler={cancelClickHandler}
            />
          ) : null;
        })}
      </div>
    </>
  );
};

export default WorkingTodo;
