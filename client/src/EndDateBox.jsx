import React from 'react';
import propTypes from 'prop-types';
import shortid from 'shortid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import NotificationEventAvailable from 'material-ui/svg-icons/notification/event-available';

const EndDateBox = (props) => {
  return (
    <div className="inputBox label">
      <MuiThemeProvider>
        <RaisedButton
          label="Create"
          backgroundColor="#009688"
          labelColor="#FFF"
          icon={<NotificationEventAvailable />}
          onClick={() => props.savingTimelineRange(props, shortid.generate())}
        />
      </MuiThemeProvider>
    </div>
  );
}

export default EndDateBox;
