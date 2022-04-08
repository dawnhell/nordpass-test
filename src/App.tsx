import React from 'react';
import { UserContextProvider } from '~/UserContext';

import Routes from './Routes';
import './style/styles.scss';

const App = () => {
  /* Usually here goes some initialization calls(e.g. store init, initial authentication request, ...)  */

  return (
    <UserContextProvider>
      <Routes />
    </UserContextProvider>
  );
}

export default App;
