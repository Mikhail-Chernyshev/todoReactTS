import React from 'react';
import Button from './Button';
import './TodoPanel.css';
export type Todo = {
  id: number;
  name: string;
  description: string;
  checked: boolean;
};

interface TodoPanelProps {
  addTodo: ({ name, description }: Omit<Todo, 'checked' | 'id'>) => void;
}
const DEFAULT_TODO = {
  name: '',
  description: '',
};

const TodoPanel: React.FC<TodoPanelProps> = ({ addTodo }) => {
  const [todo, setTodo] = React.useState(DEFAULT_TODO);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };
  const onClick = () => {
    addTodo({ name: todo.name, description: todo.description });
    setTodo(DEFAULT_TODO);
  };
  return (
    <div className='todo-panel'>
      <div className='fields'>
        <div className='field'>
          <label htmlFor='name'>
            <div>name</div>
            <input
              type='text'
              id='name'
              value={todo.name}
              name='name'
              onChange={onChange}
            />
          </label>
        </div>
        <div className='field'>
          <label htmlFor='description'>
            <div>description</div>
            <input
              type='text'
              value={todo.description}
              id='description'
              name='description'
              onChange={onChange}
            />
          </label>
        </div>
      </div>
      <Button color='blue' onClick={onClick}>
        ADD
      </Button>
    </div>
  );
};

export default TodoPanel;
