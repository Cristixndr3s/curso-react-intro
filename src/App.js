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
  { text: 'new', completed: false },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');
  console.log('los usuarios buscan todos de' + searchValue)

  const completeTodos = todos.filter(
    todo => !!todo.completed).length;
  const totalTodos = todos.length;

  return (
    <>
      <TodoCounter 
      completed={completeTodos} 
      total={totalTodos}
      />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
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
