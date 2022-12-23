import { useContext } from 'react';
import FiltersView from '../../../components/MainPage/Filters/Filters';
import DataContext from '../../../context/data.context';

export default function Filters() {
  const ctx = useContext(DataContext);
  return (
    <FiltersView
      categories={ctx.getUniqCategories()}
      brands={ctx.getUniqBrands()}
      minPrice={ctx.getLowPrice()}
      maxPrice={ctx.getMaxPrice()}
      minStock={ctx.getLowStock()}
      maxStock={ctx.getMaxStock()}
    />
  );
}
