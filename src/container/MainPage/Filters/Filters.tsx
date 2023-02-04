import { useContext, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import FiltersView from '../../../components/MainPage/Filters/FiltersView';
import DataContext from '../../../context/data.context';
import ProductsContext from '../../../context/products.context';
import QueryContext from '../../../context/query.context';
import { dataController } from '../../../controller/data.controller';

export default function Filters() {
  const ctx = useContext(DataContext);
  const [queryParams, setQueryParams] = useSearchParams();
  const { updateProducts } = useContext(ProductsContext);
  const {
    viewState, updateQuery, updateSearch, toggleView, setSort, setInit,
  } = useContext(QueryContext);

  const [linkState, setLinkState] = useState(false);

  const copyHandler = () => {
    navigator.clipboard.writeText(globalThis.location.href);
    setLinkState(true);
    setTimeout(() => setLinkState(false), 2000);
  };

  function clearSearch() {
    queryParams.delete('search');
    updateQuery('');
    updateSearch('');
  }

  function clearView() {
    queryParams.delete('view');
    if (viewState) toggleView();
  }

  function clearSort() {
    const temp = {
      price: false,
      count: false,
    };
    dataController.storage.products.init = temp;
    dataController.storage.products.sort = temp;
    queryParams.delete('sort');
    queryParams.delete('type');
    setInit(temp);
    setSort(temp);
  }

  function clearAll() {
    Array.from(queryParams.entries()).map(([q]) => queryParams.delete(q));
  }

  const resetHandler = () => {
    clearView();
    clearSearch();
    clearAll();
    clearSort();
    setQueryParams(queryParams);
    updateProducts();
  };

  return (
    <FiltersView
      categories={ctx.getUniqCategories()}
      brands={ctx.getUniqBrands()}
      minPrice={ctx.getLowPrice()}
      maxPrice={ctx.getMaxPrice()}
      minStock={ctx.getLowStock()}
      maxStock={ctx.getMaxStock()}
      resetHandler={resetHandler}
      copyHandler={copyHandler}
      linkState={linkState}
    />
  );
}
