import './filtersList.scss';
import { filterListProps } from '../../../../types/types';

function FiltersListView({ filterTitle, values }: filterListProps) {
  return (
    <div className="filters__item">
      <h3 className="filters__title">{filterTitle}</h3>
      <div className="filters__list">
        {values.map((title) => (
          <li className="filters__list-item" key={title}>
            <input type="checkbox" className="filters__list-checkbox" id={title} />
            <label htmlFor={title} className="filters__list-label">{` ${title} `}</label>
            <p className="filters__list-stock">5/5</p>
          </li>
        ))}
      </div>
    </div>
  );
}

export default FiltersListView;
