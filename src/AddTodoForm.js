import React from 'react';
import PropTypes from 'prop-types';
import InputWithLabel from './InputWithLabel';

const AddTodoForm = (props) => {
  const [todo, setTodo] = React.useState('');
  const handleTitleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    const { onAddTodo } = props;
    if (todo !== '') {
      onAddTodo({
        id: Math.floor(Math.random() * 1000),
        title: todo,
        completed: false,
      });
    }
    setTodo('');
  };

  return (
    <form onSubmit={handleAddTodo}>

      <InputWithLabel
        id="todoTitle"
        type="text"
        value={todo}
        onInputChange={handleTitleChange}
        label="Title"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodoForm;

// Add prop validattion
AddTodoForm.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
};
