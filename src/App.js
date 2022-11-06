import React from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';

const App = () => {
  const [todos, setTodos] = React.useState([]);

  const handleAddTodo = (todo) => {
    setTodos((prevTodos) => [...prevTodos, todo]);
  };
  return (
    <>
      <h1>todolist</h1>
      <AddTodoForm onAddTodo={handleAddTodo} />
      <p>{todos}</p>
      <TodoList />
    </>
  );
};

export default App;
