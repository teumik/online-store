import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { dataController } from '../controller/data.controller';

export interface SortType {
  price: undefined | boolean;
  count: undefined | boolean;
}

export interface MethodType {
  up: () => void;
  down: () => void;
}

export default function useToggleSort() {
  const ctx = dataController;
  const { init, sort } = ctx.storage.products;
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
  const [query, setQuery] = useSearchParams();
  const sortQuery = query.get('sort');
  const typeQuery = query.get('type');

  const valueInit = {
    price: false,
    count: false,
  };
  const valueSort = {
    price: false,
    count: false,
  };
  Object.assign(valueInit, init);
  Object.assign(valueSort, sort);

  if ((!valueInit.count || !valueInit.price) && !sortQuery) {
    ctx.sortDefault();
    Object.assign(valueInit, {
      price: false,
      count: false,
    });
  }

  if (sortQuery && typeQuery) {
    valueInit[sortQuery as keyof SortType] = true;
    const value = typeQuery === 'down';
    valueSort[sortQuery as keyof SortType] = value;
    sortMap[sortQuery as keyof SortType][typeQuery as keyof MethodType]();
  }

  const [sortState, setSort] = useState(valueSort);
  const [initState, setInit] = useState(valueInit);

  const classState = (label: keyof SortType) => {
    if (!initState[label]) return null;
    return !sortState[label];
  };

  function toggleSort(label: keyof SortType) {
    setInit(() => {
      const temp = {
        price: false,
        count: false,
        [label]: true,
      };
      Object.assign(init, temp);
      return temp;
    });
    setSort((state) => {
      const temp = {
        ...state,
        [label]: !state[label],
      };
      Object.assign(sort, temp);
      return temp;
    });
    const sortMethod = sortState[label] ? 'up' : 'down';
    sortMap[label][sortMethod]();
    query.set('sort', label);
    query.set('type', sortMethod);
    setQuery(query);
  }

  return {
    toggleSort,
    classState,
    setSort,
    setInit,
  };
}
