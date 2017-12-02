import React from 'react';
import propTypes from 'prop-types';

const SearchBar = (props) => {
  const { setLocation, getEntries, setCategory } = props;
  const isEnter = (key) => {
    if (key === 'Enter') {
      props.getEntries(props);
    }
  };

  return (
    <div className="searchBar">
      <input
        id="location"
        type="text"
        placeholder="location"
        onChange={({ target }) => setLocation(target.value)}
        onKeyUp={({ key }) => isEnter(key)}
      />
      <input
        id="category"
        type="text"
        placeholder="category"
        onChange={({ target }) => setCategory(target.value)}
        onKeyUp={({ key }) => isEnter(key)}
      />
      <button className="searchSubmit" onClick={() => getEntries(props)}>Search</button>

    </div>);
};

SearchBar.propTypes = {
  getEntries: propTypes.func.isRequired,
  setLocation: propTypes.func.isRequired,
  setCategory: propTypes.func.isRequired,
};


export default SearchBar;
