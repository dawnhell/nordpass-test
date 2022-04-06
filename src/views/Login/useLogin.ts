import { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Routes } from '~/constants';
import login from '~/services/login';

interface IReturnedValue {
  username: string;
  onUsernameChange: (event: ChangeEvent<HTMLInputElement>) => void;
  password: string;
  onPasswordChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  errorMessage: string;
}

function useLogin(): IReturnedValue {
  const { push } = useHistory();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onSubmit = useCallback(async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setErrorMessage(null);

    const response = await login(username, password);

    if (!response.error) {
      push(Routes.PasswordHealth);
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
    errorMessage
  };
}

export default useLogin;
