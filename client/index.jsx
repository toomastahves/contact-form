import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import { Provider } from 'react-redux';
import Routes from './routes/';
import store from './store/';
import 'purecss/build/pure-min.css';
import './styles/index.css';

const application = (
  <Provider store={store}>
    <Routes />
  </Provider>
);

ReactDOM.render(application, document.getElementById('root'));
