import { combineReducers } from 'redux';
import shortid from 'shortid';
import axios from 'axios';
import moment from 'moment';
// import { routerReducer } from 'react-router-redux';
import voting from './voting';
import events from './events';
import appState from './AppReducers';

const searchState = (state = {}, action) => {
  switch(action.type) {
    case 'SET_CATEGORY':
      return {
        ...state,
        termBar: action.category,
      };
    default:
      return state;
  }
};

export default combineReducers({ voting, events, appState, searchState });
