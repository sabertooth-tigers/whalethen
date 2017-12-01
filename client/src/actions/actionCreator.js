import axios from 'axios';
import moment from 'moment';
// ADD_EVENT
export const addEvent = event => ({
  type: 'ADD_EVENT',
  event,
});
// REMOVE_EVENT
export const removeEvent = event => ({
  type: 'REMOVE_EVENT',
  event,
});
// INCREMENT_VOTE
export const incrementVote = () => ({
  type: 'INCREMENT_VOTE',
});
// DECREMENT_VOTE
export const decrementVote = () => ({
  type: 'DECREMENT_VOTE',
});

export const onInputChange = (name, value) => ({
  type: 'ON_INPUT_CHANGE',
  name,
  value,
});

export const setId = id => ({
  type: 'SET_ID',
  id,
});

export const setDays = days => ({
  type: 'SET_DAYS',
  days,
});

export const onCreateDaySelect = days => ({
  type: 'CREATE_DAY_SELECT',
  days,
});

export const setTimelineData = data => ({
  type: 'SET_TIMELINE_DATA',
  data,
});

export const setNewEvent = event => ({
  type: 'SET_NEW_EVENT',
  event,
});

export const setNewEventAddress = address => ({
  type: 'SET_NEW_EVENT_ADDRESS',
  address,
});

export const saveTimeline = (event, getTrip) => ({
  type: 'SAVE_TIMELINE',
  event,
  getTrip,
});

export const getTrip = timelineId => dispatch =>
  axios(`/timeline/${timelineId}`)
    .then(({ data }) => dispatch({
      type: 'GET_TRIP',
      data,
    }))
    .catch(({ error }) => dispatch({
      type: 'GET_TRIP_FAILURE',
      error,
    }));

export const saveEvent = (event, { timelineId, timelineName, createEventDay }) => dispatch =>
  axios.post('/entry', {
    event,
    timelineId,
    day: Number(createEventDay.slice(4)),
    timelineName,
  })
    .then(() => getTrip(timelineId))
    .then(dispatch)
    .catch(err => console.error('add event error: ', err));

export const savingTimeline = ({ timelineName, startDate, endDate }, timelineId) => dispatch =>
  axios.post('/timeline', {
    timelineId,
    timelineName,
    numberOfDays: moment(endDate).diff(moment(startDate), 'days'),
  })
    .then(() => setDays(moment(endDate).diff(moment(startDate), 'days')))
    .then(() => setId(timelineId))
    .then(() => getTrip(timelineId))
    .then(dispatch)
    .catch(err => console.error('error in submit ', err));
