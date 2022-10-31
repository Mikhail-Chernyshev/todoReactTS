import React from 'react';
import { todoContext } from './todoContext';

export const useTodo = () => React.useContext(todoContext);
