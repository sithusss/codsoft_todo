import React from "react";

const TodoForm = ({ handleSubmit, todo, date, status, description, setTodo, setDate, setStatus, setDescription, editId }) => {
  return (
    <form className="todoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Todo"
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="text"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        placeholder="Status"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button type="submit"> {editId ? "Edit" : "Go"}</button>
    </form>
  );
};

export default TodoForm;
