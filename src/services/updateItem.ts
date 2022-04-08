import { API } from '~/constants';
import getUrl from '~/utils/getUrl';

import { IItem } from './getUserItems';

const updateItem = (item: IItem) => {
  const url = getUrl(API.Items);
  const token = localStorage.getItem('token');

  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(item),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    }
  })
}

export default updateItem;
