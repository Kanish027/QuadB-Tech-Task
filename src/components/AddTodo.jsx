// Importing React hooks and Redux functionalities
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  deleteTodo,
  updateToggleTodo,
} from "../features/todos/todoSlice"; // Importing todoSlice from Redux store
import TodoItems from "./TodoItems"; // Importing component to render individual todo items

// Functional component for managing the Todo application
const AddTodo = () => {
  // Using useSelector to access the todos state from the Redux store
  const { todos } = useSelector((state) => state.todo);

  // State variables for managing form input form
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Using useDispatch to dispatch actions to Redux store
  const dispatch = useDispatch();

  // Function to handle the addition of a new todo
  const handleAddTodo = async (e) => {
    e.preventDefault(); // Preventing the default form submission behavior
    dispatch(addTodo({ title, description })); // Dispatching addTodo action with title and description
    setTitle(""); // Resetting title input after adding todo
    setDescription(""); // Resetting description input after adding todo
  };

  // Function to handle the deletion of a todo
  const handleDeleteTodo = async (id) => {
    // Dispatching deleteTodo action with todo ID
    dispatch(deleteTodo(id));
  };

  // Function to handle toggling the completion status of a todo
  const handleUpdateTodo = (id) => {
    // Dispatching updateToggleTodo action with todo ID
    dispatch(updateToggleTodo(id));
  };

  // JSX rendering of the AddTodo component
  return (
    <div className="container">
      <div className="row d-flex justify-content-center my-5">
        <div className="col-7 border shadow-sm rounded-1 p-4">
          <h1 className="fw-bold text-center">Add Todo</h1>
          {/* Form for adding a new todo */}
          <form onSubmit={handleAddTodo}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                id="title"
                className="form-control"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                id="description"
                className="form-control"
                rows={5}
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              />
            </div>
            {/* Button for adding a new todo, with dynamic text based on loading state */}
            <div className="d-grid mb-3">
              <button className="btn btn-sm btn-dark">Add</button>
            </div>
          </form>
        </div>
      </div>
      {/* Mapping through the list of todos and rendering TodoItems component for each */}
      {todos.map((todo) => {
        return (
          <TodoItems
            key={todo.id}
            todo={todo}
            handleDeleteTodo={handleDeleteTodo}
            handleUpdateTodo={handleUpdateTodo}
          />
        );
      })}
    </div>
  );
};

// Exporting the AddTodo component as the default export
export default AddTodo;
