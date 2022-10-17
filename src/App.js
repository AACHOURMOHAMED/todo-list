import React from 'react';

const App = () => {
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
    }
  ]
  return (
    <>
      <h1>todolist</h1>
      <ul>
        {
          data.map((index) => (
            <li key={index.id}>
              {index.title}
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default App;
