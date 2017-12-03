import React from 'react';
import propTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import { indigo500, teal500 } from 'material-ui/styles/colors';

const TimelineLookUp = (props) => {
  const {
    getTrip,
    setId,
    timelineId,
  } = props;

  const isEnter = (key, value) => {
    if (key === 'Enter') {
      getTrip(value);
    }
  };

  const styles = {
    errorStyle: {
      color: indigo500,
    },
    underlineStyle: {
      borderColor: indigo500,
    },
    floatingLabelStyle: {
      color: indigo500,
    },
    floatingLabelFocusStyle: {
      color: teal500,
    },
  };

  return (
    <div className="inputBox">
      <MuiThemeProvider>
        <TextField
          id="timelineLookUp"
          type="text"
          name="timelineLookUp"
          onChange={({ target }) => setId(target.value)}
          floatingLabelText="Enter a previous timeline ID"
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
        />
      </MuiThemeProvider>
      <label className="timelineLookUp label" htmlFor="timelineLookUp">
        <button className="searchSubmit" onClick={() => getTrip(timelineId)}>Search ID</button>
      </label>
    </div>
  );
};

TimelineLookUp.propTypes = {
  setId: propTypes.func.isRequired,
  getTrip: propTypes.func.isRequired,
  timelineId: propTypes.string.isRequired,
};

export default TimelineLookUp;
