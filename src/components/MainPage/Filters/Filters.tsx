import './filters.scss';
import FiltersList from './FiltersList/FiltersList';
import FilterRange from './FiltersRange/FilterRange';
import DataController from '../../../controller/data.controller';
import productsData from '../../../lib/data/productsData.json';

interface filtersProps {
  categories: string[];
  brands: string[];
}

function Filters(props: filtersProps) {
  const { categories, brands } = props;
  const dataController = new DataController(productsData.products);

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
        min={dataController.getLowPrice()}
        max={dataController.getMaxPrice()}
      />
      <FilterRange
        title="Stock"
        min={dataController.getLowStock()}
        max={dataController.getMaxStock()}
      />
    </aside>
  );
}

export default Filters;
