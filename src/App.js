import React, { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoPopup from "./components/TodoPopup";
import bgImage from './bg.jpg';

const App = () => {
  const [todo, setTodo] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      const updatedTodos = todos.map((t) =>
        t.id === editId ? { id: t.id, todo, date, status, description } : t
      );
      setTodos(updatedTodos);
      setEditId(0);
    } else {
      setTodos([{ id: `${todo}-${Date.now()}`, todo, date, status, description }, ...todos]);
    }
    setTodo("");
    setDate("");
    setStatus("");
    setDescription("");
    setIsPopupOpen(false);
  };

  const handleDelete = (id) => {
    const delTodo = todos.filter((to) => to.id !== id);
    setTodos([...delTodo]);
  };

  const handleEdit = (id) => {
    const editTodo = todos.find((i) => i.id === id);
    setTodo(editTodo.todo);
    setDate(editTodo.date);
    setStatus(editTodo.status);
    setDescription(editTodo.description);
    setEditId(id);
    setIsPopupOpen(true);
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
    setTodo("");
    setDate("");
    setStatus("");
    setDescription("");
    setEditId(0);
  };

  return (
    <div className="App" style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', color: 'white' }}>
      <h1>Todo List App</h1>
      <div className="main-container">
        <div className="container">
          <TodoForm
            handleSubmit={handleSubmit}
            todo={todo}
            date={date}
            status={status}
            description={description}
            setTodo={setTodo}
            setDate={setDate}
            setStatus={setStatus}
            setDescription={setDescription}
            editId={editId}
          />
        </div>
        <div className="container2">
          <TodoList
            todos={todos}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />

          {isPopupOpen && (
            <TodoPopup
              handleSubmit={handleSubmit}
              todo={todo}
              date={date}
              status={status}
              description={description}
              setTodo={setTodo}
              setDate={setDate}
              setStatus={setStatus}
              setDescription={setDescription}
              handleClose={handlePopupClose}
              editId={editId}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
