import { useUserContext } from '~/views/UserContext';

function useIsAuthenticated(): boolean {
  const {
    errorMessage,
    isLoading,
    user
  } = useUserContext();

  console.log('useIsAuthenticated', isLoading, user, errorMessage)

  return !isLoading && !errorMessage && !!user;
}

export default useIsAuthenticated;
