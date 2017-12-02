import React from 'react';
import propTypes from 'prop-types';

const SearchBar = props => (
  <div className="searchBar">
    <input
      id="location"
      type="text"
      placeholder="location"
      onChange={({ target }) => props.setLocation(target.value)}
      onKeyUp={event => props.onEnter(event)}
    />
    <input
      id="category"
      type="text"
      placeholder="category"
      onChange={({ target }) => props.setCategory(target.value)}
      onKeyUp={event => props.onEnter(event)}
    />
    <button className="searchSubmit" onClick={props.onSubmit}>Search</button>
  </div>
);

SearchBar.propTypes = {
  onSubmit: propTypes.func.isRequired,
  onEnter: propTypes.func.isRequired,
  setLocation: propTypes.func.isRequired,
  setCategory: propTypes.func.isRequired,
};


export default SearchBar;
