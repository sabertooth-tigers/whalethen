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
    />
    </label>
  </div>
);

TimelineInputBox.propTypes = {
  onInputChange: propTypes.func.isRequired,
};

export default TimelineInputBox;
