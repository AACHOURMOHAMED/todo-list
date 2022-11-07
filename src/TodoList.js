import PropTypes from 'prop-types';
import TodoListItem from './TodoListItem';

const TodoList = (props) => {
  const { todos, handleToggleTodo } = props;
  return (
    <>
      {
    todos.map((index) => (
      <TodoListItem
        key={index.id}
        id={index.id}
        todo={index.title}
        completed={index.completed}
        handleToggleTodo={handleToggleTodo}
      />
    ))
    }
    </>
  );
};

export default TodoList;

// Add prop validattion
TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
  handleToggleTodo: PropTypes.func.isRequired,
};
