import React from 'react';
import './ToDo.css';

const ToDo = ({ item, handleDelete }) => {
  const handleClick = () => {
    handleDelete(item.id);
  };

  return (
    <li className="item">
      <p className="item__title">{item.value}</p>
      <button
        className="item__delete"
        type="button"
        onClick={handleClick}
        aria-label="Delete todo"
      >
        Delete
      </button>
    </li>
  );
};

export default ToDo;
