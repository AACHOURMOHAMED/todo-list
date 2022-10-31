import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddTodoForm = (props) => {
  const [todo, setTodo] = useState('');
  const handleTitleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    console.log(todo);
    const { onAddTodo } = props;
    onAddTodo(todo);
    setTodo('');
  };
  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">
        Title
        <input
          type="text"
          id="todoTitle"
          name="title"
          value={todo}
          onChange={handleTitleChange}
        />
      </label>
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodoForm;

// Add prop validattion
AddTodoForm.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
};
