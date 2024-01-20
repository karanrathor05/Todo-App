
import React, { useState } from 'react';
import './index.css';

const Todo = () => {
 const [todos, setTodos] = useState([]);
 const [input, setInput] = useState('');

 const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, input]);
    setInput('');
 };

 const deleteTodo = (index) => {
    let newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
 };

 return (
    <div className="Todo">
      <h1>Todo List</h1>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
 );
};

export default Todo;