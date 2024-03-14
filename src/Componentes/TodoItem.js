import React from 'react';
import {CompleteIcon} from './CompleteIcon';
import {DeleteIcon} from './DeleteIcon';
// import './TodoCounter.css';
import '../CreateTodoButton/TodoCounter.css';


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