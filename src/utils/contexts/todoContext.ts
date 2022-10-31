import React from 'react';
type Todo = {
  id: number;
  name: string;
  description: string;
  checked: boolean;
};
export interface todoContextProps {
  todos: Todo[];
  checkTodo: (id: Todo['id']) => void;
  deleteTodo: (id: Todo['id']) => void;
  selectTodoForEdit: (id: Todo['id']) => void;
  todoIdEdit: Todo['id'] | null;
  changeTodo: ({ name, description }: Omit<Todo, 'checked' | 'id'>) => void;
  addTodo: ({ name, description }: Omit<Todo, 'checked' | 'id'>) => void;
}
export const todoContext = React.createContext<todoContextProps>({
  todos: [],
  todoIdEdit: null,
  addTodo: () => {},
  deleteTodo: () => {},
  changeTodo: () => {},
  checkTodo: () => {},
  selectTodoForEdit: () => {},
});

