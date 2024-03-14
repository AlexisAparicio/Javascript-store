import React from 'react';
import {TodoCounter} from '../Componentes/TodoCounter';
import {TodoSearch} from '../Componentes/TodoSearch';
import {TodoList} from '../TodoList';
import {TodoItem} from '../Componentes/TodoItem';
import {CreateTodoButton} from '../CreateTodoButton';


function AppUI({
    completeTodo,
    totalTodos,
    searchedTodos,SearchValue,deleteTodo,setSearchValue,completedTodos
  }){
    return (
        <React.Fragment>
        <TodoCounter completed={completedTodos} total={totalTodos}/>
    
        <TodoSearch
        searchValue={SearchValue}
        setSearchValue={setSearchValue}
        />
    
    
        <TodoList>
          {searchedTodos.map(todo =>(<TodoItem 
          key={todo.text} 
          text={todo.text} 
          completed={todo.completed}
          onComplete={()=>completeTodo(todo.text)}
          onDelete={()=>deleteTodo(todo.text)}
          />))}
          
        <TodoItem />
          </TodoList>
    
        <CreateTodoButton />
        </React.Fragment>
      );
}
export {AppUI};