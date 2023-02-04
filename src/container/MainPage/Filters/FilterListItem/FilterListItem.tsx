import { useContext, useEffect, useState } from 'react';

import DataContext from '../../../../context/data.context';

interface FilterListItemProps {
  title: string;
  filterTitle: string;
  inputHandler: (title: string, categoryTitle: string) => void;
  initial: string[];
}

function FilterListItem({
  title, filterTitle, inputHandler, initial,
}: FilterListItemProps) {
  const ctx = useContext(DataContext);
  const [currentSense, setCurrentSense] = useState(ctx.getCurrentSense(title));
  const [maxSense, setMaxSense] = useState(ctx.getMaxSense(title));

  useEffect(() => {
    setCurrentSense(ctx.getCurrentSense(title));
    setMaxSense(ctx.getMaxSense(title));
  }, [ctx.view]);

  return (
    <li className={ctx.getCurrentSense(title) ? 'filters__list-item' : 'filters__list-item inActive'} key={title}>
      <input
        onChange={() => {
          inputHandler(title, filterTitle);
        }}
        checked={
          ctx.activeBrandsFilters.includes(title)
          || ctx.activeCategoryFilters.includes(title)
          || initial.includes(title)
        }
        type="checkbox"
        className="filters__list-checkbox"
        id={title}
      />
      <label htmlFor={title} className="filters__list-label">{` ${title} `}</label>
      <p className="filters__list-stock">
        {currentSense}
        /
        {maxSense}
      </p>
    </li>
  );
}

export default FilterListItem;
