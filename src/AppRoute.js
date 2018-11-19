import React from 'react';
import { Router, Route } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './store/reducer';
import Navigation from './Navigation';

const store = createStore(reducer);

const AppRoute = () => {
  const history = createHistory();
  return (
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={Navigation} />
      </Router>
    </Provider>
  );
};

export default AppRoute;
