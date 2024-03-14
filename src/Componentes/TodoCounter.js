import React from 'react';
// import './TodoCounter.css';
// import '../src/CreateTodoButton/TodoCounter.css';
import '../CreateTodoButton/TodoCounter.css';

function TodoCounter({total,completed}){
    return(
        <h2 className="TodoCounter">Has completado {completed}  de {total} Todos</h2>
    );
}

export  {TodoCounter};