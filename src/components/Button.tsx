import React from 'react';
import './Button.css';
interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
  color: 'orange' | 'blue' | 'red';
}

const Button: React.FC<ButtonProps> = ({
  children,
  color,
  onClick,
  ...props
}) => {
  return (
    <button className={`button button_${color}`} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
