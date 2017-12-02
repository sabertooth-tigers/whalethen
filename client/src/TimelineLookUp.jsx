import React from 'react';
import propTypes from 'prop-types';

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

  return (
    <div className="inputBox">
      <label className="timelineLookUp label" htmlFor="timelineLookUp">
        Timeline Look Up:
      <input
        id="timelineLookUp"
        type="text"
        name="timelineLookUp"
        onChange={({ target }) => setId(target.value)}
        placeholder="enter ID"
        onKeyUp={({ key, target }) => isEnter(key, target.value)}
      />
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
