import React from 'react';
import propTypes from 'prop-types';

const TimelineInputBox = ({ onInputChange }) => (
  <div className="inputBox label">
    <label className="timelineName" htmlFor="timelineName">
    Timeline Name:
    <input
      id="timelineName"
      type="text"
      name="timelineName"
      onChange={({ target }) => onInputChange(target.name, target.value)}
      placeholder="enter a name"
    />
    </label>
  </div>
);

TimelineInputBox.propTypes = {
  onInputChange: propTypes.func.isRequired,
};

export default TimelineInputBox;
