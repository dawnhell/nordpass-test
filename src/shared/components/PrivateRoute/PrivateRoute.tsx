import { FC } from 'react';
import { Route, RouteProps, useHistory } from 'react-router-dom';
import {Routes} from '~/constants';
import useIsAuthenticated from '~/shared/hooks/useIsAuthenticated';

const PrivateRoute: FC<RouteProps> = ({
  path,
  component,
}) => {
  const { push } = useHistory();
  const isAuthenticated = useIsAuthenticated();

  console.log('in PRIVATE route', isAuthenticated)

  if (!isAuthenticated) {
    push(Routes.Login);
  }

  return <Route path={path} component={component}/>
};

export default PrivateRoute;
