import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Maria from './MariaDBContainer';
import NotFound from './NotFound';
import Login from './LoginFormContainer';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/MariaDB" component={Maria} />
      <Route component={NotFound} />
    </Switch>
  );
}
