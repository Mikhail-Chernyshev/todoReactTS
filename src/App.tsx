import React from 'react';
import './App.css';
import Header from './components/Header';
import TodoList from './components/TodoList';
import TodoPanel from './components/TodoPanel';
import { TodoProvider } from './utils';

export type Todo = {
  id: number;
  name: string;
  description: string;
  checked: boolean;
};

function App() {
  return (
    <TodoProvider>
      <div className='main'>
        <div className='todo'>
          <Header />
          <TodoPanel mode='add' />
          <TodoList />
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
