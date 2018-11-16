import React from 'react';
import { Router, Route } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import Navigation from './Navigation';

const AppRoute = () => {
  const history = createHistory();
  return (
    <Router history={history}>
      <Route path="/" component={Navigation} />
    </Router>
  );
};

export default AppRoute;
