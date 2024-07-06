import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenAlt, faTrash } from '@fortawesome/free-solid-svg-icons';


const TodoList = ({ todos, handleDelete, handleEdit }) => {
  return (
    <ul className="allTodos">
      {todos.map((t) => (
        <li className="singleTodo" key={t.id}>
          <span className="todoText">{t.todo}</span>
          <span className="todoDate">{t.date}</span>
          <span className="todoStatus">{t.status}</span>
          <div className="buttons">
            <button onClick={() => handleEdit(t.id)}><FontAwesomeIcon icon={faPenAlt} /></button>
            <button onClick={() => handleDelete(t.id)}><FontAwesomeIcon icon={faTrash} /></button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
