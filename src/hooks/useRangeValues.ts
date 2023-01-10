import { useContext, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import DataContext from '../context/data.context';
import ProductsContext from '../context/products.context';

const useRangeValues = (min: number, max: number, title: string) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const ctx = useContext(DataContext);
  const initial = searchParams.get(title.toLowerCase())?.split('↕') || [];

  if (initial) {
    ctx.rangeFilters = {
      ...ctx.rangeFilters,
      [title]: [initial[0], initial[1]],
    };
  }
  ctx.filterAllProducts();

  const [lowprice, setLowPrice] = useState(parseInt(initial[0], 10) || min);
  const [maxprice, setMaxPrice] = useState(parseInt(initial[1], 10) || max);
  const { updateProducts } = useContext(ProductsContext);

  useEffect(() => {
    if (title === 'Price') {
      setLowPrice(ctx.getLowPriceView());
      setMaxPrice(ctx.getMaxPriceView());
    }
    if (title === 'Stock') {
      setLowPrice(ctx.getLowStockView());
      setMaxPrice(ctx.getMaxStockView());
    }
  }, [ctx.view]);

  function calculateInputValue(e: { target: HTMLInputElement }): void {
    const { target } = e;
    const value: number = parseInt(target.value, 10);
    if (target.classList.contains('filters__range-1')) {
      if (value > maxprice) return;
      setLowPrice(value);
      searchParams.set(title.toLowerCase(), [value, maxprice].join('↕'));
      setSearchParams(searchParams);
      ctx.onChangeFiltersRange(title, [value, maxprice]);
    }
    if (target.classList.contains('filters__range-2')) {
      if (value < lowprice) return;
      setMaxPrice(value);
      searchParams.set(title.toLowerCase(), [maxprice, value].join('↕'));
      setSearchParams(searchParams);
      ctx.onChangeFiltersRange(title, [lowprice, value]);
    }

    setTimeout(() => {
      updateProducts();
    }, 0);
  }

  return {
    lowprice,
    maxprice,
    calculateInputValue,
  };
};

export default useRangeValues;
