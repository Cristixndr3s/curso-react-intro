import React from 'react';
import './TodoSearch.css';

function TodoSearch () {
  const [searchValue, setSearchValue] = React.useState('');

  console.log('los usuarios buscan todos de' + searchValue)

  return (
    <input 
      className="TodoSearch" 
      placeholder="cortar cebolla"
      value={searchValue}  // Cambiar setSearchValue por searchValue
      onChange={(event) =>{
        setSearchValue(event.target.value);
      }} 
    />
  );
}

export { TodoSearch };