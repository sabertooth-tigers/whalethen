import React from 'react';
import propTypes from 'prop-types';

const TimelineLookUp = (props) => {
  const {
    getTrip,
    onLookupEnter,
    setId,
  } = props;

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
        onKeyUp={event => onLookupEnter(event)}
      />
      <button className="searchSubmit" onClick={getTrip}>Search ID</button>
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
