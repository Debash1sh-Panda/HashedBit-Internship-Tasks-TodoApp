// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Todo from './Components/Todo';
import TodoForm from './Components/TodoForm';

function App() {
    const [todos, setTodos] = useState([]);

    const addTodo = (text) => {
      const newTodos = [...todos, { text }];
      setTodos(newTodos);
    };

    const removeTodo = (index) => {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
    };

    return (
      <div className="app">
        <div className="todo-list">
          <TodoForm addTodo={addTodo} />
          {todos.map((todo, index) => (
            <Todo key={index} index={index} todo={todo} removeTodo={removeTodo} />
          ))}
        </div>
      </div>
    );
}

export default App;
