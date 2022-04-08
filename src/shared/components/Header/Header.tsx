import { FC, useCallback, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { Routes } from '../../../constants';
import logout from '../../../services/logout';
import UserContext from '../../../UserContext';

import './header-style.scss';

interface IHeader {
  numberOfItems: number;
  username: string;
}

const Header: FC<IHeader> = ({ numberOfItems, username }) => {
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

      <h1>{`${numberOfItems} Items are vulnerable`}</h1>

      <span>Create new complex passwords to protect your accounts</span>
    </div>
  )
};

export default Header;
