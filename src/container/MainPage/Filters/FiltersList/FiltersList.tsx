import { useContext } from 'react';
import FiltersListView from '../../../../components/MainPage/Filters/FiltersList/FiltersList';
import DataContext from '../../../../context/data.context';
import ProductsContext from '../../../../context/products.context';

export interface filterListProps {
  filterTitle: string;
  values: string[];
}

export default function FiltersList(props: filterListProps) {
  const { filterTitle, values } = props;
  const DataCtx = useContext(DataContext);
  const { updateProducts } = useContext(ProductsContext);

  const inputHandler = (title: string, categoryTitle: string) => {
    DataCtx.onChangeFiltersList(title, categoryTitle);
    updateProducts();
  };

  return (
    <FiltersListView
      filterTitle={filterTitle}
      values={values}
      inputHandler={inputHandler}
    />
  );
}
