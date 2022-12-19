import FilterListItemView from '../../../../components/MainPage/Filters/FilterListItem/FilterListItem';
import { filterItemProps } from '../../../../types/types';

const filterListItem = (props: filterItemProps) => {
  const { title } = props;

  return <FilterListItemView title={title} />;
};

export default filterListItem;
