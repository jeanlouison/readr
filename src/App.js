import React from 'react';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/home/index';
import Calendar from './components/calendar/index';

function App() {
  return ( <>
        <Header />
        <HashRouter>
          <Switch>
            <Route path='/calendar/:group'>
              <Calendar />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
            <Redirect to='/' />
          </Switch>
        </HashRouter>
    </>);
}

export default App;
