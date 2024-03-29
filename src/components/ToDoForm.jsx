import React from 'react';
import './ToDoForm.css';

function ToDoForm({ inputValue, handleChange, handleSubmit }) {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="form__input"
        value={inputValue}
        name="todo"
        type="text"
        onChange={handleChange}
        placeholder="Enter todo..."
        minLength="1"
        required
      />
      <button className="form__button" type="submit" aria-label="Add todo">
        Add
      </button>
    </form>
  );
}

export default ToDoForm;
