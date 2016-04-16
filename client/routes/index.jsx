import React from 'react';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
import App from '../components/App';
import HomePage from '../components/Pages/HomePage';
import FormPage from '../components/Pages/FormPage';
import ListPage from '../components/Pages/ListPage';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

export const Routes = () => {
  return (
    <Router history={appHistory}>
      <Route path='/' components={App}>
        <IndexRoute component={HomePage} />
        <Route path='home' component={HomePage} />
        <Route path='create' component={FormPage} />
        <Route path='update/:_id' component={FormPage}/>
        <Route path='list' component={ListPage} />
      </Route>
    </Router>
  );
};

export default Routes;
