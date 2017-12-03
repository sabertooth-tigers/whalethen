import React from 'react';
import propTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';

const CreateEventBox = (props) => {
  const {
    numberOfDays,
    onCreateDaySelect,
    setNewEvent,
    setNewEventAddress,
    newEvent,
    newEventAddress,
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
          <MuiThemeProvider>
            <TextField
              id="createEventName"
              type="text"
              name="createEventName"
              onChange={({ target }) => setNewEvent(target.value)}
              onKeyUp={({ key, target }) => isEnter(key, target.value)}
              hintText="Add an event to the timeline"
              floatingLabelText="Event Title"
              floatingLabelFixed={true}
            />
            <TextField
              id="createEventAddress"
              type="text"
              name="createEventAddress"
              onChange={({ target }) => setNewEventAddress(target.value)}
              onKeyUp={({ key, target }) => isEnter(key, target.value)}
              hintText="Description, address, etc..."
              floatingLabelText="Event Details"
              floatingLabelFixed={true}
            />
          </MuiThemeProvider>
        </span>

        <span>
          <select
            className="selectDays"
            onChange={({ target }) => onCreateDaySelect(target.value)}
          >
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
  getTrip: propTypes.func.isRequired,
  setNewEvent: propTypes.func.isRequired,
  setNewEventAddress: propTypes.func.isRequired,
  saveEvent: propTypes.func.isRequired,
  newEvent: propTypes.string.isRequired,
  newEventAddress: propTypes.string.isRequired,
};

export default CreateEventBox;
