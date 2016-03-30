import React from 'react';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
import App from '../components/App';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

export const Routes = () => {
  return (
    <Router history={appHistory}>
      <Route path='/' components={App} >
        <IndexRoute component={App} />
      </Route>
    </Router>
  );
};

export default Routes;
