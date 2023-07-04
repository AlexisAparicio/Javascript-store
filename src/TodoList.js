import React from 'react';
import './TodoCounter.css';

function TodoList(props){
    return(
        <section>
            {props.children}
        </section>
    
    );
}

export  {TodoList};