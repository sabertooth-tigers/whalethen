import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';
// import the root reducer

import rootReducer from './reducers/index';


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

export default createStore(rootReducer, state, applyMiddleware(thunk));
