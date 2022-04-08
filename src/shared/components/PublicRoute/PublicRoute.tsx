import {FC} from 'react';
import {Route, RouteProps, useHistory} from 'react-router-dom';
import {Routes} from '~/constants';
import useIsAuthenticated from '~/shared/hooks/useIsAuthenticated';

const PublicRoute: FC<RouteProps> = ({
 path,
 component,
}) => {
  const { push } = useHistory();
  const isAuthenticated = useIsAuthenticated();

  console.log('isAuth in PUBLIC', isAuthenticated)
  if (isAuthenticated) {
    push(Routes.PasswordHealth);
  }

  return <Route path={path} component={component}/>
};

export default PublicRoute;
