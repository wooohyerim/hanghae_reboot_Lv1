import React from "react";

const TodoList = ({ list, deleteHandler, doneHandler }) => {
  return (
    <div className="list_box">
      <h1> {list.title}</h1>
      <span> {list.body}</span>
      <div className="btn_wrap_box">
        <button
          onClick={() => {
            deleteHandler(list.id);
          }}
          className="remove btn"
        >
          삭제하기
        </button>
        <button onClick={() => doneHandler(list)} className="done btn">
          {list.isDone === true ? "취소" : "완료"}
        </button>
      </div>
    </div>
  );
};

export default TodoList;
