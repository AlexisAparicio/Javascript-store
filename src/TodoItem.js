import React from 'react';
import {CompleteIcon} from './Componentes/CompleteIcon';
import {DeleteIcon} from './Componentes/DeleteIcon';
// import './TodoCounter.css';
import '../src/CreateTodoButton/TodoCounter.css';


function TodoItem(props){
    return(
        <li className="TodoBlock">
        <CompleteIcon
        completed={props.completed}
        onComplete={props.onComplete}
        />

        <p className={`TodoBlockM ${props.completed && "TodoBlockM--complete"}`}>{props.text}
        </p>
        <DeleteIcon
        onDelete={props.onDelete}
        />
        </li>

);
}

export  {TodoItem};