import React, { FC, useContext, useEffect } from 'react';
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';
import LoadingScreen from '~/views/LoadingScreen/LoadingScreen';
import UserContext from '~/UserContext';

import Login from './views/Login/Login';
import PasswordHealth from './views/PasswordHealth/PasswordHealth';
import PrivateRoute from './shared/components/PrivateRoute/PrivateRoute';
import PublicRoute from './shared/components/PublicRoute/PublicRoute';
import { Routes } from './constants';

const RoutesComponent: FC = () => {
  /* It's not very common to make some initialization call in Router, but since we store our data just in Context
  *  it's the nearest place where we can call some authentication methods(because in App.tsx I've wrapper Routes in UserContext)
  *  */

  const { updateUser, isLoading } = useContext(UserContext);

  useEffect(() => {
    console.log('initial call for user')
    updateUser();
  }, [])

  if (isLoading) {
    return (
      <LoadingScreen />
    )
  }

  return (
    <Router>
      <Switch>
        <PublicRoute
          path={Routes.Login}
          component={Login}
        />

        <PrivateRoute
          path={Routes.PasswordHealth}
          component={PasswordHealth}
        />

        <PrivateRoute
          path={Routes.Root}
          component={() => <Redirect to={Routes.PasswordHealth}/>}
        />
      </Switch>
    </Router>
  );
}

export default RoutesComponent;
