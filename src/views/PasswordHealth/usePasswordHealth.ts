import { IUser } from '~/services/getUser';
import { IItem } from '~/services/getUserItems';
import useItemsProvider from '~/views/PasswordHealth/useItemsProvider';
import { useUserContext } from '~/views/UserContext';

interface IReturnedValue {
  isLoading: boolean;
  userDataIsLoading: boolean;
  userProviderErrorMessage: string;
  errorMessage: string;
  items: Array<IItem>;
  user: IUser | null;
}

function usePasswordHealth(): IReturnedValue {
  const {
    errorMessage: userProviderErrorMessage,
    isLoading: userDataIsLoading,
    user,
  } = useUserContext();

  const {
    items,
    isLoading,
    errorMessage,
  } = useItemsProvider();

  return {
    isLoading,
    userDataIsLoading,
    userProviderErrorMessage,
    errorMessage,
    items,
    user
  };
}

export default usePasswordHealth;
