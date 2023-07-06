import React from 'react';
import './TodoCounter.css';

function TodoList({children}){
    return(
        <section>
            {children}
        </section>
    
    );
}

export  {TodoList};