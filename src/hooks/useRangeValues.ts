import {
  FormEvent, useContext, useState
} from 'react';
import DataContext from '../context/data.context';
import ProductsContext from '../context/products.context';

const useRangeValues = (min: number, max: number, title: string) => {
  const [lowRangeValue, setLowPrice] = useState(min);
  const [maxRangeValue, setMaxPrice] = useState(max);
  const { updateProducts } = useContext(ProductsContext);
  const ctx = useContext(DataContext);

  function calculateInputValue(e: FormEvent<HTMLInputElement>) {
    const target = e.currentTarget;
    const inputValue = parseInt(target.value, 10);

    if (target.classList.contains('filters__range-1')) {
      if (inputValue > maxRangeValue) return;
      setLowPrice(inputValue);
      ctx.onChangeFiltersRange(title, [inputValue, maxRangeValue]);
    }
    if (target.classList.contains('filters__range-2')) {
      if (inputValue < lowRangeValue) return;
      setMaxPrice(inputValue);
      ctx.onChangeFiltersRange(title, [lowRangeValue, inputValue]);
    }
    updateProducts();
  }

  return {
    lowRangeValue,
    maxRangeValue,
    calculateInputValue,
  };
};
export default useRangeValues;
