import React from "react";
import TodoList from "./TodoList";

const WorkingTodo = ({ todo, deleteHandler, cancelClickHandler }) => {
  return (
    <>
      <h1>Working.. 🔥</h1>
      <div className="list_inner_box">
        {todo
          .filter((list) => !list.isDone)
          .map((list) => (
            <TodoList
              key={list.id}
              list={list}
              deleteHandler={deleteHandler}
              cancelClickHandler={cancelClickHandler}
            />
          ))}
      </div>
      <h1>Done..! 👍</h1>
      <div className="list_inner_box">
        {todo
          .filter((list) => list.isDone)
          .map((list) => (
            <TodoList
              key={list.id}
              list={list}
              deleteHandler={deleteHandler}
              cancelClickHandler={cancelClickHandler}
            />
          ))}
      </div>
    </>
  );
};

export default WorkingTodo;
