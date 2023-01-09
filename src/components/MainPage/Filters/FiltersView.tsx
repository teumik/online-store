import './filters.scss';
import { useSearchParams } from 'react-router-dom';
import { useContext } from 'react';
import FiltersList from '../../../container/MainPage/Filters/FiltersList/FiltersList';
import FilterRange from '../../../container/MainPage/Filters/FiltersRange/FilterRange';
import ProductsContext from '../../../context/products.context';
import QueryContext from '../../../context/query.context';

export interface filtersPropsView {
  categories: string[];
  brands: string[];
  minPrice: number;
  maxPrice: number;
  minStock: number;
  maxStock: number;
}

export default function FiltersView({
  categories,
  brands,
  minPrice,
  maxPrice,
  minStock,
  maxStock,
}: filtersPropsView) {
  const [queryParams, setQueryParams] = useSearchParams();
  const { updateProducts } = useContext(ProductsContext);
  const {
    viewState, updateQuery, updateSearch, toggleView, setSort, setInit,
  } = useContext(QueryContext);

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
    queryParams.delete('sort');
    queryParams.delete('type');
    const temp = {
      price: false,
      count: false,
    };
    setInit(temp);
    setSort(temp);
  }

  function clearAll() {
    Array.from(queryParams.entries()).map(([q]) => queryParams.delete(q));
  }

  return (
    <aside className="filters">
      <div className="filters__control">
        <button
          className="filters__control-btn btn"
          type="button"
          onClick={() => {
            clearView();
            clearSearch();
            clearSort();
            clearAll();
            setQueryParams(queryParams);
            updateProducts();
          }}
        >
          Reset filters
        </button>
        <button
          className="filters__control-btn btn"
          type="button"
          onClick={() => {
            navigator.clipboard.writeText(globalThis.location.href);
          }}
        >
          Copy link
        </button>
      </div>
      <FiltersList
        filterTitle="Category"
        values={categories}
      />
      <FiltersList
        filterTitle="Brand"
        values={brands}
      />
      <FilterRange
        title="Price"
        min={minPrice}
        max={maxPrice}
      />
      <FilterRange
        title="Stock"
        min={minStock}
        max={maxStock}
      />
    </aside>
  );
}
