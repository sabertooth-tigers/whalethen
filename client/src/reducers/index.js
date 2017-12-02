import { combineReducers } from 'redux';
import shortid from 'shortid';
import axios from 'axios';
import moment from 'moment';
// import { routerReducer } from 'react-router-redux';
import events from './events';
import appState from './AppReducers';
import eventState from './EventReducers';
import searchState from './SearchReducers';


export default combineReducers({
  events,
  appState,
  searchState,
  eventState,
});
