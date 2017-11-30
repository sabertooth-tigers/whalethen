import { combineReducers } from 'redux';
//import { routerReducer } from 'react-router-redux';
import voting from './voting';
import events from './events';
import shortid from 'shortid';

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
    default:
      return state;
  }
};


export default combineReducers({ voting, events, appState });
