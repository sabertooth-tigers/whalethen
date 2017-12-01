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
    createEvent,
    createEventDay,
    addNewEvent,
  } = props;

  const daysArr = ['Choose Day'];
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
          />
        </span>
        <span>
          <input
            id="createEventAddress"
            type="text"
            name="createEventAddress"
            placeholder="enter an address"
            onChange={({ target }) => setNewEventAddress(target.value)}
            onKeyUp={event => addNewEvent(event, {
              name: newEvent,
              address: newEventAddress,
              vote: 0,
            }, createEventDay)}
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
            onClick={() => createEvent()}
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
