import React from 'react'
import './Item.css';

const Item = ({ todo, changeTodoStatus }) => {
    const toggleItem = ({ target }) => {
        const id = target.dataset.id;
        changeTodoStatus(id);
    }
    const itemClassName = todo.status === 'done' ? 'done' : '';

    return (
        <li data-id={todo.id} className={itemClassName} onClick={toggleItem}>
            {todo.title}
        </li>
    )
}

export default Item
