import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import {CreateTodoButton} from './CreateTodoButton';
import './App.css';
import React from 'react';

const defaultTodos = [
  { text: 'Cortar Cebolla', completed: true},
  { text: 'Tomar el ', completed: false },
  { text: 'Tomar el curso ', completed: false },
  { text: 'Tomar el curso de reeacr', completed: false },
];

function App() {
  return (
    <>
      <TodoCounter completed={16} total={25}/>
      <TodoSearch/>
      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem key={todo.text} 
          text={todo.text}
          completed={todo.completed}
          />
        ))}
      </TodoList>
  <CreateTodoButton />
  </>
  );
}



export default App;
