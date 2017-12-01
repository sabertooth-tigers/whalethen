import { combineReducers } from 'redux';
import shortid from 'shortid';
import axios from 'axios';
import moment from 'moment';
// import { routerReducer } from 'react-router-redux';
import voting from './voting';
import events from './events';


const saveTimeline = function (event, props, getTrip) {
  if (event && event.key !== 'Enter') { return; }

  const {
    startDate,
    endDate,
    timelineName,
  } = props;

  const start = moment(startDate);
  const end = moment(endDate);
  const timelineId = shortid.generate();
  const numberOfDays = end.diff(start, 'days');

  axios.post('/timeline', {
    timelineId,
    timelineName,
    numberOfDays,
  })
    .then(() => getTrip())
    .catch(err => console.error('error in submit ', err));

  return ({
    timelineId,
    numberOfDays,
  });
};

const addNewEvent = function(event, selectedDay, getTrip, props) {
  const { timelineId, timelineName } = props;
  const day = Number(selectedDay.slice(4));

  axios.post('/entry', {
    event,
    timelineId,
    day,
    timelineName,
  })
    .then(() => getTrip())
    .catch(err => console.error('add event error: ', err));
};

const appState = (state = {}, action) => {
  switch (action.type) {
    case 'ON_INPUT_CHANGE':
      return {
        ...state,
        [action.name]: action.value,
      };
    case 'SET_TIMELINE_DATA':
      return {
        ...state,
        timelineData: action.data,
      };
    case 'SET_ID':
      return {
        ...state,
        timelineId: action.id,
      };
    case 'SET_DAYS':
      return {
        ...state,
        numberOfDays: action.days,
      };
    case 'CREATE_DAY_SELECT':
      return {
        ...state,
        createEventDay: action.days,
      };
    case 'SET_NEW_EVENT':
      return {
        ...state,
        newEvent: action.event,
      };
    case 'SET_NEW_EVENT_ADDRESS':
      return {
        ...state,
        newEventAddress: action.address,
      };
    case 'SAVE_TIMELINE':
      return {
        ...state,
        ...saveTimeline(action.event, state, action.getTrip),
      };
    case 'ADD_NEW_EVENT':
      addNewEvent(action.event, action.day, action.getTrip, state);
      return state;
    default:
      return state;
  }
};


export default combineReducers({ voting, events, appState });
