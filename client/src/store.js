import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import moment from 'moment';
import axios from 'axios';
import shortid from 'shortid';

// import the root reducer

import rootReducer from './reducers/index';

const saveTimelineToDatabase = function(event, props, getTrip) {
  if (event && event.key !== 'Enter') { return; }

  const {
    startDate,
    endDate,
    timelineName,
    setId,
    setDays,
  } = props;

  const start = moment(startDate);
  const end = moment(endDate);
  const timelineId = shortid.generate();
  const numberOfDays = end.diff(start, 'days');
  setId(timelineId);
  setDays(numberOfDays);

  axios.post('/timeline', {
    timelineId,
    timelineName,
    numberOfDays,
  })
    .then(() => getTrip())
    .catch(err => console.error('error in submit ', err));
};

const appState = {
  timelineData: [],
  timelineName: 'testTimeline', // temp until we get some more data built up
  startDate: '',
  endDate: '',
  numberOfDays: 0,
  timelineId: 'S1nnbsNlG', // temp until we get a way to produce these
  createEventDay: '',
  newEvent: '',
  newEventAddress: '',
  saveTimelineToDatabase,
};

const state = {
  appState,
};

if (module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default createStore(rootReducer, state);
