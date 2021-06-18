import React, { useState } from 'react';
import Display from './Display';
import ButtonPannel from './ButtonPannel';
import calculate from '../logic/calculate';
import './App.css';

const App = () => {
  const [total, setTotal] = useState('');
  const [next, setNext] = useState('');
  const [operation, setOperation] = useState(null);

  const handleClick = (btnName) => {
    const calc = calculate({
      total: total === 'Error' ? '' : total,
      next,
      operation,
    }, btnName);

    setTotal(calc.total);
    setNext(calc.next);
    setOperation(calc.operation);
  };

  const result = () => {
    let result = '';

    if (total) {
      result += total;
    }
    if (operation) {
      result += operation;
    }
    if (next) {
      result += next;
    }
    return result;
  };
  return (
    <div className="flex">

      <h2>Let&apos;s do some math</h2>

      <div className="App">
        <Display result={result()} />
        <ButtonPannel handleClick={(label) => handleClick(label)} />
      </div>
    </div>
  );
};

export default App;
