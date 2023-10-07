import React, { useContext, useState } from 'react';
import Tasks from './Tasks.jsx';
import Input from './Input.jsx';
import Counter from './Counter.jsx'

import injectContext, { Context } from "../store/appContext.js";


const TodoList = () => {

    const { store } = useContext(Context);




    return (
        <>
            <h1>{store.title}</h1>
            <div className="container">
                <Input />
                <Tasks />
                <Counter />
            </div>
        </>
    )

}

export default injectContext(TodoList);