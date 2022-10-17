import React from 'react';

const AddTodoForm = () => (
  <form>
    <label htmlFor="todoTitle">
      Title
      <input type="text" id="todoTitle" />
    </label>
    <button type="button">Add</button>
  </form>
);

export default AddTodoForm;
