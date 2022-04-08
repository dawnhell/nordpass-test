import { useUserContext } from '~/UserContext';

function useIsAuthenticated(): boolean {
  const {
    errorMessage,
    isLoading,
    user
  } = useUserContext();

  return !isLoading && !errorMessage && !!user;
}

export default useIsAuthenticated;
