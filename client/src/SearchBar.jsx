import React from 'react';
import propTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';

const SearchBar = (props) => {
  const { setLocation, getEntries, setCategory } = props;
  const isEnter = (key) => {
    if (key === 'Enter') {
      props.getEntries(props);
    }
  };

  return (
    <div className="searchBar">
      Search for things to do
      <MuiThemeProvider>
        <TextField
          id="location"
          type="text"
          onChange={({ target }) => setLocation(target.value)}
          onKeyUp={({ key }) => isEnter(key)}
          hintText="City or neighborhood"
          floatingLabelText="Location"
          floatingLabelFixed={true}
        />
        <TextField
          id="category"
          type="text"
          onChange={({ target }) => setCategory(target.value)}
          onKeyUp={({ key }) => isEnter(key)}
          hintText="Parks, restaurants, concerts, etc."
          floatingLabelText="Category"
          floatingLabelFixed={true}
        />
      </MuiThemeProvider>
      <button className="searchSubmit" onClick={() => getEntries(props)}>Search</button>

    </div>);
};


SearchBar.propTypes = {
  getEntries: propTypes.func.isRequired,
  setLocation: propTypes.func.isRequired,
  setCategory: propTypes.func.isRequired,

};


export default SearchBar;
