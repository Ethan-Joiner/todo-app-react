import React from "react";
import Todo from "./Todo";

const TodoList = ({todos, setTodos, status, filteredToDos}) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
          {filteredToDos.map(todo => (
              <Todo text={todo.text} key={todo.id} completed={todo.completed} todos={todos} setTodos={setTodos} todo={todo}/>
          ))}
      </ul>
    </div>
  );
};


export default TodoList;