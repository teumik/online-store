import { useContext, useState } from 'react';
import DataContext from '../context/data.context';
import ProductsContext from '../context/products.context';

const useRangeValues = (min: number, max: number, title: string) => {
  const [lowprice, setLowPrice] = useState(min);
  const [maxprice, setMaxPrice] = useState(max);
  const { updateProducts } = useContext(ProductsContext);
  const ctx = useContext(DataContext);

  function calculateInputValue(e: { target: HTMLInputElement }): void {
    const { target } = e;
    const value: number = parseInt(target.value, 10);
    if (target.classList.contains('filters__range-1')) {
      if (value > maxprice) return;
      setLowPrice(value);
      ctx.onChangeFiltersRange(title, [value, maxprice]);
    }
    if (target.classList.contains('filters__range-2')) {
      if (value < lowprice) return;
      setMaxPrice(value);
      ctx.onChangeFiltersRange(title, [lowprice, value]);
    }
    updateProducts();
  }
  return {
    lowprice,
    maxprice,
    calculateInputValue,
  };
};

export default useRangeValues;
