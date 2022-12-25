import './filters.scss';
import { filtersProps } from '../../../types/types';
import FiltersList from '../../../container/MainPage/Filters/FiltersList/FiltersList';
import FilterRange from './FiltersRange/FilterRange';

function FiltersView({
  categories, brands, minPrice, maxPrice, minStock, maxStock,
}: filtersProps) {
  return (
    <aside className="filters">
      <div className="filters__control">
        <button className="filters__control-btn" type="button">Reset filters</button>
        <button className="filters__control-btn" type="button">Copy link</button>
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

export default FiltersView;
