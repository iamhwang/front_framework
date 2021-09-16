import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import Home from './Home';
import Maria from './MatiaContainer';
import NotFound from './NotFound';

function App() {
  return (
    <div>
      <header>
        <ol>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Maria">MariaDB</Link></li>
          <li><Link to="/notfound">Not found</Link></li>
        </ol>
      </header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Maria" component={Maria} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
