import { filtersProps } from '../../../types/types';
import './filters.scss';
import FiltersList from './FiltersList/FiltersList';
import FilterRange from './FiltersRange/FilterRange';

function FiltersView({ categories, brands }: filtersProps) {
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
        min={0}
        max={2000}
      />
      <FilterRange
        title="Stock"
        min={0}
        max={2000}
      />
    </aside>
  );
}

export default FiltersView;
