import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App';
import { Provider } from 'react-redux';

import store from './src/store';

const Main = (
  <Provider store={store}>
    <App />
  </Provider>
);
ReactDOM.render(Main, document.getElementById('app'));
