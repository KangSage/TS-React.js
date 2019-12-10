import React, { Fragment } from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import Counter from './components/Counter';

function App() {
  return (
    <Fragment>
      <TodoInsert />
      <TodoList />
      <Counter />
    </Fragment>
  );
}

export default App;
