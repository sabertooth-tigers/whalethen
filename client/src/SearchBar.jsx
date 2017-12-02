import React from 'react';
import propTypes from 'prop-types';

const SearchBar = props => (
  <div className="searchBar">
    <input
      id="location"
      type="text"
      placeholder="location"
<<<<<<< HEAD
      onChange={({ target }) => props.setLocation(target.value)}
      onKeyUp={({ key }) => key === 'Enter' ?  props.getEntries(props) : 1}
=======
      onChange={props.handleLoc}
      onKeyUp={event => props.onEnter(event)}
>>>>>>> Starting documentation for our actioncreateor file
    />
    <input
      id="category"
      type="text"
      placeholder="category"
<<<<<<< HEAD
      onChange={({ target }) => props.setCategory(target.value)}
      onKeyUp={({ key }) => key === 'Enter' ?  props.getEntries(props) : 1}
    />
    <button className="searchSubmit" onClick={() => props.getEntries(props)}>Search</button>
=======
      onChange={props.handleCat}
      onKeyUp={event => props.onEnter(event)}
    />
    <button className="searchSubmit" onClick={props.onSubmit}>Search</button>
>>>>>>> Starting documentation for our actioncreateor file
  </div>
);

SearchBar.propTypes = {
  onSubmit: propTypes.func.isRequired,
  onEnter: propTypes.func.isRequired,
<<<<<<< HEAD
  setLocation: propTypes.func.isRequired,
  setCategory: propTypes.func.isRequired,
=======
  handleLoc: propTypes.func.isRequired,
  handleCat: propTypes.func.isRequired,
>>>>>>> Starting documentation for our actioncreateor file
};


export default SearchBar;
