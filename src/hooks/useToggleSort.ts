import { useContext, useState } from 'react';
import DataContext from '../context/data.context';

export interface SortType {
  price: undefined | boolean;
  count: undefined | boolean;
}

export default function useToggleSort() {
  const ctx = useContext(DataContext);
  const [isSort, setSort] = useState({} as SortType);
  const sortMap = {
    price: {
      up: ctx.sortPriceAscending.bind(ctx),
      down: ctx.sortPriceDescending.bind(ctx),
    },
    count: {
      up: ctx.sortStockAscending.bind(ctx),
      down: ctx.sortStockDescending.bind(ctx),
    },
  };

  const classState = (label: keyof SortType) => {
    if (isSort?.[label] === undefined) return null;
    return !!isSort?.[label];
  };

  function setSortDirection(label: keyof SortType) {
    const bool = isSort[label];
    const prop = bool ? 'up' : 'down';
    sortMap[label][prop]();
  }

  function toggleSort(label: keyof SortType) {
    setSort((state) => {
      if (isSort === undefined) {
        return {
          price: undefined,
          count: undefined,
          [label]: true,
        };
      }
      return {
        price: undefined,
        count: undefined,
        [label]: !state[label],
      };
    });
    setSortDirection(label);
  }

  return {
    isSort,
    toggleSort,
    classState,
  };
}
