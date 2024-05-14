import React, { useState } from "react";
import TodoList from "./components/TodoList";
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

    const doneList = doneTodo.filter((item) => item.id !== id);
    setDoneTodo(doneList);
  };

  // 완료 / 취소 버튼 클릭
  const doneHandler = (list) => {
    if (list.isDone === true) {
      const returnList = {
        id: list.id,
        title: list.title,
        body: list.body,
        isDone: false,
      };

      const doneList = doneTodo.filter((item) => item.id !== list.id);

      setTodo([...todo, returnList].sort((a, b) => a.id - b.id));
      setDoneTodo(doneList);
    } else {
      const newDoneList = {
        id: list.id,
        title: list.title,
        body: list.body,
        isDone: true,
      };

      setDoneTodo([...doneTodo, newDoneList]);
      const newTodoList = todo.filter((item) => item.id !== list.id);
      setTodo(newTodoList);
    }
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
              <TodoList
                key={list.id}
                list={list}
                deleteHandler={deleteHandler}
                doneHandler={doneHandler}
              />
            );
          })}
        </div>
        <h1>Done..! 👍</h1>

        <div className="list_inner_box">
          {doneTodo.map((list) => {
            return (
              <TodoList
                key={list.id}
                list={list}
                deleteHandler={deleteHandler}
                doneHandler={doneHandler}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default App;
