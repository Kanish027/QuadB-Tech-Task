// Importing React and necessary functions from date-fns for date formatting
import React from "react";
import { formatDistanceToNow } from "date-fns";

// Functional component for rendering individual todo items
const TodoItems = ({ todo, handleDeleteTodo, handleUpdateTodo }) => {
  return (
    <div className="container px-0">
      {/* Container for a single todo item */}
      <div className="row px-3 d-flex justify-content-center mb-4">
        <div className="col-lg-7 border shadow-sm rounded-1 p-3">
          {/* Main content of the todo item */}
          <div>
            {/* Displaying the todo title */}
            <h5 className="fw-bold">{todo.title}</h5>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                {/* Displaying the todo description */}
                <p className="mb-0">{todo.description}</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                {/* Checkbox for marking the todo as completed */}
                <div className="px-1">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    onChange={() => handleUpdateTodo(todo.id)}
                    checked={todo.completed}
                  />
                </div>
                {/* Button for deleting the todo */}
                <div>
                  <button
                    className="btn"
                    onClick={() => handleDeleteTodo(todo.id)}
                  >
                    {/* Displaying delete icon */}
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Displaying the relative creation time of the todo */}
            <small>
              {formatDistanceToNow(new Date(todo.date), {
                addSuffix: true,
              })}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

// Exporting the TodoItems component as the default export
export default TodoItems;
