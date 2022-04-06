import { createContext, useContext, useEffect, useState } from 'react';
import getUser, { IUser } from '~/services/getUser';

interface IUserContext {
  updateUser: () => void;
  deleteData: () => void;
  errorMessage: string;
  isLoading: boolean;
  user: IUser | null;
}

const UserContext = createContext<IUserContext>({
  updateUser: () => {},
  deleteData: () => {},
  errorMessage: null,
  isLoading: true,
  user: null
});

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider = ({ children }) => {
  const [errorMessage, setErrorMessage] = useState<string>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<IUser | null>(null)

  const updateUser = async () => {
    setErrorMessage(null);
    setIsLoading(true);

    const response = await getUser();

    if (response.error) {
      setErrorMessage(response.error);
    } else {
      setUser(response.data);
    }

    setIsLoading(false);
  }

  const deleteData = () => {
    setErrorMessage(null);
    setIsLoading(false);
    setUser(null);
  };

  useEffect(() => {
   updateUser();
  }, []);

  const value = {
    updateUser,
    deleteData,
    errorMessage,
    isLoading,
    user
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext;
