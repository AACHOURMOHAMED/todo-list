import React from 'react';
import PropTypes from 'prop-types';

const TodoListItem = (props) => {
  const {
    id, todo, completed, handleToggleTodo,
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
    </li>
  );
};

export default TodoListItem;

TodoListItem.propTypes = {
  id: PropTypes.number.isRequired,
  todo: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  handleToggleTodo: PropTypes.func.isRequired,
};
