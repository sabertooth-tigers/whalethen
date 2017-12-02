/* eslint-disable */
import { createStore, applyMiddleware, compose } from 'redux';
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

const searchState = {
  locationSearch: '',
  termBar: '',
  searchList: [],
  selectedDay: '',
};

const state = {
  appState,
  searchState,
};

const enhancers = compose(window.devToolsExtension ? window.devToolsExtension() : f => f);
const store = createStore(rootReducer, state, applyMiddleware(thunk));

//const store = createStore(rootReducer, state, enhancers);
if (module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}



export default store;
