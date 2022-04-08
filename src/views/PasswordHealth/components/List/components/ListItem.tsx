import React, { FC } from 'react';
import ItemIcon from '~/views/PasswordHealth/components/List/components/ItemIcon';
import UpdateModal from '~/views/PasswordHealth/components/UpdateModal/UpdateModal';
import { IItem } from '~/services/getUserItems';

interface IListItem {
  item: IItem;
}

const ListItem: FC<IListItem> = ({ item }) => (
  <li className="item">
    <div className="item-info">
      <ItemIcon title={item.title}/>

      <div className="item-description">
        <h2>
          {item.title}
        </h2>

        <p>
          {item.description}
        </p>
      </div>
    </div>

    {/* It's a bad practice to create a modal for each element.
        It would be much better to have only one modal, and just pass appropriate date in it.
     */}
    <UpdateModal item={item} />
  </li>
);

export default ListItem;
