import React, { useState, useEffect } from 'react';
import List from './List';
import useFetch from './useFetch';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState();

  const loading = useFetch(setTodos, 'http://localhost:8080/todo');

  const changeInputData = (e) => {
    setNewTodo(e.target.value);
  };
  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, { title: newTodo, id: todos.length, status: 'todo' }]);
  };

  useEffect(() => {
    console.log("새로운 내용이 렌더링됐네요", todos);
  }, [todos]);

  return (
    <>
      <h1>todo 애플리케이션</h1>

      <form action="">
        <input type="text" name="" onChange={changeInputData} />
        <button onClick={addTodo}>할일추가</button>
      </form>

      <List loading={loading} todos={todos} />
    </>
  );
}

export default App;
