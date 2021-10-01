import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../component/container/LoginPageContainer';
import PageNotFound from '../component/presentational/PageNotFound';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route component={PageNotFound} />
    </Switch>
  );
}
