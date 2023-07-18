import React from 'react';
import './ToDo.css';

const ToDo = ({ item, handleDone, handleDelete }) => {
  const itemComlete = item.complete;
  const titleClassName = itemComlete
    ? 'item__title item__title_complete'
    : 'item__title';

  const buttonClassName = itemComlete
    ? 'item__button item__button_complete'
    : 'item__button';

  const buttonText = itemComlete ? 'Delete' : 'Done';

  const handleDoneClick = () => {
    handleDone(item.id);
  };

  const handleDeleteClick = () => {
    handleDelete(item.id);
  };

  const handleClick = itemComlete ? handleDeleteClick : handleDoneClick;

  return (
    <li className="item" draggable={true} data-tooltip={item.value}>
      <p className={titleClassName}>{item.value}</p>
      <button className={buttonClassName} type="button" onClick={handleClick}>
        {buttonText}
      </button>
    </li>
  );
};

export default ToDo;
