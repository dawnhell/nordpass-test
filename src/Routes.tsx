import React, { FC } from 'react';
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';

import Login from './views/Login/Login';
import PasswordHealth from './views/PasswordHealth/PasswordHealth';
import PrivateRoute from './views/PrivateRoute';
import PublicRoute from './views/PublicRoute';
import { UserContextProvider } from './views/UserContext';
import { Routes } from './constants';

const RoutesComponent: FC = () => (
  <Router>
    <Switch>
      <PublicRoute
        path={Routes.Login}
        component={Login}
      />

      <PrivateRoute
        path={Routes.PasswordHealth}
        component={() => <UserContextProvider><PasswordHealth /></UserContextProvider>}
      />

      <PrivateRoute
        path={Routes.Root}
        component={() => <Redirect to={Routes.PasswordHealth}/>}
      />
    </Switch>
  </Router>
);

export default RoutesComponent;
