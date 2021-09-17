import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Maria from './MatiaContainer';
import NotFound from './NotFound';
import Login from './LoginFormContainer';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/Maria" component={Maria} />
      <Route component={NotFound} />
    </Switch>
  );
}
