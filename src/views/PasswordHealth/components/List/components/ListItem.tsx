import React, { FC } from 'react';
import ItemIcon from '~/views/PasswordHealth/components/List/components/ItemIcon';
import UpdateModal from '~/views/PasswordHealth/components/UpdateModal/UpdateModal';
import { IItem } from '~/services/getUserItems';

interface IListItem {
  item: IItem;
}

const ListItem: FC<IListItem> = ({ item }) => (
  <li className="item">
    <ItemIcon title={item.title}/>

    <div>
      <div className="title">
        {item.title}
      </div>

      <div className="description">
        {item.description}
      </div>
    </div>

    <UpdateModal item={item} />
  </li>
);

export default ListItem;
