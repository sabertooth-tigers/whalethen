import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import propTypes from 'prop-types';

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
          className="timeline-name-input"
        />
      </MuiThemeProvider>
    </div>
  );
};

TimelineName.propTypes = {
  onInputChange: propTypes.func.isRequired,
};

export default TimelineName;