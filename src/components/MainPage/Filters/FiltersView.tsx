import './filters.scss';
import FiltersList from '../../../container/MainPage/Filters/FiltersList/FiltersList';
import FilterRange from '../../../container/MainPage/Filters/FiltersRange/FilterRange';

export interface filtersPropsView {
  categories: string[];
  brands: string[];
  minPrice: number;
  maxPrice: number;
  minStock: number;
  maxStock: number;
  resetHandler: () => void;
  copyHandler: () => void;
  linkState: boolean;
}

export default function FiltersView({
  categories,
  brands,
  minPrice,
  maxPrice,
  minStock,
  maxStock,
  resetHandler,
  copyHandler,
  linkState,
}: filtersPropsView) {
  return (
    <aside className="filters">
      <div className="filters__control">
        <button
          className="filters__control-btn btn"
          type="button"
          onClick={resetHandler}
        >
          Reset filters
        </button>
        <button
          className={linkState ? 'filters__control-btn filters__control-btn_active btn' : 'filters__control-btn btn'}
          type="button"
          onClick={copyHandler}
        >
          {linkState ? 'Copied' : 'Copy link'}
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
