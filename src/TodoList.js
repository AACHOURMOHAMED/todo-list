import TodoListItem from './TodoListItem';

const TodoList = () => {
  const data = [
    {
      id: 1,
      title: 'Lean next js',
    },
    {
      id: 2,
      title: 'Lean react js',
    },
    {
      id: 3,
      title: 'Lean JavaScript',
    },
  ];
  return (
    <>
      {
    data.map((index) => (
      <TodoListItem
        key={index.id}
        id={index.id}
        todo={index.title}
      />
    ))
    }
    </>
  );
};

export default TodoList;
