import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Routes } from '~/constants';
import itemHasWeakPassword from '~/utils/itemHasWeakPassword';
import itemHasReusedPassword from '~/utils/itemHasReusedPassword';
import itemHasOldPassword from '~/utils/itemHasOldPassword';

import usePasswordHealth from './usePasswordHealth';
import List from './components/List/List';
import Filter from './components/Filter/Filter';
import Header from './components/Header/Header';
import ErrorBlock from '../ErrorBlock/ErrorBlock';
import LoadingScreen from '../LoadingScreen';

const PasswordHealth = () => {
  const {
    isLoading,
    userDataIsLoading,
    userProviderErrorMessage,
    errorMessage,
    items,
    user
  } = usePasswordHealth()

  if (isLoading || userDataIsLoading) {
    return <LoadingScreen/>
  }

  if (userProviderErrorMessage || errorMessage) {
    return <ErrorBlock error={userProviderErrorMessage || errorMessage}/>
  }

  return (
    <div className="container">
      <Header items={items} username={user?.username}/>

      <Filter items={items}/>

      {/* I didn't move this routes into separate PasswordHealthRoutes.tsx file
        because basically there are no actual screens in there
       */}
      <Switch>
        <Route exact path={Routes.PasswordHealth}>
          <List items={items}/>
        </Route>

        <Route path={Routes.Weak}>
          <List items={items.filter(itemHasWeakPassword)}/>
        </Route>

        <Route path={Routes.Reused}>
          <List items={items.filter((item) => itemHasReusedPassword(item, items))}/>
        </Route>

        <Route path={Routes.Old}>
          <List items={items.filter(itemHasOldPassword)}/>
        </Route>
      </Switch>
    </div>
  );
};

export default PasswordHealth;
