import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/dashboard';
import Repository from '../pages/repository';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={Dashboard} exact />
    <Route path="/repository" component={Repository} />
  </Switch>
);

export default Routes;
