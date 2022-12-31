import FilterListItem from '../../../../container/MainPage/Filters/FilterListItem/FilterListItem';
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
  return (
    <div className="filters__item">
      <h3 className="filters__title">{filterTitle}</h3>
      <div className="filters__list">
        {values.sort().map((title) => (
          <FilterListItem
            key={title}
            title={title}
            filterTitle={filterTitle}
            inputHandler={inputHandler}
          />
        ))}
      </div>
    </div>
  );
}
