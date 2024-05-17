import React from "react";

const TodoForm = ({
  title,
  body,
  onSubmitHandler,
  titleChangeHandler,
  bodyChangeHandler,
}) => {
  return (
    <form className="Form" onSubmit={onSubmitHandler}>
      <div className="input_container">
        <label>Title</label>
        <input type="text" value={title} onChange={titleChangeHandler} />
        <label>Content</label>
        <input type="text" value={body} onChange={bodyChangeHandler} />
      </div>
      <button className="add_btn">Add</button>
    </form>
  );
};

export default TodoForm;
