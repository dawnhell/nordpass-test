import { API } from '~/constants';
import getUrl from '~/utils/getUrl';

const logout = async () => {
  const url = getUrl(API.Logout);
  const token = localStorage.getItem('token');

  await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  localStorage.removeItem('token');
};

export default logout;
