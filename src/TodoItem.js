import React from 'react';
import './TodoCounter.css';

function TodoItem(props){
    return(
        <li className="TodoBlock">
            <span className={`Icon Icon-check ${props.completed && "Icon-check--completed"}`} onClick={props.onComplete}>✅</span>
                <p className={`TodoBlockM ${props.completed && "TodoBlockM--complete"}`}>{props.text}</p>
                <span className="Icon Icon-delete" onClick={props.onDelete} >❌</span>
                {props.completed}
        </li>

);
}

export  {TodoItem};