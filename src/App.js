import React, {useState} from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("All");

  return (
    <div className="App">
      <header>
        <h1>Ethan's Todo List</h1>
      </header>
      <Form inputText={inputText} 
            setInputText={setInputText} 
            todos={todos} 
            setTodos={setTodos} 
            setStatus={setStatus}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
