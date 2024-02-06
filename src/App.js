import React from 'react';
import {TodoCounter} from './TodoCounter';
import {TodoSearch} from './TodoSearch';
import {TodoList} from './TodoList';
import {TodoItem} from './TodoItem';
import {CreateTodoButton} from './CreateTodoButton' 

const Dftodos=[
  { text: 'cortar cebolla', completed:true},
  { text: 'tomar el curso intro React', completed:false},
  { text: 'llorar con la llorona', completed:false},
  { text: 'Estudiar mas', completed:false},
  { text: 'Aprender Japones', completed:true},
];

function App() {
  const [SearchValue,setSearchValue]= React.useState('');
  const [todos,setTodos]= React.useState(Dftodos);
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
    setTodos(newTodos);
  }

  const deleteTodo=(text)=>{
    const newTodos= [...todos];
    const TodoIndex= newTodos.findIndex((todo)=> todo.text===text);
    newTodos.splice(TodoIndex,1);
    setTodos(newTodos);
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
