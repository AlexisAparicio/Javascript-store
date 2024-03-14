import React from 'react';
import {AppUI} from './AppUI';
import {useLocalStorage} from './useLocalStorage';

function App() {  
  const [todos,saveTodos]= useLocalStorage('TODOS_V1',[]);
  const [SearchValue,setSearchValue]= React.useState('');

  const completedTodos= todos.filter(todo => !!todo.completed).length;
  const totalTodos= todos.length;

  const searchedTodos= todos.filter((todo) =>{
    const todoText=todo.text.toLowerCase();
    const SearchText=SearchValue.toLowerCase();
  return todoText.includes(SearchText);
  });


  const completeTodo=(text)=>{
    const newTodos= [...todos];
    const TodoIndex= newTodos.findIndex((todo)=> todo.text===text);
    newTodos[TodoIndex].completed=true;
    saveTodos(newTodos);
  }

  const deleteTodo=(text)=>{
    const newTodos= [...todos];
    const TodoIndex= newTodos.findIndex((todo)=> todo.text===text);
    newTodos.splice(TodoIndex,1);
    saveTodos(newTodos);
  }
  return(
    <AppUI
        setSearchValue={setSearchValue}
        completeTodo={completeTodo}
        totalTodos={totalTodos}
        searchedTodos={searchedTodos}
        SearchValue={SearchValue}
        deleteTodo={deleteTodo}
        completedTodos={completedTodos}
      
    />
  );
}

export default App;
