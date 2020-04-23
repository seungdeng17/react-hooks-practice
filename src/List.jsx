import React from 'react';

function List({ todos, loading }) {
    let todoList = <div>loading...</div>
    if (!loading) todoList = todos.map(todo => <li key={todo.id}>{todo.title}</li>);
    return (
        <ul>
            {todoList}
        </ul>
    );
}

export default List;