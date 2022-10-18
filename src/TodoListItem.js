import React from 'react';
import PropTypes from 'prop-types';

const TodoListItem = (props) => {
  const { todo } = props;
  return (
    <ul>
      <li>
        {todo}
      </li>
    </ul>
  );
};

export default TodoListItem;

TodoListItem.propTypes = {
  todo: PropTypes.string.isRequired,
};
