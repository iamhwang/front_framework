import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import Home from './Home';
import Conn from './Conn';
import NotFound from './NotFound';

function App() {
  return (
    <div>
      <header>
        <ol>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/conn">MariaDB</Link></li>
          <li><Link to="/notfound">Not found</Link></li>
        </ol>
      </header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/conn" component={Conn} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
