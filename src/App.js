import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
 
  // States
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("All");
  const [filteredTodos, setFilteredTodos] = useState([]);

  // Functions

  const FilterHandler = () => {
    switch(status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => !todo.complete));  
        break;
      default:
        setFilteredTodos(todos);
        break;  
    }
  }

   // Use Effect
   useEffect(() => {
    FilterHandler();
  },[todos,status]);

  // Rendering Components
  return (
    <div className="App">
      <header>
        <h1>`Ethan's Todo List`</h1>
      </header>
      <Form inputText={inputText} 
            setInputText={setInputText} 
            todos={todos} 
            setTodos={setTodos} 
            setStatus={setStatus}/>

      <TodoList todos={todos} 
                setTodos={setTodos} 
                status={status} 
                filteredTodos={filteredTodos} 
                />
    </div>
  );
}

export default App;
