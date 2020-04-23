import React from 'react';
import './Header.css';

function Header({ todos }) {
    const count = todos.filter(todo => todo.status === 'todo').length;

    return (
        <div>
            <h1>HELLO TODO 애플리케이션</h1>
            <div className="countInfo">해야할 일 ! {count}개가 있습니다</div>
        </div>
    );
}

export default Header;