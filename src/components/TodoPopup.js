import React from "react";
import "./TodoPopup.css";

const TodoPopup = ({ handleSubmit, todo, date, status, description, setTodo, setDate, setStatus, setDescription, handleClose, editId }) => {
  return (
    <div className="todoPopup">
      <div className="popupContent">
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
          <button type="submit">Save</button>
          <button type="button" onClick={handleClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default TodoPopup;
