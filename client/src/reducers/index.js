import { combineReducers } from 'redux';
import shortid from 'shortid';
import axios from 'axios';
import moment from 'moment';
// import { routerReducer } from 'react-router-redux';
import voting from './voting';
import events from './events';
import appState from './AppReducers';


export default combineReducers({ voting, events, appState });
