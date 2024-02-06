import React from 'react';
import './TodoCounter.css';

function TodoSearch({SearchValue,setSearchValue}){
    
    return(
        < input className='Search' placeholder="Cebolla" value={SearchValue} onChange={(event)=>{
            setSearchValue(event.target.value);
        
        }} />
    );
}

export  {TodoSearch};