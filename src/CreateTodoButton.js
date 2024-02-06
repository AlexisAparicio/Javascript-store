import React from 'react';
import './TodoCounter.css';

function CreateTodoButton(){
    return(
        <button class="TdBoton" onClick={()=>console.log("le diste click")} >+</button>
    );
}

export  {CreateTodoButton};
