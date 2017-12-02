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

/**
 * getTrip is a query to the mongoDB and find a user created timelineId
 * @param  {[number]} timelineId Is a unique ID to query the DB and return the saved timeline
 * @return {object} On return data will be set to the appState reducer and set the state
 */

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

/**
 * saveEvent takes a user entry and will uses axios to make a post to the server
 * the endpoint '/entry' handled by the server to save the information to the
 * database
 * @param  {[object]} event          [description]
 * @param  {[number]} timelineId     This will be a generated shortId to reference
 *                                   later by the user.
 * @param  {[string]} timelineName   User created timeline with a name to save to the DB.
 * @param  {[array]} createEventDay Specefic index for an event to be saved to
 */

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

// ================================================
// SEARCH ACTIONS
// ================================================

export const setCategory = category => ({
  type: 'SET_CATEGORY',
  category,
});

export const setLocation = location => ({
  type: 'SET_LOCATION',
  location,
});

export const getEntries = ({ termBar, locationSearch }) => dispatch =>
  axios.get('/search', { params: { category: termBar, location: locationSearch } })
    .then(({ data }) => (
      dispatch({
        type: 'GET_ENTRIES',
        data,
      })))
    .catch(err => console.error(err));

// ==============================================
// EVENT ACTIONS
// ==============================================

export const upvote = (id) => ({
  type: 'INCREMENT_VOTE',
  id,
});

export const downvote = (id) => ({
  type: 'DECREMENT_VOTE',
  id,
});

export const setVote = (vote, id) => ({
  type: 'SET_VOTE',
  vote,
  id,
});

export const saveVote = (props, count) => dispatch =>
  axios.put('/entry', {
    timelineId: props.timelineId,
    day: props.day.day,
    eventId: props.event._id,
    votes: props.vote + count,
  })
    .then(console.log);
