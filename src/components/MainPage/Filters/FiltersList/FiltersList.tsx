import './filtersList.scss';
import FilterListItem from '../FilterListItem/FilterListItem';

interface filterListProps {
  filterTitle: string;
  values: string[];
}

function FiltersList(props: filterListProps) {
  const { filterTitle, values } = props;
  let c = 0;

  const elements: JSX.Element[] = values.map((item: string) => {
    c += 1;
    return (
      <FilterListItem
        key={c}
        title={item}
      />
    );
  });

  return (
    <div className="filters__item">
      <h3 className="filters__title">{filterTitle}</h3>
      <div className="filters__list">
        {elements}
      </div>
    </div>
  );
}

export default FiltersList;
