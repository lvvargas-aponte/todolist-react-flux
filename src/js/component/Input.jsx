import React, { useContext } from 'react';
import { Context } from "../store/appContext.js";


const Input = () => {

    const { store, actions } = useContext(Context);


    return (
        <input type="text" placeholder="Enter your todo(s) and click Update Todos for todo(s) to be added" value={store.inputValue} onChange={actions.handleInputChange} onKeyDown={actions.handleInputKeyDown} />

    )
}

export default Input;