
import React, { useState } from 'react';
import './index.css';

const Calculator = () => {
 const [result, setResult] = useState('');
 const [input, setInput] = useState('');
 const [operand, setOperand] = useState('');

 const addToInput = (val) => {
    setInput(input + val);
 };

 const performOperation = () => {
    let result = 0;
    switch (operand) {
      case '+':
        result = parseFloat(input) + parseFloat(result);
        break;
      case '-':
        result = parseFloat(result) - parseFloat(input);
        break;
      case '*':
        result = parseFloat(input) * parseFloat(result);
        break;
      case '/':
        result = parseFloat(result) / parseFloat(input);
        break;
      default:
        result = parseFloat(input);
        break;
    }
    setResult(result);
    setOperand('');
    setInput('');
 };

 const clearAll = () => {
    setResult('');
    setOperand('');
    setInput('');
 };

 return (
    <div className="Calculator">
      <h1>Calculator</h1>
      <input type="text" value={result === '' ? input : result} readOnly />
      <div className="Operators">
        <button onClick={() => setOperand('+')}>+</button>
        <button onClick={() => setOperand('-')}>-</button>
        <button onClick={() => setOperand('*')}>*</button>
        <button onClick={() => setOperand('/')}>/</button>
        <button onClick={performOperation}>=</button>
        <button onClick={clearAll}>C</button>
      </div>
      <div className="Numbers">
        <button onClick={() => addToInput('7')}>7</button>
        <button onClick={() => addToInput('8')}>8</button>
        <button onClick={() => addToInput('9')}>9</button>
        <button onClick={() => addToInput('4')}>4</button>
        <button onClick={() => addToInput('5')}>5</button>
        <button onClick={() => addToInput('6')}>6</button>
        <button onClick={() => addToInput('1')}>1</button>
        <button onClick={() => addToInput('2')}>2</button>
        <button onClick={() => addToInput('3')}>3</button>
        <button onClick={() => addToInput('0')}>0</button>
        <button onClick={() => addToInput('.')}>.</button>
      </div>
    </div>
 );
};

export default Calculator;