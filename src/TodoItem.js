import React from 'react';
import {CompleteIcon} from './CompleteIcon';
import {DeleteIcon} from './DeleteIcon';
import './TodoCounter.css';

function TodoItem(props){
    return(
        <li className="TodoBlock">
        <CompleteIcon
        completed={props.completed}
        onComplete={props.complete}
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