import React from 'react';
import ts from 'typescript';
import { todoContext } from './todoContext';
type Todo = {
  id: number;
  name: string;
  description: string;
  checked: boolean;
};
interface TodoProviderProps {
  children: React.ReactNode;
}
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
export const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
  // const [todos, setTodos] = React.useState(DEFAULT_TODO_LIST);
  const [todos, setTodos] = React.useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });
  const [todoIdEdit, setTodoIdEdit] = React.useState<Todo['id'] | null>(null);
  React.useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos') || '{}');
    if (todos) {
      setTodos(todos);
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const selectTodoForEdit = (id: Todo['id']) => {
    setTodoIdEdit(id);
  };
  const addTodo = ({ name, description }: Omit<Todo, 'checked' | 'id'>) => {
    setTodos([
      ...todos,
      { id: todos[todos.length - 1].id + 1, description, name, checked: false },
    ]);
  };
  const checkTodo = (id: Todo['id']) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, checked: !todo.checked };
        }
        return todo;
      })
    );
  };
  const deleteTodo = (id: Todo['id']) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const changeTodo = ({ name, description }: Omit<Todo, 'checked' | 'id'>) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === todoIdEdit) {
          return { ...todo, name, description };
        }
        return todo;
      })
    );
    setTodoIdEdit(null);
  };
  const value = React.useMemo(
    () => ({
      todoIdEdit,
      todos,
      deleteTodo,
      changeTodo,
      addTodo,
      selectTodoForEdit,
      checkTodo,
    }),
    [
      todoIdEdit,
      todos,
      deleteTodo,
      changeTodo,
      addTodo,
      selectTodoForEdit,
      checkTodo,
    ]
  );
  return <todoContext.Provider value={value}>{children}</todoContext.Provider>;
};
