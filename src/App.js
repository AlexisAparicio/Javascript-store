import React from 'react';
import {TodoCounter} from './TodoCounter';
import {TodoSearch} from './TodoSearch';
import {TodoList} from './TodoList';
import {TodoItem} from './TodoItem';
import {CreateTodoButton} from './CreateTodoButton' 

// const Dftodos=[
//   { text: 'cortar cebolla', completed:true},
//   { text: 'tomar el curso intro React', completed:false},
//   { text: 'llorar con la llorona', completed:false},
//   { text: 'Estudiar mas', completed:false},
//   { text: 'Aprender Japones', completed:false},
// ];
// localStorage.setItem('TODOS_V1',JSON.stringify(Dftodos);
// localStorage.removeItem('TODOS_VI');

function useLocalStorage(itemName, initialValue) {

  const localStorageItem= localStorage.getItem(itemName);
  let parsedItem;

  if(!localStorageItem){
  localStorage.setItem(itemName,JSON.stringify(initialValue));;
  parsedItem=initialValue;
  } else {
    parsedItem= JSON.parse(localStorageItem);
  }

  const [item,setItem] = React.useState(parsedItem)
  const saveItem=(newItem)=>{
    localStorage.setItem(itemName,JSON.stringify(newItem));
    setItem(newItem);
  }

  return [item,saveItem];

}

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

export default App;
