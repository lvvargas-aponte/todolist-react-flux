import React, { useContext } from 'react';
import { Context } from '../store/appContext';


const Counter = () => {

  const { store, action } = useContext(Context);

  return (
    <div className="counter text-center mb-3">
      <span>Tasks: {store.todolist.length}</span>
    </div>
  )
}

export default Counter;