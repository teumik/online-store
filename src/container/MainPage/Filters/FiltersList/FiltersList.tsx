import FiltersListView from '../../../../components/MainPage/Filters/FiltersList/FiltersList';
import { filterListProps } from '../../../../types/types';

function FiltersList(props: filterListProps) {
  const { filterTitle, values } = props;
  return <FiltersListView filterTitle={filterTitle} values={values} />;
}

export default FiltersList;
