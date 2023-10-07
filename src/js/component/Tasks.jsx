import React, { useContext } from 'react';
import { Context } from '../store/appContext';

const Tasks = () => {

    const { store, actions } = useContext(Context);

    return (
        <>
            <div className="lines"></div>
            <ul className="todosBody">
                {store.todolist.map((todo, index) => {
                    return <li key={index} className="todos">{todo.label} <span className="delete-icon float-end" onClick={() => actions.deleteTodo(index)}>&#x2716;</span></li>
                })}
            </ul>
        </>
    )
}
export default Tasks;