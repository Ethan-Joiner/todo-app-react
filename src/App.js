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
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed ===false));  
        break;
      default:
        setFilteredTodos(todos);
        break;  
    }
  };

 

  // Save to Local Storage
  const saveLocalTodos = () => {
   
      localStorage.setItem('todos',JSON.stringify(todos));
    
  };

  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = localStorage.setItem('todos',JSON.stringify(todos));
      setTodos(todoLocal);
    }
  };

   // Use Effect
   useEffect(() => {
    FilterHandler();
    saveLocalTodos();
  },[todos,status]);

  // useEffect(() => {
  //   getLocalTodos();
  // },[]);
  
  console.log(filteredTodos);

  // Rendering Components
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

      <TodoList todos={todos} 
                setTodos={setTodos} 
                filteredTodos={filteredTodos} 
                />
    </div>
  );
}

export default App;
