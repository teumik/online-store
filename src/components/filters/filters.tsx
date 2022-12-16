import './filters.scss';
import FiltersList from './filtersList/filtersList';
import FilterRange from './filtersRange/filterRange';

import DateControler from '../../date.control';

interface filtersProps {
  categories: string[];
  brands: string[];
}

function Filters(props: filtersProps) {
  const { categories, brands } = props;

  return (
    <aside className="filters">
      <div className="filters__control">
        <button className="filters__control-btn" type="button">
          Reset filters
        </button>
        <button className="filters__control-btn" type="button">
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
        min={DateControler.getLowPrice()}
        max={DateControler.getMaxPrice()}
      />
      <FilterRange
        title="Stock"
        min={DateControler.getLowStock()}
        max={DateControler.getMaxStock()}
      />
    </aside>
  );
}

export default Filters;
