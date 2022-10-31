import './Header.css';
import React from 'react';
import { useTodo } from '../utils';

const Header: React.FC = () => {
  const { todos } = useTodo();
  return (
    <div className='header'>
      <div className='header__title'>
        Todo List <b>{todos.length}</b> task(s)
      </div>
    </div>
  );
};

export default Header;
