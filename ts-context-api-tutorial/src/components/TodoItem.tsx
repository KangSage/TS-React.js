// 할 일 항목에 대한 정보를 보여주는 컴포넌트

import React from 'react';
import './TodoItem.css';
import { useTodosDispatch, Todo } from '../contexts/TodosContext';

type TodoItemProps = {
  todo: Todo; // TodoContext에서 선언했던 타입을 가져온다.
};

function TodoItem({ todo }: TodoItemProps) {
  const dispatch = useTodosDispatch();

  const onToggle = () => {
    dispatch({
      type: 'TOGGLE',
      id: todo.id
    });
  };

  const onRemove = () => {
    console.log('remove id %s', todo.id);

    dispatch({
      type: 'REMOVE',
      id: todo.id
    });
  };

  return (
    <li className={`TodoItem ${todo.done ? 'done' : ''}`}>
      <span className='text' onClick={onToggle}>
        {todo.text}
      </span>
      <span className='remove' onClick={onRemove}>
        (X)
      </span>
    </li>
  );
}

export default TodoItem;
