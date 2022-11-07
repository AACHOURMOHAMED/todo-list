import React, { useEffect } from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';

const App = () => {
  const [todos, setTodos] = React.useState(() => {
    const saved = localStorage.getItem('savedTodoList');
    const initialValue = JSON.parse(saved);
    return initialValue || '';
  });

  const handleAddTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  useEffect(() => {
    // save on localstorge
    localStorage.setItem('savedTodoList', JSON.stringify(todos));
  }, [todos]);

  const handleToggleTodo = (id) => {
    setTodos(todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    }));
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <h1>todolist</h1>
      <AddTodoForm onAddTodo={handleAddTodo} />
      <TodoList todos={todos} handleToggleTodo={handleToggleTodo} removeTodo={removeTodo} />
    </>
  );
};

export default App;
