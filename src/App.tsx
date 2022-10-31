import React from 'react';
import { TodoComment } from 'typescript';
import './App.css';
import Header from './components/Header';
import TodoPanel from './components/TodoPanel';

export type Todo = {
  id: number;
  name: string;
  description: string;
  checked: boolean;
};

const DEFAULT_TODO_LIST = [
  { id: 1, name: 'task 1', description: 'description 1', checked: false },
  { id: 2, name: 'task 2', description: 'description 2', checked: false },
  {
    id: 3,
    name: 'task 3',
    description: 'description descriptiondescriptiondescriptiondescription 3',
    checked: true,
  },
];

function App() {
  const [todos, setTodos] = React.useState(DEFAULT_TODO_LIST);
  const addTodo = ({ name, description }: Omit<Todo, 'checked' | 'id'>) => {
    setTodos([
      ...todos,
      { id: todos[todos.length - 1].id + 1, description, name, checked: false },
    ]);
  };
  return (
    <div className='main'>
      <div className='todo'>
        <Header todoCount={todos.length} />
        <TodoPanel addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
