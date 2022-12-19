import FiltersView from '../../../components/MainPage/Filters/Filters';
import { filtersProps } from '../../../types/types';

function Filters(props: filtersProps) {
  const { categories, brands } = props;

  return (
    <FiltersView
      categories={categories}
      brands={brands}
    />
  );
}

export default Filters;
