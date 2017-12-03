import React from 'react';
import propTypes from 'prop-types';
import shortid from 'shortid';

const EndDateBox = (props) => {
  return (
    <div className="inputBox label">
      <button
        className="scheduleSubmit"
        onClick={() => props.savingTimelineRange(props, shortid.generate())}
      >
        New Schedule
      </button>
    </div>
  );
}

export default EndDateBox;
