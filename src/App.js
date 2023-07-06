import React from 'react';
import {TodoCounter} from './TodoCounter';
import {TodoSearch} from './TodoSearch';
import {TodoList} from './TodoList';
import {TodoItem} from './TodoItem';
import {CreateTodoButton} from './CreateTodoButton' 

const todos=[
  { text: 'cortar cebolla', completed:true},
  { text: 'tomar el curso intro React', completed:false},
  { text: 'llorar con la llorona', completed:false},
  { text: 'Estudiar mas', completed:false},
];

function App() {
  return (
    <React.Fragment>
    <TodoCounter completed={16} total={20}/>

    <TodoSearch />


    <TodoList>
      {todos.map(todo =>(<TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>))}
    <TodoItem />

      </TodoList>

    <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
