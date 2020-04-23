import React, { useState, useEffect } from 'react';
import List from './List';
import Header from './Header';
import Form from './Form';
import useFetch from './useFetch';

export const TodoContext = React.createContext();

function TodoStore() {
  const [todos, setTodos] = useState([]);

  const loading = useFetch(setTodos, 'http://localhost:8080/todo');

  const addTodo = (newTodo) => {
    setTodos([...todos, { title: newTodo, id: todos.length, status: 'todo' }]);
  };

  const changeTodoStatus = (id) => {
    const updateTodos = todos.map(todo => {
      if (todo.id === +id) {
        if (todo.status === 'done') todo.status = 'todo';
        else todo.status = 'done';
      }
      return todo;
    });
    setTodos(updateTodos);
  }

  useEffect(() => {
    console.log("새로운 내용이 렌더링됐네요", todos);
  }, [todos]);

  return (
    <TodoContext.Provider value={{ todos, addTodo, loading, changeTodoStatus }}>
      <Header />
      <Form />
      <List />
    </TodoContext.Provider>
  );
}

export default TodoStore;
