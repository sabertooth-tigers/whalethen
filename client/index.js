import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-dom';
import store from './src/store';
import Main from './src/Main';
import { HashRouter } from 'react-router-dom';

ReactDOM.render((
  <Provider store={store}>
    <HashRouter>
      <Main />
    </HashRouter>
  </Provider>), document.getElementById('app'));
