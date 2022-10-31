import React from 'react';
import Button from './Button';
import './TodoItem.css';
export type Todo = {
  id: number;
  name: string;
  description: string;
  checked: boolean;
};
interface TodoItemProps {
  todo: Todo;
  checkTodo: (id: Todo['id']) => void;
  deleteTodo: (id: Todo['id']) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, checkTodo, deleteTodo }) => {
  //   return <div>{todo.name}</div>;
  return (
    <div className='item'>
      <div>
        <div
          aria-hidden
          className='item__title'
          onClick={() => checkTodo(todo.id)}
          style={{
            opacity: todo.checked ? 0.5 : 1,
            textDecoration: todo.checked ? 'line-through' : 'none ',
          }}
        >
          {todo.name}
        </div>
        <div aria-hidden className='item__description'>
          {todo.description}
        </div>
        <div className='item__button'>
          <Button color='orange'>Edit</Button>
          <Button color='red' onClick={() => deleteTodo(todo.id)}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
