import React from 'react';
import { useTodo } from '../utils';
import TodoItem from './TodoItem';
import TodoPanel from './TodoPanel';
// import Button from './Button';
export type Todo = {
  id: number;
  name: string;
  description: string;
  checked: boolean;
};

const TodoList: React.FC = () => {
  const { todos, todoIdEdit, checkTodo, deleteTodo, selectTodoForEdit } = useTodo();
  return (
    <div>
      {todos.map((todo) => {
        if (todo.id === todoIdEdit)
          return (
            <TodoPanel
              key={todo.id}
              mode='edit'
              editTodo={{ name: todo.name, description: todo.description }}
            />
          );
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            checkTodo={checkTodo}
            deleteTodo={deleteTodo}
            selectTodoForEdit={selectTodoForEdit}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
