import React from 'react';
import propTypes from 'prop-types';

const SearchBar = props => (
  <div className="searchBar">
    <input
      id="location"
      type="text"
      placeholder="location"
      onChange={({ target }) => props.setLocation(target.value)}
      onKeyUp={({ key }) => key === 'Enter' ?  props.getEntries(props) : 1}
    />
    <input
      id="category"
      type="text"
      placeholder="category"
      onChange={({ target }) => props.setCategory(target.value)}
      onKeyUp={({ key }) => key === 'Enter' ?  props.getEntries(props) : 1}
    />
    <button className="searchSubmit" onClick={() => props.getEntries(props)}>Search</button>
  </div>
);

SearchBar.propTypes = {
  onSubmit: propTypes.func.isRequired,
  onEnter: propTypes.func.isRequired,
  setLocation: propTypes.func.isRequired,
  setCategory: propTypes.func.isRequired,
};


export default SearchBar;
