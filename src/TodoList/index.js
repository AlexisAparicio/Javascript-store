import React from 'react';
import './TodoList.css';

function TodoList({children}){
    return(
        <section className="Board">
            {children}
        </section>
    
    );
}

export  {TodoList};