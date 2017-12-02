import React from 'react';
import propTypes from 'prop-types';
import SearchEntry from './SearchEntry';
import _ from 'lodash';

const SearchList = props => (
  <div className="searchList">
    {_.map(props.searchList, (event, index) => (
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
