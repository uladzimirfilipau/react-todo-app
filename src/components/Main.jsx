import React from 'react';
import './Main.css';
import ToDoForm from '../components/ToDoForm';
import ToDoList from '../components/ToDoList';
import { useLocalStorage } from '../../src/hook/useLocalStorage.js';

function Main() {
  const [inputValue, setInputValue] = useLocalStorage('inputValue', '');
  const [list, setList] = useLocalStorage('todoList', []);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue) {
      const newItem = {
        id: Date.now(),
        value: inputValue,
        complete: false,
      };
      setList([newItem, ...list]);
      setInputValue('');
    }
  };

  const handleDone = (id) => {
    const newList = list.map((i) =>
      i.id === id ? { ...i, complete: !i.complete } : { ...i }
    );
    setList(newList);
  };

  const handleDelete = (id) => {
    const newList = list.filter((i) => i.id !== id);
    setList(newList);
  };

  return (
    <main className="content">
      <ToDoForm
        inputValue={inputValue}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <ToDoList
        list={list}
        handleDone={handleDone}
        handleDelete={handleDelete}
      />
    </main>
  );
}

export default Main;
