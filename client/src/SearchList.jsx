import React from 'react';
import propTypes from 'prop-types';
import SearchEntry from './SearchEntry';


const SearchList = props => (
  <div className="searchList">
    {props.searchList.map((event, index) => (
      <SearchEntry
        {...props}
        key={index}
        event={event}
      />
      ))}
  </div>
);

SearchList.propTypes = {
  searchList: propTypes.instanceOf(Array).isRequired,
};

export default SearchList;
