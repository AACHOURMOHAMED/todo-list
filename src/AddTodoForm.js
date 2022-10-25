import React from 'react';

const AddTodoForm = () => {
  const handleTitleChange = (e) => {
    const todoTitle = e.target.value;
    console.log(todoTitle);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    console.log('h');
  };
  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">
        Title
        <input
          type="text"
          id="todoTitle"
          name="title"
          onChange={handleTitleChange}
        />
      </label>
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodoForm;
