import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../_page/PageLogin';
import PageNotFound from '../_page/PageNotFound';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route component={PageNotFound} />
    </Switch>
  );
}
