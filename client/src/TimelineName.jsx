import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import { indigo500, teal500 } from 'material-ui/styles/colors';
import propTypes from 'prop-types';

const styles = {
  errorStyle: {
    color: indigo500,
  },
  underlineStyle: {
    borderColor: indigo500,
  },
  floatingLabelStyle: {
    color: teal500,
  },
  floatingLabelFocusStyle: {
    color: teal500,
  },
};

const TimelineName = ({ onInputChange }) => {
  return (
    <div>
      <MuiThemeProvider>
        <TextField
          id="timelineName"
          type="text"
          name="timelineName"
          onChange={({ target }) => onInputChange(target.name, target.value)}
          floatingLabelText="Enter a Timeline Name"
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
        />
      </MuiThemeProvider>
    </div>
  );
};

TimelineName.propTypes = {
  onInputChange: propTypes.func.isRequired,
};

export default TimelineName;