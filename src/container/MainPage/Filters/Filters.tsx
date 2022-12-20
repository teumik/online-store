import FiltersView from '../../../components/MainPage/Filters/Filters';
import DataController from '../../../controller/data.controller';
import productsData from '../../../lib/data/productsData.json';

const dataController = new DataController(productsData.products);

function Filters() {
  return (
    <FiltersView
      categories={dataController.getUniqCategories()}
      brands={dataController.getUniqBrands()}
      minPrice={dataController.getLowPrice()}
      maxPrice={dataController.getMaxPrice()}
      minStock={dataController.getLowStock()}
      maxStock={dataController.getMaxStock()}
    />
  );
}

export default Filters;
