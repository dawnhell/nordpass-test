import { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Routes } from '~/constants';
import login from '~/services/login';
import { useUserContext } from '~/UserContext';

interface IReturnedValue {
  username: string;
  onUsernameChange: (event: ChangeEvent<HTMLInputElement>) => void;
  password: string;
  onPasswordChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  errorMessage: string;
  isLoading: boolean;
}

function useLogin(): IReturnedValue {
  const { push } = useHistory();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { updateUser } = useUserContext();

  const onSubmit = useCallback(async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsLoading(true);
    setErrorMessage(null);

    const response = await login(username, password);

    setIsLoading(false);

    console.log('in use login after submit', response, localStorage.getItem('token'))
    if (!response.error) {
      await updateUser();
      // push(Routes.PasswordHealth);
    } else {
      setErrorMessage(response.error);
    }
  }, [login, push, setErrorMessage, username, password]);

  const onUsernameChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value)
  }, [setUsername])

  const onPasswordChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }, [setPassword])

  return {
    username,
    onUsernameChange,
    password,
    onPasswordChange,
    onSubmit,
    errorMessage,
    isLoading
  };
}

export default useLogin;
