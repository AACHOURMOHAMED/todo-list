import React from 'react';
import PropTypes from 'prop-types';

const TodoListItem = (props) => {
  const {
    id, todo, completed, handleToggleTodo, removeTodo,
  } = props;
  return (
    <li>
      <label htmlFor={todo}>
        <input
          type="checkbox"
          id={todo}
          name={todo}
          checked={completed}
          onChange={() => handleToggleTodo(id)}
        />
        {todo}
      </label>
      <button type="button" onClick={() => removeTodo(id)}>Remove</button>
    </li>
  );
};

export default TodoListItem;

TodoListItem.propTypes = {
  id: PropTypes.number.isRequired,
  todo: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  handleToggleTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
};
