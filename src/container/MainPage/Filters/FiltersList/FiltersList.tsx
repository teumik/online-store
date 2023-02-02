import { useContext } from 'react';
import FiltersListView from '../../../../components/MainPage/Filters/FiltersList/FiltersListView';
import DataContext from '../../../../context/data.context';
import ProductsContext from '../../../../context/products.context';

import useFilterQuery from '../../../../hooks/useFiltersQuery';

export interface filterListProps {
  filterTitle: string;
  values: string[];
}

export default function FiltersList({ filterTitle, values }: filterListProps) {
  const DataCtx = useContext(DataContext);
  const { updateProducts } = useContext(ProductsContext);

  const { changeFiltersQuery, initial } = useFilterQuery(filterTitle);

  const inputHandler = (title: string, categoryTitle: string) => {
    DataCtx.onChangeFiltersList(title, categoryTitle);
    changeFiltersQuery(title);

    updateProducts();
  };

  return (
    <FiltersListView
      filterTitle={filterTitle}
      values={values}
      inputHandler={inputHandler}
      initial={initial}
    />
  );
}
