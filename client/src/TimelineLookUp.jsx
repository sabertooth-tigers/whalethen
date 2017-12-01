import React from 'react';
import propTypes from 'prop-types';

const TimelineLookUp = (props) => {
  const {
    getTrip,
    setId,
    timelineId
  } = props;
  let id;

  const isEnter = (key, value) => {
    id = value;
    key === 'Enter' ? getTrip(value) : 1
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
  handleID: propTypes.func.isRequired,
  handleName: propTypes.func.isRequired,
  onLookupEnter: propTypes.func.isRequired,
  getTrip: propTypes.func.isRequired,
};

export default TimelineLookUp;
