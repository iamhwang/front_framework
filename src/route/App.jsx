import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LoginContainer from '../component/container/LoginContainer';
import PageNotFound from '../_page/PageNotFound';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={LoginContainer} />
      <Route component={PageNotFound} />
    </Switch>
  );
}
