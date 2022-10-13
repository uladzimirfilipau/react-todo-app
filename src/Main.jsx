import { useState } from 'react';
import './Main.css';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';

function Main() {
  const [inputValue, setInputValue] = useState('');
  const [list, setList] = useState([]);

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
      <ToDoList list={list} handleDelete={handleDelete} />
    </main>
  );
}

export default Main;
