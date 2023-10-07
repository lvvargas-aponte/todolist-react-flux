//import react into the bundle
import React from 'react'
import {createRoot} from 'react-dom/client'

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import TodoList from './component/TodoList.jsx';

//
const root = createRoot(document.querySelector("#app"))

//render your react application
root.render(<TodoList/>)

