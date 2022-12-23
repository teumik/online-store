import { useContext } from 'react';
import DataContext from '../../../../context/data.context';
import './filtersList.scss';

export interface filterListPropsView {
  filterTitle: string;
  values: string[];
  inputHandler: (title: string, categoryTitle: string) => void;
}

export default function FiltersListView({
  filterTitle,
  values,
  inputHandler,
}: filterListPropsView) {
  const ctx = useContext(DataContext);
  return (
    <div className="filters__item">
      <h3 className="filters__title">{filterTitle}</h3>
      <div className="filters__list">
        {values.sort().map((title) => (
          <li className="filters__list-item" key={title}>
            <input onChange={() => inputHandler(title, filterTitle)} type="checkbox" className="filters__list-checkbox" id={title} />
            <label htmlFor={title} className="filters__list-label">{` ${title} `}</label>
            <p className="filters__list-stock">
              {ctx.getCurrentSense(title)}
              /
              {ctx.getMaxSense(title)}
            </p>
          </li>
        ))}
      </div>
    </div>
  );
}
