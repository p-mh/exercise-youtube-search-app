import React, { Component } from 'react';

import './searchbar.css';

function SearchBar(props) {
  return (
    <div className="searchbar">
      <i className="fas fa-search" />
      <input
        type="text"
        placeholder="Search"
        onChange={props.searchFunction}
        value={props.searchValue}
        onKeyDown={props.keyUp}
      />
      {/* <button onClick={props.searchFunctionClick}>Search</button> */}
    </div>
  );
}

export default SearchBar;
