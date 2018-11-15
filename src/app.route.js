import React from 'react';
import { Router, Route } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import Dashboard from './dashboard';

const AppRoute = () => {
  const history = createHistory();
  return (
    <Router history={history}>
      <Route path="/" component={Dashboard} />
    </Router>
  );
};

export default AppRoute;
