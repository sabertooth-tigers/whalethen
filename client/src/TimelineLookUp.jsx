import React from 'react';
import propTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import { indigo500, teal500 } from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import ActionEvent from 'material-ui/svg-icons/action/event';

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
        />
        <RaisedButton
          label="Load"
          icon={<ActionEvent />}
          onClick={() => getTrip(timelineId)}
        />
      </MuiThemeProvider>
    </div>
  );
};

TimelineLookUp.propTypes = {
  setId: propTypes.func.isRequired,
  getTrip: propTypes.func.isRequired,
  timelineId: propTypes.string.isRequired,
};

export default TimelineLookUp;
