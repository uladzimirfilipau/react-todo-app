import React from 'react';
import './ToDoList.css';
import ToDo from './ToDo';

function ToDoList({ list, handleDelete }) {
  const listItems = list.map((item) => (
    <ToDo item={item} key={item.id} handleDelete={handleDelete} />
  ));

  return <ul className="list">{listItems}</ul>;
}

export default ToDoList;
