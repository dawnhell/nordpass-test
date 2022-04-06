import { FC } from 'react';
import ListItem from '~/views/PasswordHealth/components/List/components/ListItem';
import { IItem } from "~/services/getUserItems";

import './list-style.scss';

interface IList {
  items: Array<IItem>,
}

const List: FC<IList> = ({ items }) => (
  <ul className="list">
    {items.map((item: IItem) => <ListItem item={item} key={item.id} />)}
  </ul>
)

export default List;
