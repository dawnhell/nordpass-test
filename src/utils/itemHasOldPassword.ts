import { IItem } from '~/services/getUserItems';

const THIRTY_DAYS_TIME_MS = 30 * 24 * 60 * 60 * 1000;

const itemHasOldPassword = (item: IItem): boolean => {
  const { createdAt } = item;
  const itemTime = new Date(createdAt).getTime();
  const now = new Date().getTime();

  return now - itemTime >= THIRTY_DAYS_TIME_MS;
};

export default itemHasOldPassword;
