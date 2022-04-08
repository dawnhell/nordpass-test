import { FC, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

interface IFilterTab {
  title: string;
  count: number;
  path: string;
}

const FilterTab: FC<IFilterTab> = ({
  title,
  count,
  path,
}) => {
  const { push, location } = useHistory();
  const isActive = location.pathname.includes(title.toLowerCase());

  const onTabClick = useCallback(() => {
    push(path)
  }, [push, path])

  return (
    <div className={`filter-tab ${isActive ? 'filter-tab-active' : ''}`} onClick={onTabClick}>
      {`${title} (${count})`}
    </div>
  );
}

export default FilterTab
