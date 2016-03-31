import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './routes/';
import store from './store/';
import './style.css';

const application = (
  <Provider store={store}>
    <Routes />
  </Provider>
);

ReactDOM.render(application, document.getElementById('root'));
