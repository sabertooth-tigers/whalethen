import React from 'react';
import propTypes from 'prop-types';

const TimelineInputBox = (props) => (
  <div className="inputBox label">
    <label className="timelineName" htmlFor="timelineName">
    Timeline Name:
    <input
      id="timelineName"
      type="text"
      name="timelineName"
      onChange={({ target }) => props.onInputChange(target.name, target.value)}
      placeholder="enter a name"
      onKeyUp={event => props.onSubmit(event, props, props.getTrip)}
    />
    </label>
  </div>
);

TimelineInputBox.propTypes = {
  onInput: propTypes.func.isRequired,
  onEnter: propTypes.func.isRequired,
};

export default TimelineInputBox;
