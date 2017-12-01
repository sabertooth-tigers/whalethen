import React from 'react';
import propTypes from 'prop-types';
import shortid from 'shortid';

const EndDateBox = props => (
  <div className="inputBox label">
    <label className="endDate" htmlFor="endDate">
      End Date:
      <input
        id="endDate"
        type="date"
        name="endDate"
        onChange={({ target }) => props.onInputChange(target.name, target.value)}
        placeholder="enter an end date"
      />
    </label>
    <button className="scheduleSubmit" onClick={() => props.savingTimeline(props, shortid.generate())}>
      New Schedule
    </button>
  </div>
);

EndDateBox.propTypes = {
  onInput: propTypes.func.isRequired,
  onEnter: propTypes.func.isRequired,
};

export default EndDateBox;
