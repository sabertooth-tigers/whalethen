import React from 'react';
import propTypes from 'prop-types';

const EndDateBox = ({ onInputChange, onEnter }) => (
  <div className="inputBox label">
    <label className="endDate" htmlFor="endDate">
      End Date:
      <input
        id="endDate"
        type="date"
        name="endDate"
        onChange={({ target }) => onInputChange(target.name, target.value)}
        placeholder="enter an end date"
      />
    </label>
  </div>
);

EndDateBox.propTypes = {
  onInput: propTypes.func.isRequired,
  onEnter: propTypes.func.isRequired,
};

export default EndDateBox;
