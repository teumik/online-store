import { useState } from 'react';
import { dataController } from '../controller/data.controller';

export interface SortType {
  price: undefined | boolean;
  count: undefined | boolean;
}

export default function useToggleSort() {
  const ctx = dataController;
  const { sort } = ctx.storage.products;
  const storage = sort.price === undefined && sort.count === undefined ? {} : sort;

  const [isSort, setSort] = useState(storage as SortType);
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
      Object.assign(sort, {
        price: undefined,
        count: undefined,
        [label]: !state[label],
      });
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
