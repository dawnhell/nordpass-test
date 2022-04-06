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
  const { push } = useHistory();

  const onTabClick = useCallback(() => {
    push(path)
  }, [push, path])

  return (
    <div className="filter-tab" onClick={onTabClick}>
      {`${title} (${count})`}
    </div>
  );
}

export default FilterTab
