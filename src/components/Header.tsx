import './Header.css';
import React from 'react';
interface HeaderProps {
  todoCount: number;
}
const Header: React.FC<HeaderProps> = ({ todoCount }) => (
  <div className='header'>
    <div className='header__title'>
      Todo List <b>{todoCount}</b> task(s)
    </div>
  </div>
);

export default Header;
