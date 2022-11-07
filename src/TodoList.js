import PropTypes from 'prop-types';
import TodoListItem from './TodoListItem';

const TodoList = (props) => {
  const { todos, handleToggleTodo, removeTodo } = props;
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
        removeTodo={removeTodo}
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
  removeTodo: PropTypes.func.isRequired,
};
