import React, { useContext } from 'react';
import './Header.css';
import { TodoContext } from './TodoStore';

function Header() {
    const { todos } = useContext(TodoContext);
    const count = todos.filter(todo => todo.status === 'todo').length

    return (
        <>
            <h1>HELLO TODO 애플리케이션</h1>
            <div className="countInfo">해야할 일 ! {count}개가 있습니다</div>
        </>
    );
}

export default Header;