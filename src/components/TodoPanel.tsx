import React from 'react';
import { useTodo } from '../utils';
import Button from './Button';
import './TodoPanel.css';
export type Todo = {
  id: number;
  name: string;
  description: string;
  checked: boolean;
};

interface AddTodoPanelProps {
  mode: 'add';
}
interface EditTodoPanelProps {
  mode: 'edit';
  editTodo: Omit<Todo, 'id' | 'checked'>;
}

type TodoPanelProps = AddTodoPanelProps | EditTodoPanelProps;

const DEFAULT_TODO = {
  name: '',
  description: '',
};

const TodoPanel: React.FC<TodoPanelProps> = (props) => {
  const {changeTodo, addTodo} = useTodo();
  const isEdit = props.mode === 'edit';
  const isAdd = props.mode === 'add';


  const [todo, setTodo] = React.useState(isEdit ? props.editTodo : DEFAULT_TODO);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };
  const onClick = () => {
    const todoItem = { name: todo.name, description: todo.description };
    if (isEdit) {
      return changeTodo(todoItem);
    }
    addTodo(todoItem);
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
      {
        isAdd && (
          <Button color='blue' onClick={onClick}>
            ADD
          </Button>
        )
      }
      {isEdit && (
        <Button color='orange' onClick={onClick}>
          EDIT
        </Button>
      )}
    </div>
  );
};

export default TodoPanel;
