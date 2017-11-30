import { combineReducers } from 'redux';
//import { routerReducer } from 'react-router-redux';
import voting from './voting';
import events from './events';
import shortid from 'shortid';

// const state = {
//   timelineData: [],
//   timelineName: 'testTimeline', // temp until we get some more data built up
//   startDate: '',
//   endDate: '',
//   numberOfDays: 0,
//   timelineId: 'S1nnbsNlG', // temp until we get a way to produce these
//   createEventDay: '',
//   newEvent: '',
//   newEventAddress: '',
// };

const appState = (state = {}, action) => {
  switch (action.type) {
    case 'ON_INPUT_CHANGE':
      return {
        ...state,
        [action.name]: action.value,
      };
    case 'GENERATE_ID':
      const id = shortid.generate();
      return {
        ...state,
        timelineId: id,
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
    default:
      return state;
  }
};


export default combineReducers({ voting, events, appState });
