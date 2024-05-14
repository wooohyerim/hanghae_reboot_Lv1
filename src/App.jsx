import React, { useState } from "react";

import "./App.css";

function App() {
  const [todo, setTodo] = useState([
    {
      id: 0,
      title: "test",
      body: "test test",
      isDone: false,
    },
    {
      id: 1,
      title: "이력서 수정",
      body: "이력서 수정해서 지원하기",
      isDone: false,
    },
  ]);

  console.log(todo);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const bodyChangeHandler = (e) => {
    setBody(e.target.value);
  };

  // 추가 버튼 클릭
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newTodo = {
      id: todo.length + 1,
      title,
      body,
    };
    setTodo([...todo, newTodo]);
    setTitle("");
    setBody("");
  };

  const deleteHandler = (id) => {
    const newTodoList = todo.filter((item) => item.id !== id);
    setTodo(newTodoList);
  };

  return (
    <div className="App">
      <section className="title_box">
        <span>My Todo List</span>
        <span>React</span>
      </section>
      <form className="Form" onSubmit={onSubmitHandler}>
        <div className="input_container">
          <label>Title</label>
          <input type="text" value={title} onChange={titleChangeHandler} />
          <label>Content</label>
          <input type="text" value={body} onChange={bodyChangeHandler} />
        </div>
        <button className="add_btn">Add</button>
      </form>
      <section className="list_wrap_box">
        <h1>Working.. 🔥</h1>
        <div className="list_inner_box">
          {todo.map((list) => {
            return (
              <div key={list.id} className="list_box">
                <h1> {list.title}</h1>
                <span> {list.body}</span>
                <div className="btn_wrap_box">
                  <button
                    onClick={() => deleteHandler(list.id)}
                    className="remove btn"
                  >
                    삭제하기
                  </button>
                  <button className="done btn">완료</button>
                </div>
              </div>
            );
          })}
        </div>
        <h1>Done..! 👍</h1>
        <div className="list_inner_box">
          <div></div>
        </div>
      </section>
    </div>
  );
}

export default App;
