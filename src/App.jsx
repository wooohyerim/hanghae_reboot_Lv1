import React, { useState } from "react";
import TodoContainer from "./components/TodoContainer";
import "./App.css";

function App() {
  const [todo, setTodo] = useState([
    {
      id: 0,
      title: "Working test",
      body: "test",
      isDone: false,
    },
    {
      id: 1,
      title: "Done test",
      body: "done",
      isDone: true,
    },
  ]);
  const [doneTodo, setDoneTodo] = useState([]);

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
      isDone: false,
    };
    setTodo([...todo, newTodo]);
    setTitle("");
    setBody("");
  };

  // 삭제 버튼 클릭
  const deleteHandler = (id) => {
    const newTodoList = todo.filter((item) => item.id !== id);
    setTodo(newTodoList);
  };

  // 완료 / 취소 버튼 클릭
  const cancelClickHandler = (id) => {
    const newTodoList = todo.map((item) =>
      item.id === id ? { ...item, isDone: !item.isDone } : item
    );
    setTodo(newTodoList);
  };

  // console.log("todo",todo);

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
        <TodoContainer
          todo={todo}
          deleteHandler={deleteHandler}
          cancelClickHandler={cancelClickHandler}
        />
      </section>
    </div>
  );
}

export default App;
