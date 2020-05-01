import React from 'react'
import TodoStore from './TodoStore'
import List from './List';
import Header from './Header';
import Form from './Form';

const App = () => {
    return (
        <TodoStore>
            <Header />
            <Form />
            <List />
        </TodoStore>
    )
}

export default App
