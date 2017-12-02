import React from 'react';
import propTypes from 'prop-types';

const StartDateBox = ({ onInputChange, onEnter }) => (
  <div className="inputBox label">
    <label className="startDate" htmlFor="startDate">
    Start Date:
    <input
      id="startDate"
      type="date"
      name="startDate"
      onChange={({ target }) => onInputChange(target.name, target.value)}
      placeholder="enter a start date"
    />
    </label>
  </div>
);

StartDateBox.propTypes = {
  onInput: propTypes.func.isRequired,
  onEnter: propTypes.func.isRequired,
};


export default StartDateBox;
