import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Maria from './MatiaContainer';
import NotFound from './NotFound';
import Login from './LoginContainer';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/Login" component={Login} />
      <Route path="/Maria" component={Maria} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
