import React from 'react';
import { Route } from 'react-router';
import Home from './views/home';
import About from './views/about';

const Router = () => (
  <div>
    <Route path="/home" component={Home} />
    <Route path="/about" component={About} />
  </div>
);

export default Router;
