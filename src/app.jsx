import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PageNotFound from './PageNotFound';
import Login from './LoginPage';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route component={PageNotFound} />
    </Switch>
  );
}
