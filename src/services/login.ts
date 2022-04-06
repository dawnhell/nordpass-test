import { API } from '~/constants';
import getUrl from '~/utils/getUrl';

interface ILoginResponse {
  data: Record<string, any> | null;
  error: string | null;
}

const login = async (username: string, password: string): Promise<ILoginResponse> => {
  const url = getUrl(API.Login, {
    username,
    password,
  });

  const response = await fetch(url);

  if (response.status === 200) {
    const data = await response.json();
    const { token } = data;

    localStorage.setItem('token', token);

    return {
      data,
      error: null
    }
  } else if (response.status === 401) {
    return {
      data: null,
      error: 'Incorrect username or password!'
    }
  }

  return {
    data: null,
    error: 'Login failed. Server responded with error!'
  }
};

export default login;
