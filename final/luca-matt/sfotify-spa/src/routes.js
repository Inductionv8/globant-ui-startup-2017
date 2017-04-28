import React from 'react';
import { BrowserRouter, Route, Switch } from 'redux-router-dom';

import { App } from './containers/App';

<BrowserRouter>
  <Switch>
    <Route exact path='/' src={App} >
  </Switch>
</BrowserRouter>
