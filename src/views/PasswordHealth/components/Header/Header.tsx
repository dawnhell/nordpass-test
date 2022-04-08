import { FC, useCallback, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Routes } from '~/constants';
import { IItem } from '~/services/getUserItems';
import logout from '~/services/logout';

import './header-style.scss';
import UserContext from '~/views/UserContext';

interface IHeader {
  items: Array<IItem>;
  username: string;
}

const Header: FC<IHeader> = ({ items, username }) => {
  const { replace } = useHistory()
  const { deleteData } = useContext(UserContext)

  const onLogout = useCallback(async () => {
    await logout();

    deleteData();
    replace(Routes.Login);
  }, [logout, replace])

  return (
    <div className="header">
      <div className="user-section">
        <button onClick={onLogout}>{`Logout ${username}`}</button>
      </div>

      <h1>{`${items.length} Items are vulnerable`}</h1>

      <span>Create new complex passwords to protect your accounts</span>
    </div>
  )
};

export default Header;
