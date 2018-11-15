import React from 'react';
import { Route, Redirect, Switch } from 'react-router';
import Home from './views/home';
import About from './views/about';

const Router = () => (
  <div>
    <Switch>
      <Redirect exact from="/" to="/home" />
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
    </Switch>
  </div>
);

export default Router;
