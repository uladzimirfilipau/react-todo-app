import { useState } from 'react';
import './Main.css';
import ToDoForm from './ToDoForm';

function Main() {
  const [inputValue, setInputValue] = useState('');
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue !== '') {
      setList([inputValue, ...list]);
      setInputValue('');
    }
  };

  return (
    <main className="content">
      <ToDoForm
        inputValue={inputValue}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </main>
  );
}

export default Main;
