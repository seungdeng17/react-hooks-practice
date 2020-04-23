import React from 'react';

function List({ todos }) {
    const todoList = todos.map((todo, idx) => <li key={idx}>{todo}</li>);
    return (
        <ul>
            {todoList}
        </ul>
    );
}

export default List;