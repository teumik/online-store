import './filters.scss';
import { useContext } from 'react';
import { filtersProps } from '../../../types/types';
import FiltersList from '../../../container/MainPage/Filters/FiltersList/FiltersList';
import FilterRange from './FiltersRange/FilterRange'; // <=============
import { ProductsContext } from '../../../App';

function FiltersView({
  categories, brands, minPrice, maxPrice, minStock, maxStock,
}: filtersProps) {
  // USE CONTEXT AND CONTEXT METHODS
  const ctx = useContext(ProductsContext);

  return (
    <aside className="filters">
      <div className="filters__control">
        <button onClick={ctx.change} className="filters__control-btn" type="button">Reset filters</button>
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
