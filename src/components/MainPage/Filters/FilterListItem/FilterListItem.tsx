import { filterItemProps } from '../../../../types/types';
import './filterListItem.scss';

function FilterListItemView({ title }: filterItemProps) {
  return (
    <li className="filters__list-item">
      <input type="checkbox" className="filters__list-checkbox" id={title} />
      <label htmlFor={title} className="filters__list-label">{` ${title} `}</label>
      <p className="filters__list-stock">5/5</p>
    </li>
  );
}

export default FilterListItemView;
