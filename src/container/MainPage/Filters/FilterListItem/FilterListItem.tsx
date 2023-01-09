import { useContext } from 'react';

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

  return (
    <li className="filters__list-item" key={title}>
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
        {ctx.getCurrentSense(title)}
        /
        {ctx.getMaxSense(title)}
      </p>
    </li>
  );
}

export default FilterListItem;
