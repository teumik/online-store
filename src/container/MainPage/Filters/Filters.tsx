import FiltersView from '../../../components/MainPage/Filters/Filters';
import DC from '../../../controller/data.controller';

function Filters() {
  return (
    <FiltersView
      categories={DC.getUniqCategories}
      brands={DC.getUniqBrands}
      minPrice={DC.getLowPrice}
      maxPrice={DC.getMaxPrice}
      minStock={DC.getLowStock}
      maxStock={DC.getMaxStock}
    />
  );
}

export default Filters;
