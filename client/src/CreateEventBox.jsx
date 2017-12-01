import React from 'react';
import propTypes from 'prop-types';

const CreateEventBox = (props) => {
  const {
    numberOfDays,
    onCreateDaySelect,
    setNewEvent,
    setNewEventAddress,
    newEvent,
    newEventAddress,
    createEventDay,
    addNewEvent,
    getTrip,
    saveEvent,
  } = props;

  const daysArr = ['Choose Day'];
  const isEnter = (key, value) => key === 'Enter' ? getTrip(value) : 1;

  for (let i = 1; i <= numberOfDays; i += 1) {
    daysArr.push(`Day ${i}`);
  }

  return (
    <div className="container createBox label">
      <label className="createEvent" htmlFor="createEvent">
        <span>
          <input
            id="createEventName"
            type="text"
            name="createEventName"
            placeholder="enter an event"
            onChange={({ target }) => setNewEvent(target.value)}
            onKeyUp={({ key, target }) => isEnter(key, target.value)}
          />
        </span>
        <span>
          <input
            id="createEventAddress"
            type="text"
            name="createEventAddress"
            placeholder="enter an address"
            onChange={({ target }) => setNewEventAddress(target.value)}
            onKeyUp={({ key, target }) => isEnter(key, target.value)}
          />
        </span>

        <span>
          <select className="selectDays" onChange={({ target }) => onCreateDaySelect(target.value )}>
            {daysArr.map(day => <option value={day} key={day}>{day}</option>)}
          </select>
        </span>

        <span>
          <button
            className="addEvent"
            onClick={() => saveEvent({
              name: newEvent,
              address: newEventAddress,
              vote: 0,
            }, props)}
          >
                Create Event
          </button>
        </span>
      </label>
    </div>
  );
};

CreateEventBox.propTypes = {
  numberOfDays: propTypes.number.isRequired,
  onCreateDaySelect: propTypes.func.isRequired,
  onCreateEnter: propTypes.func.isRequired,
  handleNewEvent: propTypes.func.isRequired,
  handleNewAddress: propTypes.func.isRequired,
  createEvent: propTypes.func.isRequired,
};

export default CreateEventBox;
