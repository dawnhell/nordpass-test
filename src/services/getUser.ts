import { API } from '../constants';
import getUrl from '../utils/getUrl';

interface IGetUserResponse {
  data: IUser | null;
  error: string | null;
}

export interface IUser {
  id: string;
  username: string;
  email: string;
}

const getUser = async (): Promise<IGetUserResponse> => {
  const url = getUrl(API.User);
  const token = localStorage.getItem('token');

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });

  if (response.status === 200) {
    const data = await response.json();
    const { token } = data;

    console.log('GOT USER', data)

    // localStorage.setItem('token', token);

    return {
      data,
      error: null
    }
  } else if (response.status === 401) {
    return {
      data: null,
      error: 'Unauthorized!'
    }
  }

  return {
    data: null,
    error: 'Login failed. Server responded with error!'
  }
};

export default getUser;
