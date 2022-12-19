import './filtersList.scss';
import FilterListItem from '../FilterListItem/FilterListItem';
import { filterListProps } from '../../../../types/types';

function FiltersListView({ filterTitle, values }: filterListProps) {
  return (
    <div className="filters__item">
      <h3 className="filters__title">{filterTitle}</h3>
      <div className="filters__list">
        {values.map((item: string) => <FilterListItem key={item} title={item} />)}
      </div>
    </div>
  );
}

export default FiltersListView;
